import {

    Get_categories,
    Error_categories,
    Get_category
  
}
from '../actions/types';

const initialState={

    categories:[],
    category:null,
    loading:true,
    error:{}
}


export default function (state=initialState,action){

const {type,payload} =action;


switch (type){


    case Get_categories:
        return {
        ...state,
        categories:payload,
        loading:false
    }



    case Error_categories:
        return {
            ...state,
            error:payload,
            loading:false
        };



        case Get_category:
            return {
            ...state,
            category:payload,
            loading:false
        }
    

default :
return state;

}

}