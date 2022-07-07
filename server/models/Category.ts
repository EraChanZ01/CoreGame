import mongoose from 'mongoose';
import { prop, modelOptions, getModelForClass, DocumentType, Ref , pre } from '@typegoose/typegoose';


@modelOptions({ schemaOptions: { collection: 'category' } })
export class Category {


    @prop({type: String})
    public Type: string;  


}

export type CategoryType = mongoose.Model<DocumentType<Category>, {}> & Category;
export default getModelForClass(Category);