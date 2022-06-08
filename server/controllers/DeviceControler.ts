import BaseContext from '../BaseContext';
import { Request, Response } from 'express';
import { route, GET, POST, DELETE } from 'awilix-express';

@route('/api/devices')
export default class DeviceController extends BaseContext {

    @GET()
    @route('/all')
    getAll(req: Request, res: Response) {
        const { DeviceService } = this.di;

        const result = DeviceService.find()
            .then((data) => res.answer(data))
            .catch((err) => res.answer(null, err, 404))
    }


    @GET()
    @route('/:id')
    getById(req: Request, res: Response) {
        const { DeviceService } = this.di;
        const result = DeviceService.findById(req.params.id)
            .then((data) => res.answer(data))
            .catch((err) => res.answer(null, err, 404))
    }


    @POST()
    @route('/save')
    save(req: Request, res: Response) {
        const { DeviceService } = this.di;
        const result = DeviceService.save(req.body)
            .then((data) => res.answer(data))
            .catch((err) => res.answer(null, err, 404))
    }
}