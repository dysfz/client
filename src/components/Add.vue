<template>
  <div class="add-expense">
    <h2>Add New Expense</h2>
    <form @submit.prevent="submitExpense">
      <div class="field">
        <label for="title">Title</label>
        <input id="title" v-model="expense.title" required />
      </div>
      <div class="field">
        <label for="amount">Amount</label>
        <input id="amount" v-model.number="expense.amount" type="number" min="0" step="0.01" required />
      </div>
      <div class="field">
        <label for="date">Date</label>
        <input id="date" v-model="expense.date" type="date" required />
      </div>
      <div class="field">
        <label for="category">Category</label>
        <input id="category" v-model="expense.category" required />
      </div>
      <button type="submit">Add Expense</button>
    </form>
    <div v-if="success" class="success-message">
      Expense added successfully!
    </div>
    <div v-if="error" class="error-message">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddExpense',
  data() {
    return {
      expense: {
        title: '',
        amount: null,
        date: '',
        category: ''
      },
      success: false,
      error: ''
    };
  },
  methods: {
    async submitExpense() {
      this.success = false;
      this.error = '';
      try {
        // Replace the URL with your actual API endpoint
        const response = await fetch('/api/expenses', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.expense)
        });
        if (!response.ok) throw new Error('Failed to add expense');
        this.success = true;
        this.expense = { title: '', amount: null, date: '', category: '' };
      } catch (err) {
        this.error = err.message;
      }
    }
  }
};
</script>

<style scoped>
.add-expense {
  max-width: 400px;
  margin: 40px auto;
  padding: 32px 24px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
}
.field {
  margin-bottom: 18px;
  text-align: left;
}
label {
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
}
input {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
button {
  background: #42b983;
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
}
button:hover {
  background: #2c3e50;
}
.success-message {
  color: #27ae60;
  margin-top: 16px;
}
.error-message {
  color: #e74c3c;
  margin-top: 16px;
}
</style>