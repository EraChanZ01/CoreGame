import  BaseContext  from '../BaseContext';

export default class BrandService extends BaseContext {

    public find() {
        const { BrandModel } = this.di;
        return BrandModel
            .find({})
    }

    public findById(brandId) {
        const { BrandModel } = this.di;
        return BrandModel
            .findById(brandId)
    }

    public async save(body) {
        const { BrandModel } = this.di;
        let page = await BrandModel.findById(body.id);
        if (page) {
            page.set(body);
        } else {
            page = new BrandModel(body);
        }
        return page.save();
    }
}