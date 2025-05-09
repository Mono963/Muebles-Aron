import nodemailer from "nodemailer";
import dotenv from "dotenv"

dotenv.config();

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false
    }
});

export const sendFormEmail = async ( data: {
    name: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    details: string;
}) => {
    const mailOptions  = {
        from: `"Formulario de contacto" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: "Nuevo Formulario de contacto",
        html: `
            <h1>Hola mi amor aca esta la informacion de la apagina, despues mando foto pija</h1>
            <p><strong>Nombre:</strong> ${data.name}</p>
            <p><strong>Apellido:</strong> ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Numero</strong> ${data.phoneNumber}</p>
            <p><strong>Datalles</strong> ${data.details}</p>
            `
    };
    try {
        const info =  await transporter.sendMail(mailOptions);
        console.log("Datos enviados con exito", info.response);
    } catch (error) {
        console.error("Los datos del formulario se enviaron con exitoi", error);
        throw error;
    }


}
