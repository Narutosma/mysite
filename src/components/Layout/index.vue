<!-- 布局 -->
<template>
  <div class="layout-container">
      <nav class="nav-content">
          <slot name="nav"></slot>
      </nav>
      <div class="main-content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.layout-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .nav-content{
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999;
    }
}

</style>