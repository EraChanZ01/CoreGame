


export enum ENTITIES {
    USERS  = "users",
    BRENDS = "brands",
    MODEL = "model",
    CATEGORY = "category"
}

export interface SagaAction {
    saga: () => void;
    trigger: (data: any) => void;
}
export interface ISagaAction {
    [entity: string]: {
        [action: string]: {
            saga?: () => void;
            trigger: (data: any) => void;
        },
    };
}


export const isEmpty = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object
