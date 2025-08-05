<template>
  <div class="add-expense">
    <h1>Add New Expense</h1>
    <form @submit.prevent="onSubmit">
      <div class="ui labeled input fluid">
        <div class="ui label"> Category</div>
        <input type="text" v-model="expense.category" required />
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
        <div class="ui label"> Date</div>
        <input id="date" v-model="expense.date" type="date" required />
      </div>
      <br />
      <button type="submit">Add Expense</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { addNewExpense } from "../store/index.js";
import Swal from 'sweetalert2';

export default {
  name: "Add",
  setup() {
    const expense = ref({
      category: '',
      description: '',
      amount: null,
      date: ''
    });
    const router = useRouter();

    const onSubmit = async () => {
      await addNewExpense(expense.value);
      Swal.fire('Success!', 'Expense added successfully!', 'success').then(() => {
        router.push('/expenses');
      });
    };

    return {
      expense,
      onSubmit
    };
  }
};
</script>

<style scoped>
.add-expense {
  max-width: 400px;
  margin: 40px auto;
  padding: 32px 24px;
  background: #393e46;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  color: #eeeeee;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.ui labeled input fluid {
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
  background: #222831;
  color: #eeeeee;
}
button {
  background: #42b983;
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  width: 100%;
}
button:hover {
  background: #36a372;
}
</style>