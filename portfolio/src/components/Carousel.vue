<template>
    <div style="height: 640px; margin: auto;">
        <carousel :per-page="1" :loop="true" :autoplay="true">
            <template v-for="item in items">
                <slide :key="item.id" style="height: 100%;" v-scroll-to="item.scroll" to>
                    <div style="text-align: center;">
                        {{item.title}}
                    </div>
                    <hr style="margin: 8px auto 16px auto; width: 80%;">
                    <div style="text-align: center;">
                        <img :src="item.img" style="width: 70%; object-fit: cover; object-position: 0% 50%;"/>
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
                    img: require('@/assets/introduction.jpeg'),
                    scroll: '#introduction'
                },
                {
                    title: '略歴',
                    img: require('@/assets/biography.jpeg'),
                    scroll: '#biography'
                },
                {
                    title: '活動',
                    img: require('@/assets/activity.jpeg'),
                    scroll: '#activity'
                },
                {
                    title: '製作物',
                    img: require('@/assets/production.jpeg'),
                    scroll: '#production'
                },
            ]
        }
    },
}
</script>

<style>
    .VueCarousel{
        margin-top: 10%;
        height: 85%;
    }
    .VueCarousel-wrapper, .VueCarousel-inner, .VueCarousel-slide{
        height: 100% !important;
    }
    .VueCarousel-slide .slider-inner {
        height: 100%;
        color: #fff; 
        border: 2px solid #fff;
        font-size: 30px; 
        border-radius: 10px;
    }
    .VueCarousel-slide:hover{
        opacity: 0.5;
    }
</style>

