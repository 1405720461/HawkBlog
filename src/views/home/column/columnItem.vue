<template>
    <div class="blog-item">
        <h3>{{ props.title || 'C++' }} </h3>
        <p>{{ props.intro || '编程语言' }}</p>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    intro: {
        type: String,
        required: true,
    },
})
</script>
<style lang="scss" scoped>
.blog-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding-left: 20px;
    box-shadow: 0px 0px 2px gray;
}
</style>