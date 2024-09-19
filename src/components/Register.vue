<!-- eslint-disable vue/multi-word-component-names -->
<script setup>

</script>

<template>
    <form>
        <legend>Crea tu cuenta</legend>
        <p>Crea tu cuenta llenando el formulario</p>

        <div>
            <label for="name">Nombre:</label>
            <input id="name" type="text" placeholder="Tu nombre">
        </div>

        <div>
            <label for="email">Email:</label>
            <input id="email" type="email" placeholder="Tu email">
        </div>

        <div>
            <label for="phone">Celular:</label>
            <input id="phone" type="number" placeholder="Tu celular">
        </div>

        <div>
            <label for="password">Password:</label>
            <input id="password" type="password" placeholder="Tu password">
        </div>

        <div>
            <label for="password-2">Repetir password:</label>
            <input id="password-2" type="password" placeholder="Repetir password">
        </div>

        <div>
            <input type="submit" value="Crear cuenta">
        </div>

    </form>
</template>

<style lang="scss" scoped></style>