import {PropertyType} from "./property.type";

export type GeneralType = {
  name: string,
  results:[
    {
      name: string,
      point:number,
      buttonId: string,
      description?: string[]
    }
  ],

}[]
