<template>
    <h1>{{ $t('welcome') }}</h1>
    <div>Vídeos</div>
    <NuxtLink to="/videos/favourite" class="mb-40">Favoritos</NuxtLink>
    <div class="grid grid-cols-2 justify-center m-auto mt-3 align-center">
        <div v-for="video in videos" ::key="video.id">
            <h2>{{ video.description }}</h2>
            <p v-data-horario>{{ video.created  }}</p>
            <iframe width="500" height="400" :src="video.url" title="Video Youtube" frameborder="0" />
            <div>
                <button @click="addFavourite(video)">Favoritos</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { Video } from '~/interface/video';

    const {addFavourite} = useVideoStore()

    const videos: Video[] = [
        { id: 1, description: "1 - Introdução e instalação", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", created: "2024-06-20"},
        { id: 2, description: "2 - Páginas e rotas 1", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4", created: "2024-06-20"},
        { id: 3, description: "3 - Páginas e rotas 2", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", created: "2024-06-20"},
        { id: 4, description: "4 - Páginas e rotas 3", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", created: "2024-06-20"},
    ];

    //const aadFovourite = (video: Video) => {//  favourites.value.push(video)}

</script>