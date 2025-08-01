<template>
  <div>
    <h1>Expenses List</h1>
    <table class="ui celled compact table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Date</th>
          <th colspan="3">Menu</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(expense, index) in expenses" :key="index">
          <td>{{ expense.category }}</td>
          <td>{{ expense.description }}</td>
          <td>{{ expense.amount }}</td>
          <td>{{ expense.date }}</td>
          <td width="75">
            <router-link
              class="ui button yellow"
              :to="{ name: 'Edit', params: { id: expense._id } }"
              >Edit</router-link
            >
          </td>
          <td width="75">
            <a @click.prevent="onDelete(expense._id)" class="ui red button"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { getAllExpenses, deleteExpense } from "../store/index.js";

export default {
  name: "Expenses",
  setup() {
    const expenses = ref([]);

    //display all expenses
    onMounted(async () => {
      expenses.value = (await getAllExpenses()) || [];
    });

    //delete expense by id
    const onDelete = async (id) => {
      //show confirmation before deletion
      const deleteConfirm = window.confirm("Are you sure to delete this expense?");
      if (deleteConfirm) {
        //delete expense using API
        await deleteExpense(id);
        //refresh expense list after deletion
        expenses.value = expenses.value.filter((expense) => expense._id !== id);
      }
    };

    return {
      expenses,
      onDelete,
    };
  },
};
</script>

<style scoped>
.logs-expense {
  max-width: 600px;
  margin: 40px auto;
  padding: 32px 24px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
}
.expense-item {
  margin-bottom: 14px;
  padding: 10px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.03);
  text-align: left;
}
</style>