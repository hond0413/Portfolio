<template>
    <div>
        <div class="top-page" style="height: 640px; margin-left: auto;">
            <div style="margin-left: 50%;">
                <div class="vertical" style="margin: auto;">
                    <div>
                        <ruby style="font-weight: bold; font-size: 48px; ruby-position: under;">
                            本田 大貴
                            <rt style="color: gray; font-weight: lighter;">Honda Daiki</rt>
                        </ruby>
                    </div>
                    <div>
                        <ruby style="ruby-position: under; font-size: 32px;" class="topic" v-scroll-to="'#introduction'" to>
                            自己紹介
                            <rt style="color: gray;">Introduction</rt>
                        </ruby>
                    </div>
                    <div>
                        <ruby style="ruby-position: under; font-size: 32px;" class="topic" v-scroll-to="'#biography'" to>
                            略歴
                            <rt style="color: gray;">Biography</rt>
                        </ruby>
                    </div>
                    <div>
                        <ruby style="ruby-position: under; font-size: 32px;" class="topic" v-scroll-to="'#activity'" to>
                            活動
                            <rt style="color: gray;">Activity</rt>
                        </ruby>
                    </div>
                    <div>
                        <ruby style="ruby-position: under; font-size: 32px;" class="topic" v-scroll-to="'#production'" to>
                            製作物
                            <rt style="color: gray;">Production</rt>
                        </ruby>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
}
</script>

<style scoped>
.top-page{
    width: 100%;
    background: url(../assets/topPage.jpeg) no-repeat 0px 100%;
    background-size: 45% auto;
}
.topic{
    color: black;
    margin-left: 12px;
    padding-top: 24px;
}
.topic:hover{
    opacity: 0.5;
}
</style>