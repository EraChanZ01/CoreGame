import BaseContext from '../BaseContext';
import { Request, Response } from 'express';
import { route, GET, POST, DELETE } from 'awilix-express';


@route('/api/brands')
export default class BrandController extends BaseContext {

    @GET()
    @route('/all')
    getAll(req: Request, res: Response) {
        const { BrandService } = this.di;

        const result = BrandService.find()
            .then((data) => res.answer(data))
            .catch((err) => res.answer(null, err, 404))
    }



    @GET()
    @route('/save/all')
    saveAll(req: Request, res: Response) {
        const{ BrandService } = this.di;

        const result = BrandService.find()
              .then((data) => res.answer(data))
              .catch((err) => res.answer(null, err, 404))

}



    @GET()
    @route('/:id')
    getById(req: Request, res: Response) {
        const { BrandService } = this.di;
        
        const result = BrandService.findById(req.params.id)
            .then((data) => res.answer(data))
            .catch((err) => res.answer(null, err, 404))
    }


    @POST()
    @route('/save')
    save(req: Request, res: Response) {
        const { BrandService } = this.di;
        console.log(req)
        const result = BrandService.save(req.body)
            .then((data) => res.answer(data))
            .catch((err) => res.answer(null, err, 404))
    }

}