"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const service_auth_token_1 = __importDefault(require("../services/service.auth.token"));
dotenv_1.default.config();
const authController = (req, res) => {
    const { clave } = req.body;
    if (clave !== process.env.AUTH_ACCESS_KEY) {
        res.status(401).json({ message: "Clave incorrecta" });
        return;
    }
    const token = (0, service_auth_token_1.default)();
    res.status(200).json({ token });
};
exports.default = authController;
