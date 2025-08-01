//* import axios (to call API)
const axios = require('axios')

//local backend endpoint
//const baseUrl = "http://localhost:8080"
//cloud backend endpoint
const baseUrl = "https://expense-tracker-nong.onrender.com"
const expenseUrl = `${expenseUrl}/expenses/`

//* call API from expense
export const getAllExpenses = async () => {
   try {
      const response = await axios.get(expenseUrl);
      return response.data;
   } catch (err) {
      console.error(err);
      return null;
   }
}

export const deleteExpense = async (id) => {
   try {
      const response = await axios.delete(expenseUrl + id);
      return response.data;
   } catch (err) {
      console.error(err);
      return null;
   }
}

export const deleteAllExpenses = async () => {
   try {
      const response = await axios.delete(expenseUrl);
      return response.data;
   } catch (err) {
      console.error(err);
      return null;
   }
}

export const addNewExpense = async (expense) => {
   try {
      const response = await axios.post(expenseUrl, expense);
      return response.data;
   } catch (err) {
      console.error(err);
      return null;
   }
}

export const getExpenseById = async (id) => {
   try {
      const response = await axios.get(expenseUrl + id);
      return response.data;
   } catch (err) {
      console.error(err);
      return null;
   }
}

export const editExpense = async (id, expense) => {
   try {
      const response = await axios.put(expenseUrl + id, expense);
      return response.data;
   } catch (err) {
      console.error(err);
      return null;
   }
}