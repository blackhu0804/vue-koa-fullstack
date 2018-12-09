<template>
  <el-container class="layout-default">
    <el-header>
      <my-header />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer>
      footer
    </el-footer>
  </el-container>
</template>

<script>
  import MyHeader from '../components/public/header/index.vue'
  export default {
    components: {
      MyHeader
    }
  }
</script>


<style lang="scss" scoped>
  @import '@/assets/css/public/layout.scss';  
</style>
