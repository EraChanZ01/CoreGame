import  BaseContext  from '../BaseContext';

export default class DeviceService extends BaseContext {

    public find() {
        const { DeviceModel } = this.di;
        return DeviceModel
            .find({})
    }

    public findById(brandId) {
        const { DeviceModel } = this.di;
        return DeviceModel
            .findById(brandId)
    }

    public async save(body) {
        const { DeviceModel } = this.di;
        let device = await DeviceModel.findById(body.id);
        if (device) {
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!1')
            device.set(body);
        } else {
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!2')
            device = new DeviceModel(body);
        }
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!3')
        return device.save();
    }
}