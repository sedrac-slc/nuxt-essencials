<template>
    <div>
        <NuxtLink to="/videos">videos</NuxtLink>
        <h1>Favourito</h1>
        <div class="videos">
        <div v-for="video in favourites" :key="video.id">
            <h2>{{ video.description }}</h2>
            <p v-data-horario>{{ video.created  }}</p>
            <iframe width="500" height="400" :src="video.url" title="Video Youtube" frameborder="0" />
            <div>
                <button @click="remove(video)">Remover</button>
            </div>
        </div>
    </div>
    </div>
</template>

<script setup>
    
    const videoStore = useVideoStore()
    const { favourites } = storeToRefs(videoStore)

    const remove = (v) => {
        videoStore.removeFavourite(v);
        $toast.success("Removido com successo")
    }

</script>

<style lang="scss" scoped>

</style>