<template>
    <div class="special-column">
        <img :src="props.src" alt="" class="blog-img">
        <div class="title">{{ columnData.title }}</div>
    </div>
</template>
<script lang="ts" setup>
import { reactive, onMounted } from 'vue';
const props = defineProps({
    title: {
        type: String,
        required: true,
        // default: "woshi"
    },
    src: {
        type: String,
        required: true,
        // default: "woshi"
    },

});
const columnData = reactive({
    title: '',
    src: ''
});
const getData = () => {
    columnData.title = props.title
    columnData.src = props.src
}
onMounted(() => {
    getData()
})
</script>
<style lang="scss" scoped>
.special-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .blog-img {
        width: 100%;
        height: 90%;
    }
}
</style>