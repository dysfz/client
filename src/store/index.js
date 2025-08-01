//* import axios (to call API)
const axios = require('axios')

//* set base (server) url (endpoint)
const baseUrl = "https://expense-tracker-nong.onrender.com"
const expenseUrl = '${baseUrl}/expenses/'

//* call API from base
export const getAllExpenses = async () => {
   try {
      const response = await axios.get(baseUrl);
      return response.data;
   } catch (err) {
      console.error(err);
      return null;
   }
}

export const deleteExpense = async (id) => {
   try {
      const response = await axios.delete(baseUrl + id);
      return response.data;
   } catch (err) {
      console.error(err);
      return null;
   }
}

export const deleteAllExpenses = async () => {
   try {
      const response = await axios.delete(baseUrl);
      return response.data;
   } catch (err) {
      console.error(err);
      return null;
   }
}

export const addNewExpense = async (expense) => {
   try {
      const response = await axios.post(baseUrl, expense);
      return response.data;
   } catch (err) {
      console.error(err);
      return null;
   }
}

export const getExpenseById = async (id) => {
   try {
      const response = await axios.get(baseUrl + id);
      return response.data;
   } catch (err) {
      console.error(err);
      return null;
   }
}

export const editExpense = async (id, expense) => {
   try {
      const response = await axios.put(baseUrl + id, expense);
      return response.data;
   } catch (err) {
      console.error(err);
      return null;
   }
}