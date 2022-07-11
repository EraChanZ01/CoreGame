import mongoose from 'mongoose';
import { prop, modelOptions, getModelForClass, DocumentType, Ref, pre } from '@typegoose/typegoose';
import { Blob } from 'buffer'


@modelOptions({ schemaOptions: { collection: 'brends' } })
export class Brends {

    
    @prop({type: String})
    public name: string;

    @prop({type: String})
    public img: string;

    @prop({type: String})
    public email: string;
    

    @prop({ type: Date , default:() => Date.now()})
    createdAt: Date;

}


export type BrendsType = mongoose.Model<DocumentType<Brends>, {}> & Brends;
export default getModelForClass(Brends);