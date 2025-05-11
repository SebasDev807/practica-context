import Swal from 'sweetalert2';

export const alert = {

    success: (title: string, text: string, btnText?: string) => {
        return Swal.fire({
            title,
            text,
            imageWidth: 200,
            imageUrl: "/success.png",
            imageAlt: "Success image",
            confirmButtonColor: "#1D293D",
            confirmButtonText: btnText ?? 'Aceptar'
        });
    },
    error: (title: string, text: string) => {
        Swal.fire({
            title,
            text,
            imageWidth: 300,
            imageUrl: '/error.png',
            imageAlt: 'Error image',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: "#1D293D"
        })
    }
}