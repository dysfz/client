//* import axios (to call API)
const axios = require('axios')

//* set backend (server) url (endpoint)
const backendUrl = "https://localhost:8080"

//* call API from backend
export const getAllExpenses = async () => {
   try {
      const response = await axios.get(backendUrl);
      return response.data;
   } catch (err) {
      console.error(err);
      return null;
   }
}

export const deleteExpense = async (id) => {
   try {
      const response = await axios.delete(backendUrl + id);
      return response.data;
   } catch (err) {
      console.error(err);
      return null;
   }
}

export const deleteAllExpenses = async () => {
   try {
      const response = await axios.delete(backendUrl);
      return response.data;
   } catch (err) {
      console.error(err);
      return null;
   }
}

export const addNewExpense = async (expense) => {
   try {
      const response = await axios.post(backendUrl, expense);
      return response.data;
   } catch (err) {
      console.error(err);
      return null;
   }
}

export const getExpenseById = async (id) => {
   try {
      const response = await axios.get(backendUrl + id);
      return response.data;
   } catch (err) {
      console.error(err);
      return null;
   }
}

export const editExpense = async (id, expense) => {
   try {
      const response = await axios.put(backendUrl + id, expense);
      return response.data;
   } catch (err) {
      console.error(err);
      return null;
   }
}