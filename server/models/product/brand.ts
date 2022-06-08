import mongoose from 'mongoose';
import { prop, modelOptions, getModelForClass, DocumentType, Ref, pre } from '@typegoose/typegoose';


@modelOptions({ schemaOptions: { collection: 'brands' } })
export class Brand {

    
   
    @prop({ 
        type: String, 
        unique: true, 
        allowNull: false
    })
    public name: string;

}


export type BrandType = mongoose.Model<DocumentType<Brand>, {}> & Brand;
export default getModelForClass(Brand);