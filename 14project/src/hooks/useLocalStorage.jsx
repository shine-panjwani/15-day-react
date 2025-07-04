import { useEffect, useState } from "react";

export function useLocalStorage(key) {
  const setItem = (value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  const getItem = () => {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        return JSON.parse(item);
      }
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  const removeItem = () => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log("error ", error);
    }
  };
  return { setItem, getItem,removeItem };
}
