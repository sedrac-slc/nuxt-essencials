<template>
    <div>
        Video show {{ $route.params.id }}
    </div>
    <VideoDetail/>
    <VideoPlay/>
</template>

<script setup>
    definePageMeta({
        layout: "exibition",
        middleware: "video"
    })
</script>

<style lang="scss" scoped>

</style>