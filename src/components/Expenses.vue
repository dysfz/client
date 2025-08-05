<template>
  <div class="expenses-text">
    <h1>Expenses List</h1>
  </div>
  <div class="logs-expense">
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
          <td>{{ formatDate(expense.date) }}</td>
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
import Swal from 'sweetalert2';

export default {
  name: "Expenses",
  setup() {
    const expenses = ref([]);

    onMounted(async () => {
      expenses.value = (await getAllExpenses()) || [];
    });

    const onDelete = async (id) => {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "Do you want to delete this expense?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      });
      if (result.isConfirmed) {
        await deleteExpense(id);
        expenses.value = expenses.value.filter((expense) => expense._id !== id);
        Swal.fire('Deleted!', 'Expense has been deleted.', 'success');
      }
    };

    return {
      expenses,
      onDelete,
    };
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
    },
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
.expenses-text {
  color: #eeeeee;
}
</style>