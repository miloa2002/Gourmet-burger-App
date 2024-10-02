<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { reactive, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Alert from './UI/Alert.vue';
import axios from '@/services/axios';

const error = ref("")
const users = ref([])
const userData = ref({})

const router = useRouter()

const loggedUser = reactive({
    mail: "",
    password: ""
})

onMounted(() => {
    axios.getUsers()
        .then(({ data }) => users.value = data)
        .catch(error => console.log(error))
})

const loginUser = async () => {
    if (Object.values(loggedUser).includes("")) {
        error.value = "Los campos no pueden ir vacíos"

        setTimeout(() => {
            error.value = ""
        }, 3000)
        return
    }

    users.value.filter(user => {
        if (user.mail === loggedUser.mail && user.password === loggedUser.password) {
            userData.value = user
            router.push("/welcome")
            return user
        } else {
            error.value = "El usuario no existe"
        }
    })
}

</script>

<template>
    <Alert v-if="error">{{ error }}</Alert>
    <form @submit.prevent="loginUser" class="form-login">
        <div class="login-content">
            <legend class="title-login">Inicia sesión</legend>
            <p class="subtitle-login">Para crear un pedido debes iniciar sesión</p>
        </div>

        <div class="content-inputs">
            <label for="email">Email:</label>
            <input v-model="loggedUser.mail" id="email" type="email" placeholder="Tu email">
        </div>

        <div class="content-inputs">
            <label for="password">Password:</label>
            <input v-model="loggedUser.password" id="password" type="password" placeholder="Tu password">
        </div>

        <div class="content-inputs">
            <input type="submit" value="Iniciar sesión">
        </div>

    </form>
</template>

<style scoped>
.login-content {
    margin-bottom: 3rem;
}

.title-login {
    font-size: 4rem;
    margin-bottom: 1rem
}

.content-inputs {
    margin-bottom: 1.6rem;
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