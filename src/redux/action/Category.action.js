
import axios from 'axios';
import { ADD_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY, GET_CATEGORY } from '../ActionType';
import axiosInstance from '../../utilitis/axiosInstance';

export const getCategory =(data)=> async (dispatch) => {
  try {
    const response = await axiosInstance.get("categories/list-categories");
    dispatch({ type: GET_CATEGORY, payload: response.data.data });
  } catch (error) {
    console.error(error);
  }
};

export const addCategory = (data)=> async (dispatch) => {
  try {
    const response =await axiosInstance.post("categories/add-category", data,);
    dispatch({ type: ADD_CATEGORY, payload: response.data.data });
  } catch (error) {
    console.error(error);
  }
};

export const deleteCategory = (id)=> async (dispatch) => {
  try {
    await axiosInstance.delete(`categories/delete-category/${id}`);
    dispatch({ type: DELETE_CATEGORY, payload: id });

  } catch (error) {
    console.error(error);
  }
};

export const updateCategory = (data)=> async (dispatch) => {
  try {
    await axiosInstance.put(`categories/update-category/${data._id}`, data);
    dispatch({ type: EDIT_CATEGORY, payload: data });

  } catch (error) {
    console.error(error);
  }
};

getCategory()

// sub_categories