<template>
  <div class="menu">
    <h1>Expense Tracker</h1>
    <ul class="menu-list">
      <li>
        <router-link to="/logs" class="menu-btn">View All Expenses</router-link>
      </li>
      <li>
        <router-link to="/add" class="menu-btn">Add New Expense</router-link>
      </li>
      <li>
        <router-link to="/edit" class="menu-btn">Edit Expense</router-link>
      </li>
      <li>
        <router-link to="/delete" class="menu-btn">Delete Expense</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuScreen'
}
</script>

<style scoped>
.menu {
  max-width: 400px;
  margin: 40px auto;
  padding: 32px 24px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
}
.menu-list {
  list-style: none;
  padding: 0;
}
.menu-list li {
  margin: 20px 0;
}
.menu-btn {
  display: block;
  width: 100%;
  padding: 12px 0;
  font-size: 1.1em;
  color: #fff;
  background: #42b983;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: background 0.2s;
}
.menu-btn:hover {
  background: #2c3e50;
}
</style>