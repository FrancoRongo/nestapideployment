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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const supplier_entity_1 = require("./supplier.entity");
let SupplierRepository = class SupplierRepository {
    findOne() {
        throw new Error("Method not implemented.");
    }
    constructor(supplierRepository) {
        this.supplierRepository = supplierRepository;
    }
    async getSuppliers() {
        return this.supplierRepository.find({ relations: ['products'] });
    }
    async getSupplierById(id) {
        if (!id) {
            throw new common_1.BadRequestException('Se espera un id como respuesta');
        }
        return this.supplierRepository.findOne({ where: { id } });
    }
    async createSupplier(supplierDto) {
        const newSupplier = this.supplierRepository.create(supplierDto);
        if (!newSupplier) {
            throw new common_1.BadRequestException;
        }
        return this.supplierRepository.save(newSupplier);
    }
    async updateSupplier(id, updateSupplierDto) {
        if (!id) {
            throw new common_1.BadRequestException('Se espear un id como respuesta');
        }
        const supplier = await this.supplierRepository.findOne({ where: { id } });
        if (!supplier) {
            throw new Error(`No se encuentra el proveedor con el siguiente id:${id}`);
        }
        Object.assign(supplier, updateSupplierDto);
        await this.supplierRepository.save(supplier);
        return supplier;
    }
    async deleteSupplier(id) {
        if (!id) {
            throw new common_1.BadRequestException('Se espera un id como respuesta');
        }
        const supplier = await this.supplierRepository.findOne({ where: { id } });
        if (!supplier) {
            throw new Error(`No se encuentra el proveedor con el siguiente id:${id}`);
        }
        await this.supplierRepository.remove(supplier);
        return supplier;
    }
};
exports.SupplierRepository = SupplierRepository;
exports.SupplierRepository = SupplierRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(supplier_entity_1.Supplier)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SupplierRepository);
//# sourceMappingURL=supplier.repository.js.map