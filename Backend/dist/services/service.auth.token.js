"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const generarToken = () => {
    return jsonwebtoken_1.default.sign({}, process.env.JWT_SECRET, { expiresIn: '24h' } // Configura el tiempo de expiración del token (0 significa que no expira)
    );
};
exports.default = generarToken;
