import { Update } from "@material-ui/icons";

//Category Reducer
const defaultState = {
  category: [],
};

const categoryReducer = (state = defaultState, action) => {
  // console.log(action.payload.id);
  switch (action.type) {
    case "ADD_CATEGORY": {
      return {
        ...state,
        category: [
          ...state.category,
          { id: state.category.length, name: action.payload.name },
        ],
      };
    }
    case "REMOVE_CATEGORY": {
      console.log(state.category);

      return {
        ...state,
        category: state.category.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    }
    case "EDIT_CATEGORY": {
      const UpdateCategory = state.category;
      UpdateCategory[action.payload.index].name = action.payload.name;
      // console.log(UpdateCategory);
      return {
        ...state,
        category: [...UpdateCategory],
      };
    }

    default:
      return state;
  }
};
export default categoryReducer;
