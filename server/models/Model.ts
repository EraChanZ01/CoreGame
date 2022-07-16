import mongoose from 'mongoose';
import { prop, modelOptions, getModelForClass, DocumentType, Ref , pre } from '@typegoose/typegoose';


@modelOptions({ schemaOptions: { collection: 'models' } })
export class Models {


    @prop({type: String})
    public name: string;  

    @prop({type: Number})
    public price: number;  


    @prop({type: String})
    public info: string;  


    @prop({type: String})
    public image: string;  

    @prop({type: String})
    public categoryName: string;

    @prop({type: String})
    public brendName: string;




    @prop({ type: Date , default:() => Date.now()})
    createdAt: Date;

    @prop({ type: Date , default:() => Date.now()})
    updatedAt: Date;  
}

export type ModelsType = mongoose.Model<DocumentType<Models>, {}> & Models;
export default getModelForClass(Models);