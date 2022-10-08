import { Breads } from "../../Data/Breads";
import { FILTERED_BREAD } from "../action/bread.action";
import { SELECT_BREAD } from "../action/bread.action";

const initialState = {
    breads: Breads,
    breadsFilter: [],
    selected: null,
};

const breadsReducer = (state = initialState, action) => {
    switch (action.type){
        case SELECT_BREAD:
            return {
                ...state, selected: state.breads.find( b  => b.id === action.breadID )
            }
        case FILTERED_BREAD:
            return{ 
                ...state, breadsFilter: state.breads.filter( b => b.categoryId === action.categoryID )
            }    

        default:
            return state;    
    }
    
};

export default breadsReducer;