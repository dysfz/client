<template>
  <div class="edit-expense">
    <h2>Edit Expense</h2>
    <form @submit.prevent="editExpense">
      <div class="field">
        <label for="id">Expense ID</label>
        <input id="id" v-model="expenseId" required />
      </div>
      <div class="field">
        <label for="title">Title</label>
        <input id="title" v-model="expense.title" />
      </div>
      <div class="field">
        <label for="amount">Amount</label>
        <input id="amount" v-model.number="expense.amount" type="number" min="0" step="0.01" />
      </div>
      <div class="field">
        <label for="date">Date</label>
        <input id="date" v-model="expense.date" type="date" />
      </div>
      <div class="field">
        <label for="category">Category</label>
        <input id="category" v-model="expense.category" />
      </div>
      <button type="submit">Update</button>
    </form>
    <div v-if="success" class="success-message">
      Expense updated successfully!
    </div>
    <div v-if="error" class="error-message">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditExpense',
  data() {
    return {
      expenseId: '',
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
  watch: {
    expenseId(newId) {
      this.success = false;
      this.error = '';
      if (newId) {
        this.fetchExpense(newId);
      }
    }
  },
  methods: {
    async fetchExpense(id) {
      try {
        const response = await fetch(`/api/expenses/${id}`);
        if (!response.ok) throw new Error('Expense not found');
        const data = await response.json();
        // Format date for input[type="date"]
        data.date = data.date ? data.date.substr(0, 10) : '';
        this.expense = data;
      } catch (err) {
        this.error = err.message;
        this.expense = { title: '', amount: null, date: '', category: '' };
      }
    },
    async editExpense() {
      this.success = false;
      this.error = '';
      try {
        const response = await fetch(`/api/expenses/${this.expenseId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.expense)
        });
        if (!response.ok) throw new Error('Failed to update expense');
        this.success = true;
      } catch (err) {
        this.error = err.message;
      }
    }
  }
};
</script>

<style scoped>
.edit-expense {
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
  background: #2980b9;
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
}
button:hover {
  background: #1c5980;
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