import { CategoriesList } from "../../Data/CategoriesList";
import { SELECT_CATEGORY } from "../action/category.action";


const initialState = {
    categories: CategoriesList,
    selected: null,
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type){ 
        case SELECT_CATEGORY: 
                const filterCategory = state.categories.find(c => c.id === action.categoryId);
            return {...state, selected : filterCategory}

    default: 
        return state;
    
}};

export default categoryReducer;