import { data } from "../../data";
import {
  CHANGE_MODE,
  DIL_AL,
  ENGLISH,
  MOD_AL,
  TURKISH,
} from "../actions/actions";

const initialState = {
  language: "english",
  darkMode: false,
  myData: data.english,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODE:
        if (state.darkMode) {
          return { ...state, darkMode: false };
        } else {
          return { ...state, darkMode: true };
      }

    case TURKISH:
      localStorage.setItem("language", "turkish");
      return {
        ...state,
        myData: { ...data.turkish },
        language: "turkish",
      };

    case ENGLISH:
      localStorage.setItem("language", "english");
      return {
        ...state,
        myData: { ...data.english },
        language: "english",
      };
    

    case DIL_AL:
      return { ...state, language: action.payload };
    case MOD_AL:
      return { ...state, darkMode: action.payload };
    default:
      return state;
  }
};