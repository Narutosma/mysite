<template>
  <header class="header-container" :class="{'no-top': !isTop, 'top': $route.meta.isHome && isTop}">
    <nav class="header" @mouseenter="isTop = false" @mouseleave="leaveHandle">
      <RouterLink :to="{name: 'home'}" class="title">Pokemon Home</RouterLink>
    <ul class="nav">
      <li class="nav-item">
        <RouterLink :to="{name: 'home'}" href="#">
          <SymbolIcon href="home"/>
          <span>首页</span>
        </RouterLink>
      </li>
      <li class="nav-item">
        <a href="https://github.com/Linkegg" target="_blank">
          <SymbolIcon href="duck"/>
          <span>GitHub</span>
        </a>
      </li>
      <li class="nav-item category-item">
        <a href>
          <SymbolIcon href="wugui"/>
          <span>文章分类</span>
        </a>
        <ul class="category-list">
          <RouterLink v-for="cate in categoryList" :key="cate.id" tag="li" :to="{name: 'articleCategory', params: {id: cate.id}}">{{ cate.name }}</RouterLink>
        </ul>
      </li>
      <li class="nav-item">
        <RouterLink :to="{name: 'timeline'}" href="#">
          <SymbolIcon href="xiaohuolong"/>
          <span>时间线</span>
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink :to="{name: 'comment'}" href="#">
          <SymbolIcon href="cat" />
          <span>留言板</span>
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink :to="{name: 'effect'}" href="#">
          <SymbolIcon href="yibu"/>
          <span>项目&效果</span>
        </RouterLink>
      </li>
    </ul>
    <SearchBox />
    </nav>
    <div class="mask"></div>
    <!-- 页面游览的进度条 -->
    <div class="scroll-progress" :style="{width: `${barW}%`}"></div>
  </header>
</template>
<script>
import SearchBox from "./conponents/Search";
import SymbolIcon from "@/components/Symbol";
import { getCategory } from "@/api/category";
export default {
  props: {
    hidden: {
      type: Boolean,
      default: true
    }
  },
  components: {
    SearchBox,
    SymbolIcon
  },
  data() {
    return {
      // 滚动条是否在顶部
      isTop: true,
      top: 0,
      categoryList: []
    };
  },
  computed: {
    // 界面游览进度条
    barW(){
      const viewH = document.documentElement.clientHeight;
      const scrollH = document.documentElement.scrollHeight;
      return this.top / (scrollH - viewH) * 100;
    }
  },
  methods: {
    handleScroll() {
      // this.isTop = dom.scrollTop <= 0;
      // this.top = dom.scrollTop;
      // 滚动条到达0就隐藏nav
      this.isTop = window.scrollY <= 0;
      this.top = window.scrollY;
    },
    leaveHandle(){
        // 换种思路， 只有在0的时候鼠标移出才会隐藏
        this.isTop = this.top <= 0;
    }
  },
  async created() {
    // 获取到分类
    const res = await getCategory();
    this.categoryList = res;
  },
  mounted() {
    // 监听滚动条高度
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@transitionTime: 0.4s;
.header-container{
  height: 100%;
  position: relative;
}

.scroll-progress{
  height: 2px;
  background: @link;
  position: absolute;
  left: 0;
  top: 0;
  transition: 0.4s;
}

.header-container.no-top{
  .header{
    box-shadow: 0 1px 40px -8px rgb(0, 0, 0, 0.5);
  }
  .mask{
    background: rgba(255, 255, 255, 0.95);
  }
}

.header-container.top{
  .mask{
    background: rgba(255, 255, 255, 0);
  }

    .nav{
      opacity: 0;
      margin-left: 10px;
    }
}


.header{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: @headerHeight;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  z-index: 99;
  transition: @transitionTime;

  .title {
    font-size: 38px;
    flex: 0 0 250px;
    cursor: pointer;
    font-family: "P-Regular", sans-serif;
  }

  .nav {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex: 1;
    /*justify-content: flex-end;*/
    box-sizing: border-box;
    transition: @transitionTime;
    .nav-item {
      margin-right: 25px;
      // fonts-size: 16px;
      position: relative;
      .icon-container {
        margin-right: 5px;
      }
      &:hover{
        &::after{
          width: 100%;
        }
      }

      &::after{
        content: "";
        display: block;
        width: 0;
        height: 5px;
        background: @link;
        position: absolute;
        left: 0;
        bottom: -15px;
        transition: @transitionTime;
      }
    }
  }
}

.mask{
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  /*background: #fff;*/
}

.nav-item.category-item{
  &:hover .category-list{
      transform: scaleY(1);
  }
}

  .category-list{
    margin: 0;
    list-style: none;
    position: absolute;
    top: 32px;
    background: #fff;
    width: 88px;
    padding: 10px 15px;
    box-sizing: border-box;
    font-size: 14px;
    z-index: 99;
    line-height: 28px;
    border-radius: 3px;
    transition: all 0.5s;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    transform: scaleY(0);
    transform-origin: top;
    li{
      text-align: center;
      cursor: pointer;
      transition: all 0.4s;
      &:hover{
        background: rgba(0, 0, 0, 0.3);
        border-radius: 5px;
      }
    }
}
</style>