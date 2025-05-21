"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendFormEmail = exports.transporter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.transporter = nodemailer_1.default.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false
    }
});
const sendFormEmail = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const mailOptions = {
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
        const info = yield exports.transporter.sendMail(mailOptions);
        console.log("Datos enviados con exito", info.response);
    }
    catch (error) {
        console.error("Los datos del formulario se enviaron con exitoi", error);
        throw error;
    }
});
exports.sendFormEmail = sendFormEmail;
