"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formRepositoryAron = void 0;
const data_source_1 = require("../config/data-source");
const Form_1 = require("../entities/Form");
exports.formRepositoryAron = data_source_1.AppDataSource.getRepository(Form_1.Form);
