import { Engrais } from "./engrais";

export class Data{
    
    help:string;
    success: boolean;
    result:{
        records:Engrais[];
        fields: any [];
        sql:string;
    }

}