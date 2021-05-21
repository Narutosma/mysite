<template>
  <div class="test">
      <Layout>
        <template #nav>
            <div class="nav">
                nav
            </div>
        </template>
          <div class="main">
              zhuti
          </div>
        <template #bottom>
            <div class="bottom">
                bottom
            </div>
        </template>
      </Layout>
  </div>
</template>

<script>
import Layout from './index';
export default {
    components: {
        Layout
    }
}
</script>

<style scoped lang="less">
    .nav{
        height: 280px;
        background: gold;
        opacity: 0.4;
    }
    .main{
        background: coral;
    }
    .bottom{
        background: cornflowerblue;
    }
</style>