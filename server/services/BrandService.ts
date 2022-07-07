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

    public delete(brandId) {
        const { BrandModel } = this.di;
        return BrandModel
            .findByIdAndRemove(brandId)
    }

    public async save(body,id) {
        const { BrandModel } = this.di;
        let page = await BrandModel.findById(id);
        if (page) {
            page.set(body);
        } else {
            page = new BrandModel(body);
        }
        return page.save();
    }
}