import React, { useState, createContext, useEffect, useReducer } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES_MAP: "SET_CATEGORIES_MAP",
};

const categoriesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return { ...state, categoriesMap: payload };
    default:
      throw new Error(`Invalid action ${type}`);
  }
};

const INITIAL_STATE = {
  categoriesMap: {},
};

export const CategoriesProvider = ({ children }) => {
  // const [categoriesMap, setCategoriesMap] = useState({});
  const [state, dispatch] = useReducer(categoriesReducer, INITIAL_STATE);

  const { categoriesMap } = state;
  console.log("cat map", categoriesMap);

  const setCategoriesMap = (category) => {
    dispatch({
      type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP,
      payload: category,
    });
  };

  const value = { categoriesMap };

  // useEffect(() => {
  //   addCollectionAndDocuments("categories", productsData);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      console.log(categoriesMap);
      setCategoriesMap(categoriesMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
