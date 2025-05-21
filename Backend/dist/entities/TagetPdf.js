"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetPdf = void 0;
const typeorm_1 = require("typeorm");
let TargetPdf = class TargetPdf {
};
exports.TargetPdf = TargetPdf;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], TargetPdf.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 100,
        unique: true
    }),
    __metadata("design:type", String)
], TargetPdf.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "image_url",
        unique: true
    }),
    __metadata("design:type", String)
], TargetPdf.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "pdf_url",
        unique: true
    }),
    __metadata("design:type", String)
], TargetPdf.prototype, "pdfUrl", void 0);
exports.TargetPdf = TargetPdf = __decorate([
    (0, typeorm_1.Entity)({ name: "target_pdf" })
], TargetPdf);
