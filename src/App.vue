<template>
  <div class="app-bg">
    <!-- Top bar -->
    <div class="top-bar">
      Expense Tracker
    </div>

    <div class="main-screen">
      <p>Choose an action below:</p>
      <ul class="main-menu">
        <li>
          <router-link to="/expenses" class="main-btn">View All Expenses</router-link>
        </li>
        <li>
          <router-link to="/expenses/add" class="main-btn">Add New Expense</router-link>
        </li>
      </ul>
    </div>

    <div class="ui container">
      <div class="ui grid">
        <div class="row">
          <div class="twelve wide column">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.app-bg {
  min-height: 100vh;
  background: #222831;
}
.top-bar {
  width: 100%;
  background: #424242;
  color: #fff;
  font-size: 1.5em;
  font-weight: bold;
  padding: 18px 0;
  text-align: center;
  letter-spacing: 2px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  margin-bottom: 32px;
}
.main-screen {
  max-width: 400px;
  margin: 40px auto;
  padding: 32px 24px;
  background: #393e46;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  text-align: center;
  color: #eeeeee;
}
.main-menu {
  list-style: none;
  padding: 0;
  margin-top: 24px;
}
.main-menu li {
  margin: 18px 0;
}
.main-btn {
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
.main-btn:hover {
  background: #36a372;
}
</style>