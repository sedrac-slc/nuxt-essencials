import type { Video } from "~/interface/video";

export const useFavourite = () => useState<Video[]>("favourite", () => [])