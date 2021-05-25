<template>
  <transition v-show="show">
    <div class="vertical kanji">
      <div>
        <p>本田 大貴</p>
        <p class="alpha">ほんだ だいき</p>
      </div>
    </div>
  </transition>
</template>

<script>

  export default {
    name: 'Home',
    data() {
      return {
        show: false
      }
    }
  }
</script>

<style scoped>
  .kanji{
    display: flex;
    margin-top: 20%;
    width: 100%;
    align-items: center;
    font-size: 48px;
  }
  .alpha{
    font-size: 24px;
  }
</style>
