<template>
  <div id="app">
     <m-header></m-header>
     <tab></tab>
     <router-view></router-view>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
export default {
  name: 'music',
  components:{
    MHeader,
    Tab
  }
}
</script>

<style <style lang="stylus" scoped>
@import "~common/stylus/variable";
#app
  color $color-theme
  background-color $color-background
 
</style>

