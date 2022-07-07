import UserModel, { UserType } from './User';
import { asClass, asValue } from 'awilix';
import BrandModel, {BrandType} from './Brand'; 
import CategoryModel, {CategoryType} from './Category';
import ModelsModel, {ModelsType} from './Model';


export interface IModelContainer {
    UserModel: UserType;
    BrandModel: BrandType;
    CategoryModel: CategoryType;
    ModelsModel: ModelsType;

}


export default {
    UserModel: asValue(UserModel),
    BrandModel: asValue(BrandModel),
    CategoryModel: asValue(CategoryModel),
    ModelsModel: asValue(ModelsModel),

}