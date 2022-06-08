import UserModel, { UserType } from './User';
import { asClass, asValue } from 'awilix';
import BrandModel, {BrandType} from './product/brand';
import DeviceModel, {DeviceType} from './product/device';

export interface IModelContainer {
    UserModel: UserType;
    BrandModel: BrandType;
    DeviceModel: DeviceType;

}


export default {
    UserModel: asValue(UserModel),
    BrandModel: asValue(BrandModel),
    DeviceModel: asValue(DeviceModel),
}