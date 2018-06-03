<template>
    <div class="m-header">
        <div class="icon"></div>
        <h1 class="text">Hello Music</h1>
    </div>
</template>

<script>
    export default {};
</script>

<style lang="stylus" scoped>
    @import '~common/stylus/variable';
    @import '~common/stylus/mixin';
    .m-header
        position relative
        height 44px;
        text-align center
        color $color-theme 
        font-size 0px
        .icon
            display inline-block
            vertical-align middle
            margin-top 14px
            width: 30px
            height: 32px
            margin-right: 9px
            bg-image('logo')
            background-size: 30px 32px
        .text
            display: inline-block
            vertical-align: top
            line-height: 44px
            font-size: $font-size-large        
</style>


