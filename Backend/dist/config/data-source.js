"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const envs_1 = require("./envs");
const Form_1 = require("../entities/Form");
const TagetPdf_1 = require("../entities/TagetPdf");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.DB_LOCALHOST,
    port: envs_1.DB_PORT,
    username: envs_1.DB_USERNAME,
    password: envs_1.DB_PASSWORD,
    database: envs_1.DB_NAME,
    // dropSchema:true, // Sirve para que cada ves que se inicialize se borre la base de datos anterior
    synchronize: true,
    logging: ["error"],
    entities: [Form_1.Form, TagetPdf_1.TargetPdf],
    subscribers: [],
    migrations: [],
});
