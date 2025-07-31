<template>
  <div class="logs-expense">
    <h2>Expense Logs</h2>
    <ul v-if="expenses.length">
      <li v-for="expense in expenses" :key="expense._id" class="expense-item">
        <strong>{{ expense.title }}</strong> - 
        {{ expense.amount }} | 
        {{ expense.category }} | 
        {{ formatDate(expense.date) }}
      </li>
    </ul>
    <div v-else>
      No expenses found.
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogsExpense',
  data() {
    return {
      expenses: []
    };
  },
  created() {
    this.fetchExpenses();
  },
  methods: {
    async fetchExpenses() {
      try {
        const response = await fetch('/api/expenses');
        if (!response.ok) throw new Error('Failed to fetch expenses');
        this.expenses = await response.json();
      } catch (err) {
        this.expenses = [];
      }
    },
    formatDate(dateStr) {
      if (!dateStr) return '';
      return new Date(dateStr).toLocaleDateString();
    }
  }
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