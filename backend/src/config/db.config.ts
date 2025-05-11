import mongoose from "mongoose"

const dbConnect = async (mongoUrl: string) => {

    if (!mongoUrl) throw new Error('No hay una url valida');

    try {
        const instance = await mongoose.connect(mongoUrl);
        console.log(`[dbconnect]: Conexión establecida en ${instance.connection.host}`);
    } catch (error) {
        console.error(`[dbConnect]: ${error.message}`);
        process.exit();

    }

}

export default dbConnect;