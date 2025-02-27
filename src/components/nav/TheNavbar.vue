<template>
  <nav>
    <div class="logo">
      <h1>Quick<b>Draw</b></h1>
    </div>
    <div class="rightside">
      <select @change="changeLanguage($event.target.value)" id="language-select" :value="locale">
        <option value="en">EN</option>
        <option value="pt">PT</option>
      </select>
      <RouterLink to="/login">
        <button class="login">Login</button>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

function changeLanguage(lang) {
  locale.value = lang
  localStorage.setItem('user-lang', lang)
}

if (localStorage.getItem('user-lang')) {
  locale.value = localStorage.getItem('user-lang')
}
</script>

<style scoped>
nav {
  width: 100%;
  height: 60px;
  background-color: var(--navbar-color);
  padding: 0 4%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo h1 {
  color: var(--main-color);
  font-weight: bold;
}

.logo h1 b {
  color: var(--gray-color);
}

.rightside {
  display: flex;
  align-items: center;
}

.dropdown {
  display: flex;
  align-items: center;
  color: var(--gray-color);
  margin-right: 32px;
  cursor: pointer;
}

.dropdown i {
  margin: 0 4px;
  font-size: 12px;
}

.login {
  border: 1px solid var(--main-color);
  color: var(--main-color);
  background-color: transparent;
  border-radius: 10px;
  font-weight: bold;
  font-size: 20px;
  height: 42px;
  padding: 5px 30px;
  cursor: pointer;
  transition: all ease 0.5s;
}

.login:hover {
  color: var(--background-color);
  background-color: var(--main-color);
}
</style>
