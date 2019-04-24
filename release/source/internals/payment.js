"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Types = require("../types");
/**
 * Invoices payment, entity class.
 */
let Payment = class Payment extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Payment.Common)),
    Class.Public()
], Payment.prototype, "type", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Payment.Status)),
    Class.Public()
], Payment.prototype, "status", void 0);
__decorate([
    RestDB.Schema.Id(),
    Class.Public()
], Payment.prototype, "cardId", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Payment.prototype, "orderId", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Payment.prototype, "transactionId", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Payment.prototype, "link", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Payment.prototype, "error", void 0);
Payment = __decorate([
    RestDB.Schema.Entity('invoices/payment'),
    Class.Describe()
], Payment);
exports.Payment = Payment;
//# sourceMappingURL=payment.js.map