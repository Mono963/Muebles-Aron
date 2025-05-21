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
exports.servicesPostForm = void 0;
const form_repositories_1 = require("../repositories/form.repositories");
const Email_1 = require("../utils/Email");
const servicesPostForm = (ForDto) => __awaiter(void 0, void 0, void 0, function* () {
    const createForm = form_repositories_1.formRepositoryAron.create({
        name: ForDto.name,
        lastName: ForDto.lastName,
        email: ForDto.email,
        phoneNumber: ForDto.phoneNumber,
        details: ForDto.details
    });
    yield form_repositories_1.formRepositoryAron.save(createForm);
    yield (0, Email_1.sendFormEmail)(ForDto);
});
exports.servicesPostForm = servicesPostForm;
