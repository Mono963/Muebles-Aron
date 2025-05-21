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
exports.checkBucketsExist = exports.supabase = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
exports.supabase = (0, supabase_js_1.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const checkBucketsExist = (bucketNames) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: buckets, error } = yield exports.supabase.storage.listBuckets();
    if (error)
        throw error;
    for (const name of bucketNames) {
        if (!buckets.find((b) => b.name === name)) {
            throw new Error(`Bucket '${name}' no existe en Supabase Storage.`);
        }
    }
});
exports.checkBucketsExist = checkBucketsExist;
