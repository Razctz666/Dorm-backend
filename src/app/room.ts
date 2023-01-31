export interface Room {
    [x: string]: any;
    roomNo: number & string;
    roomType: number & string;
    person1: boolean; 
    person2: boolean; 
    person3: boolean; 
}