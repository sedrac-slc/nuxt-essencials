export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.directive('data-horario', {
        mounted(el, binding){
            const dataFormat = new Date(el.innerText);
            el.innerHTML = formatData(dataFormat, binding.value); 
        }
    })
});

const formatData = (data: Date, tipo: string = "") => {
    switch (tipo) {
        case "dd/mm/yyyy":
            return data.toLocaleDateString("pt-AO");
        case "hh:mm":
            return data.toLocaleTimeString("pt-AO");
        default:
            return data.toLocaleString("pt-AO");
    }
}