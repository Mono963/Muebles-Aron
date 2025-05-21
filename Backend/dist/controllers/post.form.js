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
Object.defineProperty(exports, "__esModule", { value: true });
const service_form_1 = require("../services/service.form");
const formPage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, lastName, email, phoneNumber, details } = req.body;
        const createForm = yield (0, service_form_1.servicesPostForm)({
            name,
            lastName,
            email,
            phoneNumber,
            details
        });
        createForm;
        res.status(201).json({ boolean: true });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({
                message: "Faltan datos, por favor ingrese los datos restantes",
                error: error.message,
            });
        }
        else {
            res.status(500).json({
                message: "Error desconocido, inténtelo más tarde",
            });
        }
    }
});
exports.default = formPage;
