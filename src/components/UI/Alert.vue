<!-- eslint-disable vue/multi-word-component-names -->
<script setup>

</script>

<template>
    <div class="alert">
        <slot></slot>
    </div>
</template>

<style scoped>
.alert {
    background-color: rgb(192, 2, 2);
    color: white;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 20px;
}
</style>