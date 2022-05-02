import { Quiz } from "./quiz.model";

export interface Category {

     cId: number;
	
	 title?:string;
	
	 description?:string;

     quiz?:Quiz[];

}
