export default function(){
    const diffDays = ref(0)

    const pastDays = (d: Date) => {
        const dayNow = new Date().getTime();
        const diffMs = dayNow - d.getTime();
        diffDays.value = Math.floor( diffMs / (1000 * 60 * 60 *24) )
    }

    return {pastDays, diffDays}
}