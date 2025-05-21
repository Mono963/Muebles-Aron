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
exports.Form = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
let Form = class Form {
};
exports.Form = Form;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Form.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    (0, class_validator_1.Length)(1, 100),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Form.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "last_name",
        length: 100
    }),
    (0, class_validator_1.Length)(1, 100),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Form.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 100,
        unique: true
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.Length)(5, 100),
    __metadata("design:type", String)
], Form.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint" }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], Form.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    (0, class_validator_1.Length)(0, 1000),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Form.prototype, "details", void 0);
exports.Form = Form = __decorate([
    (0, typeorm_1.Entity)({
        name: "formdata"
    })
], Form);
