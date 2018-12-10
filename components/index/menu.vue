<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseLeave">
      <dt>全部分类</dt>
      <dd v-for="(item, index) in menu" 
        :key="index"
        @mouseenter="enter">
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail" v-if="kind"
      @mouseenter="enterDetail"
      @mouseleave="leaveDetail">
      <template v-for="(item, index) in curdetail.child">
        <h4 :key="index">{{item.title}}</h4>
        <span v-for="v in item.child" :key="v">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: '',
      menu: [{
        type: 'food',
        name: '美食',
        child: [{
          title: '美食',
          child: ['代金券','甜点','饮品','火锅','自助餐']
        }]
      },{
        type: 'takeout',
        name: '外卖',
        child: [{
          title: '外卖',
          child: ['美团外卖']
        }]
      },{
        type: 'hotel',
        name: '酒店',
        child: [{
          title: '酒店星级',
          child: ['经济型','豪华型','舒适型','高档四星']
        }]
      }]
    }
  },
  computed: {
    curdetail: function() {
      return this.menu.filter( (item) => item.type === this.kind)[0]
    }
  },
  methods: {
    mouseLeave() {
      this.timer = setTimeout( () => {
        this.kind = ''
      }, 150)
    },
    enter(e) {
      this.kind = e.target.querySelector('i').className 
    },
    enterDetail() {
      clearTimeout(this.timer)
    },
    leaveDetail() {
      this.kind = ''
    }
  }
}
</script>

<style>
</style>