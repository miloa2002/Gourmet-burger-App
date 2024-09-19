<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <form class="form-login">
        <div class="login-content">
            <legend class="title-login">Inicia sesión</legend>
            <p class="subtitle-login">Para crear un pedido debes iniciar sesión</p>
        </div>

        <div class="content-inputs">
            <label for="email">Email:</label>
            <input id="email" type="email" placeholder="Tu email">
        </div>

        <div class="content-inputs">
            <label for="password">Password:</label>
            <input id="password" type="password" placeholder="Tu password">
        </div>

        <div class="content-inputs">
            <input type="submit" value="Iniciar sesión">
        </div>

    </form>
</template>

<script setup>

</script>

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