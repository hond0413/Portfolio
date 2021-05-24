<template>
    <div class="production">
        <div style="text-align: center; margin-top: 16px;">
            製作物
        </div>
        <hr style="margin: 8px auto 16px auto; width: 80%;">
        <v-row>
            <v-col v-for="(item, i) in items" :key="i" cols="12" sm="6" md="6" lg="4">
                <v-card outlined max-width="100%" class="d-flex flex-column">
                    <v-img :src="item.img" style="max-height:100%" height="100%"/>
                    <v-card-title class="justify-center" v-text="item.title"/>
                    <v-card-text height="100%" v-html="item.text"/>
                    <v-spacer />
                     <v-card-actions class="mb-7">
                        <a :href="item.link" target="_blank" style="text-decoration: none">
                            <v-btn text
                            color="primary" class="mb-5" :style="'font-size:1.0rem'">
                            <span>{{ item.description }}</span>
                            </v-btn>
                        </a>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    title: 'Infodemic',
                    text: 'Infodemic改善のためのapp',
                    img: '../assets/summer.jpeg',
                    link: 'https://infodemicappv3.web.app/',
                    description: 'appへ'
                },
                {
                    title: 'TodoList',
                    text: 'Vueを用いたTodoList',
                    img: '../assets/summer.jpeg',
                    link: 'https://todolistvue-e7d95.web.app/',
                    description: 'appへ'
                }
            ]
        }
    }
}
</script>

<style scoped>
    .production{
        height: 640px; 
        width: 100%; 
        margin: auto;
    }
</style>