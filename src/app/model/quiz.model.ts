import { Component } from "@angular/core";
import { Category } from "./category.model";
import { Question } from "./question.model";

export interface Quiz {

    qId?: number;
	
	title?:string;
	
	description?:string;

    maxMarks?:any;

    numberOfQuestion?:any;

    active?:boolean;

    category?: Category;

    question?:Question[];
    
}
