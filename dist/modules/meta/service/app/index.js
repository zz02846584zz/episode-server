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
exports.AppMetaService = void 0;
const core_1 = require("@cool-midway/core");
const decorator_1 = require("@midwayjs/decorator");
const typeorm_1 = require("@midwayjs/typeorm");
const typeorm_2 = require("typeorm");
const entity_1 = require("../../entity");
/**
 * 描述
 */
let AppMetaService = class AppMetaService extends core_1.BaseService {
};
exports.AppMetaService = AppMetaService;
__decorate([
    (0, typeorm_1.InjectEntityModel)(entity_1.MetaEntity),
    __metadata("design:type", typeorm_2.Repository)
], AppMetaService.prototype, "metaEntity", void 0);
exports.AppMetaService = AppMetaService = __decorate([
    (0, decorator_1.Provide)()
], AppMetaService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9tZXRhL3NlcnZpY2UvYXBwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDRDQUFnRDtBQUNoRCxtREFBOEM7QUFDOUMsK0NBQXNEO0FBQ3RELHFDQUFxQztBQUNyQyx5Q0FBMEM7QUFFMUM7O0dBRUc7QUFFSSxJQUFNLGNBQWMsR0FBcEIsTUFBTSxjQUFlLFNBQVEsa0JBQVc7Q0FHOUMsQ0FBQTtBQUhZLHdDQUFjO0FBRXpCO0lBREMsSUFBQSwyQkFBaUIsRUFBQyxtQkFBVSxDQUFDOzhCQUNsQixvQkFBVTtrREFBYTt5QkFGeEIsY0FBYztJQUQxQixJQUFBLG1CQUFPLEdBQUU7R0FDRyxjQUFjLENBRzFCIn0=