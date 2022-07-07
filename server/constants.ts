export enum ROLE {
    GUEST = 'guest',
    USER = 'user',
    ADMIN = 'admin',
}


export interface IIdentity {
    userId: any;
    firstName: string,
    lastName: string,
    phoneNumber: number,
    location: string,
    userEmail: string;
    token?: string;
    role: ROLE;
}

export interface IDevice {
    brendsId: any;
    name: string,
    img: File,
   
}


export interface IBrends {
    brendsId: any;
    name: string,
    email: string,
    img: string,
   
}


export interface ILoginData {
    email: string,
    password: string,
}
