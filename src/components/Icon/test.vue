<template>
  <div class="test-container">
      <div class="icon" v-for="icon in map" :key="icon" >
          <Icon :type="icon"/>
          <span>{{ icon }}</span>
      </div>
  </div>
</template>

<script>
import Icon, { map } from './index';
export default {
    components: {
        Icon
    },
    data(){
        return{ 
            map
        }
    }
}
</script>

<style lang='less' scoped>

.test-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .icon{
        display: flex;
        flex-direction: column;
        margin: 10px;
        text-align: center;
    }
}

</style>