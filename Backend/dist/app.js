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
const server_1 = __importDefault(require("./server"));
const envs_1 = require("./config/envs");
require("reflect-metadata");
const data_source_1 = require("./config/data-source");
const initializeApp = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield data_source_1.AppDataSource.initialize();
        console.info("DATABASE connection established");
        server_1.default.listen(envs_1.PORT, () => {
            console.log(`Server running on port ${envs_1.PORT}`);
        });
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error establishing database connection:", error.message);
            console.error("Stack trace:", error.stack);
        }
        else {
            console.error("Unknown error:", error);
        }
    }
});
initializeApp();
