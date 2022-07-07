import action from 'redux/decorators/action';
import { put, take, call, select } from 'redux-saga/effects';
import Entity from './Entities';
import { ENTITIES } from 'server/common';


export interface Models {
    id: string;

    name: string;
    
    categoryid: string;

    brendid: string;

    price: number;

    info: string;

    image: string;

    createdAt: Date;

    updatedAt: Date;


    
}


class ModelsEntity extends Entity {

    constructor() {
        super(ENTITIES.MODEL);
    }

    @action()
    public * fetchAllModels() {
        yield call(this.xRead, 'models/all');
    }

}

export default new ModelsEntity();