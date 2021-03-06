import { IContextContainer } from './container';

declare global {

    namespace Express {
        interface Response {
            answer: (data: any, message?: any, status?: number) => void;
        }

        interface Request {

        }
    }
}
export default class BaseContext {
    protected di: IContextContainer;

    constructor(opts: IContextContainer) {
        this.di = opts;
    }
}