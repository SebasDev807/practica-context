import { hashSync } from 'bcryptjs';
import { Schema, model } from 'mongoose'
import { User } from '../interfaces'

const UserSchema = new Schema<User>({

    name: {
        type: String,
        required: true,
    },

    lastname: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
        match: [
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
            'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo',
        ],
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'El email no es válido',
        ],
    },
    photoUrl: {
        type: String,
        default: 'https://res.cloudinary.com/veltrix-cloud/image/upload/v1746889870/no_photo_oqyig3.png',
        match: [
            /^(https?:\/\/)?(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i,
            "Url invalida"
        ]
    }

})

UserSchema.pre('save', function (next) {
    this.password = hashSync(this.password, 10)
    next();
});

UserSchema.methods.toJSON = function () {
    //Remove unwanted properties, for example:
    //passwords or sensitive data.
    const { __v, _id, password, ...rest } = this.toObject()
    return rest
}

export const UserModel = model('User', UserSchema)