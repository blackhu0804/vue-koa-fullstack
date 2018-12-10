<template>
  <el-row class="m-header">
    <el-col :span="5">
      <geo />
    </el-col>
    <el-col :span="5 ">
      <user />
    </el-col>
    <el-col :span="14">
      <navbar />
    </el-col>
  </el-row>
</template>

<script>
  import geo from './geo.vue'
  import user from './user.vue'
  import navbar from './nav.vue'
  export default {
    components: {
      geo,
      user,
      navbar
    }
  }
</script>

<style lang="scss">
  // @import "@/assets/css/public/layout.scss";
  // @import "@/assets/css/public/header/index.scss";
</style>
