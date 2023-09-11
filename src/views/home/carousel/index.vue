<template>
    <el-carousel class="carousel" indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
            <img src="../../../../public/img/320.png" alt="" style="width: 100%; height: 100%;">
        </el-carousel-item>
    </el-carousel>
</template>
<script></script>
<style lang="scss" scoped>
.carousel {
    width: 60%;
    height: 45vh;
    margin: 10px;
}
</style>