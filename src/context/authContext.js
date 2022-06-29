import { useReducer, useEffect, createContext } from "react";

// reducer function
const firebaseReducer = (state, action) => {
    switch (action.type) {
       case "LOGGED_IN_USER":
        return { ...state, user: action.payload };
       default:
        return state;
    }
}

// state
const initialState = {
    user: null,
}

// create context
const AuthContext = createContext();

// context provider
const AuthProvider = () => {
    const [state, dispatch] = useReducer(firebaseReducer, initialState);
}