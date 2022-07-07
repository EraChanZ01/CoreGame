import action from 'redux/decorators/action';
import { put, take, call, select } from 'redux-saga/effects';
import Entity from './Entities';
import { ENTITIES } from 'server/common';





export interface Brends {
    id: string;

    img: string;

    name: string;  

    createdAt: Date;

    
}


class BrendsEntity extends Entity {

    constructor() {
        super(ENTITIES.BRENDS);
    }

    @action()
    public * fetchAllBrend() {
        yield call(this.xRead, 'brends/all');
    }



    @action()
    public * saveBrand(data) {
        yield call(this.xSave, 'brends/save', data);
    }

}

export default new BrendsEntity();