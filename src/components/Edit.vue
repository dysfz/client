<template>
  <div class="edit-expense">
    <h1>Edit Expense</h1>
    <form @submit.prevent="onSubmit">
      <div class="ui labeled input fluid">
        <div class="ui label"> Name</div>
        <input type="text" v-model="expense.name" required />
      </div>
      <br />
      <div class="ui labeled input fluid">
        <div class="ui label"> Description</div>
        <input type="text" v-model="expense.description" required />
      </div>
      <br />
      <div class="ui labeled input fluid">
        <div class="ui label"> Amount</div>
        <input type="number" v-model.number="expense.amount" min="0" step="0.01" required />
      </div>
      <br />
      <div class="ui labeled input fluid">
        <div class="ui label"> Category</div>
        <input type="text" v-model="expense.category" required />
      </div>
      <br />
      <div class="ui labeled input fluid">
        <div class="ui label"> Date</div>
        <input id="date" v-model="expense.date" type="date" required />
      </div>
      <br />
      <button class="ui primary button">Submit</button>
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
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getExpenseById, editExpense } from "../store/index.js";
import Swal from 'sweetalert2';

export default {
  name: "Edit",
  setup() {
    const expense = ref({});
    const route = useRoute();
    const router = useRouter();
    const success = ref(false);
    const error = ref('');

    onMounted(async () => {
      const result = await getExpenseById(route.params.id);
      if (result === null) {
        Swal.fire("Failed to load selected data.", 'This log might have been deleted.', 'error');
        expense.value = {};
        router.push('/expenses');
      } else {
        expense.value = result;
      }
    });

    const onSubmit = async () => {
      const result = await editExpense(route.params.id, expense.value);
      if (result === null) {
        Swal.fire("Failed to update selected log.", 'Try double-checking the values before submitting.', 'error');
        return;
      }
      await Swal.fire('Success!', 'Expense updated successfully!', 'success');
      router.push('/expenses');
    };

    return {
      expense,
      onSubmit,
      success,
      error
    };
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
  text-align: center;
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