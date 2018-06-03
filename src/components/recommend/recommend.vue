<template>
  <div class="recommend">
    <div class="recommend-content">
      <div class="slide-wrap"></div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul></ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {getRecommend} from "api/recommend";
  import {ERR_OK} from "../../api/config";

  export default {
    created() {
      this._getRecomend();
    },
    methods: {
      _getRecomend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            console.log(res);
          }
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  import "~common/stylus/variable"
  .recommend
    position fixed
    width 100%
    top: 88px
    bottom 0
    .recommend-content
      height 100%
      overflow hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden

</style>
