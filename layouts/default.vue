<template>


    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                <select v-model="locale">
                    <option value="en">en</option>
                    <option value="fr">fr</option>
                </select>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
                <ul
                    class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                    <NuxtLink to="/">Página inicial</NuxtLink>

                    <NuxtLink to="/videos">Videos</NuxtLink>

                    <NuxtLink to="/videos/favourite">Favoritos</NuxtLink>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container justify-center">
        <slot></slot>
    </div>
    Rodapé padrão
</template>
<script lang="ts" setup>
const { locale } = useI18n()
</script>