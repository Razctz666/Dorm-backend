export interface Student {
    roomCategory : string;
    roomNo: number & string;
    personNo: number & string;
    surName: string;
    firstName: string;
    middleName: string;

    gender: string;
    mobileNo: number;

    email: string;

    currentAdress: string;
    collegeName: string;
    isStatus: boolean;
}
