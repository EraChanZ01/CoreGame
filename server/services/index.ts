import { asClass, asValue } from 'awilix';
import BrandService from './BrandServise';
import DeviceService from './DeviseServis';
import UserService from './UserService';




export interface IServicesContainer {
    UserService: UserService;
    BrandService: BrandService;
    DeviceService: DeviceService;

}

export default {
    UserService: asClass(UserService).singleton(),
    BrandService: asClass(BrandService).singleton(),
    DeviceService: asClass(DeviceService).singleton(),

}