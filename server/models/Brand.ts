import mongoose from 'mongoose';
import { prop, modelOptions, getModelForClass, DocumentType, Ref, pre } from '@typegoose/typegoose';


@modelOptions({ schemaOptions: { collection: 'brends' } })
export class Brends {

    
    @prop({type: String})
    public name: string;
    

    @prop({ type: Date , default:() => Date.now()})
    createdAt: Date;

}


export type BrendsType = mongoose.Model<DocumentType<Brends>, {}> & Brends;
export default getModelForClass(Brends);