<template>
    <div>Autor: Sedrac Calupeteca</div>
    <p>{{ diffDays }} dias atrás</p>
</template>

<script setup>
    const {pastDays, diffDays} = useFormation();
    const days = pastDays(new Date(2024,6,18))
</script>

<style lang="scss" scoped>

</style>