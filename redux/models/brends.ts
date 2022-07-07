import action from 'redux/decorators/action';
import { put, take, call, select } from 'redux-saga/effects';
import Entity from './Entities';
import { ENTITIES } from 'server/common';





export interface Brends {
    id: string;

    name: string;  

    createdAt: Date;

    
}


class BrendsEntity extends Entity {

    constructor() {
        super(ENTITIES.BRENDS);
    }

    @action()
    public * fetchAllBrends() {
        yield call(this.xRead, 'brends/all');
    }

    @action()
    public * saveBrends() {
        yield call(this.xSave, 'brends/save');
    }

}

export default new BrendsEntity();