import { asClass, asValue } from 'awilix';
import BrandService from './BrandService';
import ModelsService from './UserService';
import CategoryService from './CategoryService';
import UserService from './UserService';




export interface IServicesContainer {
    UserService: UserService;
    BrandService: BrandService;
    CategoryService: CategoryService;
    ModelsService: ModelsService;

}

export default {
    UserService: asClass(UserService).singleton(),
    BrandService: asClass(BrandService).singleton(),
    CategoryService: asClass(CategoryService).singleton(),
    ModelsService: asClass(CategoryService).singleton(),

}