<script lang="ts" setup>
// import { ref, onMounted } from 'vue'
import columnItem from '@/views/home/column/columnItem.vue';
// interface getColumnDetails {
//     title?: string,
//     columnDetails?: object;
// }
// const props = defineProps<getColumnDetails>();
const blogs = reactive([
    { id: 1, title: 'Blog 1', intro: 'Introduction to Blog 1' },
    { id: 2, title: 'Blog 2', intro: 'Introduction to Blog 2' },
    { id: 3, title: 'Blog 3', intro: 'Introduction to Blog 3' },
]);
const blogcolumn = ref('编程语言')

</script>
<template>
    <div class="blog-column">
        <h2>{{ blogcolumn }}</h2>
        <columnItem class="blog" v-for="blog in blogs" :key="blog.id" :title="blog.title" :intro="blog.intro"></columnItem>
    </div>
</template>
<style lang="scss" scoped>
.blog-column {
    margin-bottom: 20px;

    h2 {
        width: 90%;
        margin: 0 auto;
        text-align: left;
    }

    .blog {
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
}
</style>