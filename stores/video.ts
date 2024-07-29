import type { Video } from "~/interface/video"

export const useVideoStore = defineStore("videos", () =>{
    const favourites = ref<Video[]>([]);

    const addFavourite = (video: Video) => {
        const favouritesFilter = favourites.value.some((v)=> v.id == video.id);
        if(!favouritesFilter){
            favourites.value.push(video);
        }
    }

    const removeFavourite = (video: Video) => {
        const favouritesFilter = favourites.value.filter((v)=> v.id != video.id);
        favourites.value = favouritesFilter;
    }    

    return {addFavourite, removeFavourite, favourites}
})