<template>
  <div class="delete-expense">
    <h2>Delete Expense</h2>
    <form @submit.prevent="deleteExpense">
      <div class="field">
        <label for="id">Expense ID</label>
        <input id="id" v-model="expenseId" required />
      </div>
      <button type="submit">Delete</button>
    </form>
    <div v-if="success" class="success-message">
      Expense deleted successfully!
    </div>
    <div v-if="error" class="error-message">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeleteExpense',
  data() {
    return {
      expenseId: '',
      success: false,
      error: ''
    };
  },
  methods: {
    async deleteExpense() {
      this.success = false;
      this.error = '';
      try {
        const response = await fetch(`/api/expenses/${this.expenseId}`, {
          method: 'DELETE'
        });
        if (!response.ok) throw new Error('Failed to delete expense');
        this.success = true;
        this.expenseId = '';
      } catch (err) {
        this.error = err.message;
      }
    }
  }
};
</script>

<style scoped>
.delete-expense {
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
  background: #e74c3c;
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
}
button:hover {
  background: #c0392b;
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