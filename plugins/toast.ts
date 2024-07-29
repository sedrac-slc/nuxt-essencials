import Vue3Toasity, { type ToastContainerOptions, toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default defineNuxtPlugin(({vueApp}) => {
    vueApp.use(Vue3Toasity,{
        autoClose: 2000
    } as ToastContainerOptions);
     
    return {
        provide: {
            toast,
        }
    }
});