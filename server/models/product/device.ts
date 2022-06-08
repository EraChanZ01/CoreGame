import mongoose from 'mongoose';
import { prop, modelOptions, getModelForClass, DocumentType, Ref, pre } from '@typegoose/typegoose';
import Brand from './brand';

@modelOptions({ schemaOptions: { collection: 'devices' } })
export class Device {

   

    @prop({ 
        type: String, 
        unique: true, 
        allowNull: false
    })
    public name: string;
    
    @prop({ 
        type: Number, 
        allowNull: false
    })
    public price: number;

    @prop({ 
        type: String, 
        allowNull: false
    })
    public img: string ;

    @prop({ 
        type: String,
    })
    public deviceinfo: string;

    @prop({

        type: mongoose.Schema.Types.ObjectId, ref:'brands'

    })
    public brand: mongoose.Schema.Types.ObjectId;

    @prop({ type: Date , default:() => Date.now()})
    createdAt: Date;

    @prop({ type: Date , default:() => Date.now()})
    updatedAt: Date;

    

}


export type DeviceType = mongoose.Model<DocumentType<Device>, {}> & Device;
export default getModelForClass(Device);