<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { reactive, ref } from 'vue';
import Alert from './UI/Alert.vue';
import axios from '@/services/axios';

const error = ref("")

const user = reactive({
    id: Date.now(),
    name: "",
    mail: "",
    phone: "",
    password: ""
})

const saveUserData = () => {
    if (Object.values(user).includes("")) {
        error.value = "Los campos no pueden ir vacíos"

        setTimeout(() => {
            error.value = ""
        }, 3000)
        return
    }
    axios.addUser(user)
        .then(({ data }) => console.log(data))
        .catch(err => console.log(err))
}

</script>

<template>
    <Alert v-if="error">{{ error }}</Alert>
    <form @submit.prevent="saveUserData" class="form-login">
        <legend class="title-login">Crea tu cuenta llenando el formulario</legend>

        <div class="input-flex">
            <div class="content-inputs">
                <label for="name">Nombre:</label>
                <input v-model="user.name" id="name" type="text" placeholder="Tu nombre">
            </div>

            <div class="content-inputs">
                <label for="email">Email:</label>
                <input v-model="user.mail" id="email" type="email" placeholder="Tu email">
            </div>
        </div>

        <div class="input-flex">
            <div class="content-inputs">
                <label for="phone">Celular:</label>
                <input v-model="user.phone" id="phone" type="number" placeholder="Tu celular">
            </div>

            <div class="content-inputs">
                <label for="password">Password:</label>
                <input v-model="user.password" id="password" type="password" placeholder="Tu password">
            </div>
        </div>

        <div class="content-inputs">
            <input type="submit" value="Crear cuenta">
        </div>

    </form>
</template>

<style scoped>
.login-content {
    margin-bottom: 3rem;
}

.title-login {
    font-size: 4rem;
    margin-bottom: 3rem
}

.content-inputs {
    margin-bottom: 1.6rem;
    width: 100%;
}

.input-flex {
    display: flex;
    align-items: center;
    gap: 20px;
}

.content-inputs label {
    display: block;
}

.content-inputs input {
    width: 100%;
    padding: 8px;
    border-radius: 8px;
    border: 0;
    background-color: transparent;
    border-bottom: 1px solid var(--light);
    outline: 0;
    color: var(--light);
}

.content-inputs input::placeholder {
    color: var(--light);
    font-size: 1.2rem;
}

.content-inputs input[type="submit"] {
    background-color: var(--light);
    color: var(--dark);
    font-weight: bold;
    cursor: pointer;
    transition: background-color;
    transition-duration: 1s;
}

.content-inputs input[type="submit"]:hover {
    background-color: var(--dark);
    color: var(--light);
}
</style>