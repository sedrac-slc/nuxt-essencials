export default defineNuxtRouteMiddleware((to, from) => {
    const parm = +to.params.id;
    if(isNaN(parm) || parm < 0) return navigateTo('/videos');
})