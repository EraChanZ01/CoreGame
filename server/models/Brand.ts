import mongoose from 'mongoose';
import { prop, modelOptions, getModelForClass, DocumentType, Ref, pre } from '@typegoose/typegoose';


@modelOptions({ schemaOptions: { collection: 'brands' } })
export class Brand {

    
    @prop({type: String})
    public name: string;
    

    @prop({ type: Date , default:() => Date.now()})
    createdAt: Date;

}


export type BrandType = mongoose.Model<DocumentType<Brand>, {}> & Brand;
export default getModelForClass(Brand);