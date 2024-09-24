<script setup>
import { ref } from "vue";
import Login from "../components/Login.vue"
import Register from "@/components/Register.vue";
import { addUser } from "@/services/axios";

const registerView = ref(false)

const showRegister = () => {
  registerView.value = true;
}

const showLogin = () => {
  registerView.value = false;
}

const saveUser = (user) => {
  addUser(user)
}

</script>

<template>
  <main class="bg-home">
    <div class="container">

      <div class="card">
        <Register @save-user="saveUser" v-if="registerView" />
        <Login v-else />

        <button v-if="!registerView" @click="showRegister" class="acount">¿No tienes una cuenta? Crea una</button>

        <button v-if="registerView" @click="showLogin" class="acount">¿Ya tienes una cuenta? Inicia sesión</button>

      </div>
    </div>
  </main>
</template>

<style scoped>
.bg-home {
  background-image: url(../assets/images/burger.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
}

.container {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  height: 100vh;
}

.card {
  width: auto;
  height: auto;
  padding: 2rem;
  border-radius: 1rem;
  color: white;
  background: rgba(255, 255, 255, .25);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  border: 1.5px solid rgba(209, 213, 219, 0.3);
  grid-column: 2 / 5;
  grid-row: 3 / 7;
}

.acount {
  background-color: transparent;
  border: 0;
  color: var(--light);
  font-size: 1.5rem;
  cursor: pointer
}
</style>