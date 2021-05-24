<template>
  <div>
    <top-page style="width: 90%; margin: auto;"></top-page>
    <Carouselcomp style="width: 90%; margin: auto;"></Carouselcomp>
    <introduction style="width: 90%; margin: auto;"></introduction>
    <biography style="width: 90%; margin: auto;"></biography>
    <activity style="width: 90%; margin: auto;"></activity>
    <production style="width: 90%; margin: auto;"></production>
  </div>
</template>

<script>
import TopPage from '../components/TopPage'
import Introduction from '../components/Introduction'
import Carouselcomp from '../components/Carousel'
import Biography from '../components/Biography'
import Activity from '../components/Activity'
import Production from '../components/Production'

export default {
  components: {
    TopPage,
    Introduction,
    Carouselcomp,
    Biography,
    Activity,
    Production
  },
  data() {
    return {

    }
  },
  methods: {
    toScroll(val) {
      const element = document.getElementById(val)
      const topPosition = element.getBoundingClientRect().top
      window.scrollTo(0, topPosition)
    }
  }
}
</script>

<style scoped>
</style>
