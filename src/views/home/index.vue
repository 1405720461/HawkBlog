<script lang="ts" setup>
import { ref, onMounted } from "vue";
import specialColumn from "@/views/home/hotBlog/index.vue";
import carousel from "@/views/home/carousel/index.vue";
import column from "@/views/home/column/index.vue";
import { getHotList } from "../../utils/getHotList";

// interface State {
//     // 热门数据
//     hotData: Array<any>,
//     // 列表数据
//     listData: Array<any>,
// }

// const state: State = reactive({
//     hotData: [], // 导航数据
//     listData: [],// 列表数据
// })

// const getHot = async () => {
//     let hotList = await getHotList('/article/examineArticles')
//     state.hotData = hotList.data
// }
// onMounted(() => {
//     getHot()
// })

const hotList = ref([{ id: 1, title: 'hah', src: '../../../public/img/320.png' },
{ id: 2, title: 'hah', src: '../../../public/img/320.png' },
{ id: 3, title: 'hah', src: '../../../public/img/320.png' },
{ id: 4, title: 'hah', src: '../../../public/img/320.png' },
{ id: 1, title: 'hah', src: '../../../public/img/320.png' },
{ id: 1, title: 'hah', src: '../../../public/img/320.png' }]);
</script>
<template>
    <section class="main-container">
        <carousel></carousel>

        <aside class="aside-info">
            <specialColumn v-for="hotItem in hotList" :key="hotItem.id" :title="hotItem.title" :src="hotItem.src">
            </specialColumn>
        </aside>

    </section>
    <section>
        <column></column>
    </section>
</template>
<style lang="scss" scoped>
.main-container {
    width: 90%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.aside-info {
    height: 50vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
}

.aside-info div {
    width: calc(40%)/3;
    flex: 0 0 25%;
    height: 140px;
    margin: 0 10px;
    box-shadow: 0px 0px 2px gray;
    border-radius: 5px;
}
</style>