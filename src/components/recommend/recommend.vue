<template>
  <div class="recommend">
    <scroll class="recommend-content" ref="scroll" :data="discLists">
      <div>
        <div class="slide-wrap" v-if="recommends.length">
          <slider>
            <div v-for="item in recommends">
              <a :href="item.linkUrl">
                <img class="needsclick" @load="loadImg":src="item.picUrl" alt="">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="item in discLists" class="item">
              <div class="icon">
                <img width="60" height="60" v-lazy="item.imgurl">
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      <div class="loading-container" v-show="!discLists.length">
        <loading></loading>
      </div>
    </scroll>
  </div>
</template>
<script>
  import {getRecommend, getDiscList} from "api/recommend";
  import {ERR_OK} from "../../api/config";
  import Slider from 'base/slider/slider';
  import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'


  export default {
    data() {
      return {
        recommends: [],
        discLists: [],
      }
    },
    created() {
      this._getRecomend();
      this._getLists();
      setTimeout(()=>{
      },2000)
    },
    methods: {
      _getRecomend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider;
          }
        })
      },
      _getLists() {
        getDiscList().then((res) => {
          if (res.code == ERR_OK) {
            this.discLists = res.data.list;
          }
        })
      },
      loadImg() {
        if (this.isLoadImg) {
          this.$refs.scroll.refresh();
          this.isLoadImg = true;
        }
      }
    },
    components: {
      Slider,
      Scroll,
      Loading
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex 0 0 60px
            width 60px
            padding-right 20px
          .text
            flex 1
            display flex
            flex-direction column
            line-height 20px
            text-overflow ellipsis
            overflow hidden
            font-size $font-size-medium
            .name
              margin-bottom 10px
              color $color-text
            .desc
              color $color-text-d
      .loading-container
        position absolute
        width 100%
        top 50%
        transform translateY(-50%)


</style>
