<template>
    <div style="height: 640px; margin: auto;">
        <carousel :per-page="1" :loop="true" :autoplay="true">
            <template v-for="item in items">
                <slide :key="item.id" style="height: 100%;">
                    <div style="text-align: center;">
                        {{item.title}}
                    </div>
                    <hr style="margin: 8px auto 16px auto; width: 80%;">
                    <div style="text-align: center;">
                        <img :src="item.img" style="width: 80%;"/>
                    </div>
                </slide>
            </template>
        </carousel>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    title: '自己紹介',
                    img: require('@/assets/introduction.jpeg')
                },
                {
                    title: '略歴',
                    img: require('@/assets/biography.jpeg')
                },
                {
                    title: '活動',
                    img: require('@/assets/activity.jpeg')
                },
                {
                    title: '製作物',
                    img: require('@/assets/production.jpeg')
                },
            ]
        }
    },
}
</script>

<style>
    .VueCarousel{
        margin-top: 10%;
        height: 80%;
    }
    .VueCarousel-wrapper, .VueCarousel-inner, .VueCarousel-slide{
        height: 100% !important;
    }
    .VueCarousel-slide .slider-inner {
        height: 100%;
        display: flex; 
        justify-content: center; 
        align-items: center; 
        color: #fff; 
        border: 2px solid #fff;
        font-size: 30px; 
        border-radius: 10px;
    }
</style>

