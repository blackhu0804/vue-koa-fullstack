import Router from 'koa-router';
import axios from './utils/axios'
import Categroy from '../dbs/models/categroy'

let router = new Router({prefix: '/categroy'})

const sign = '59de9a0b26873a17b75fdabf60d999c2';

router.get('/crumbs',async (ctx)=>{

  // let result = await Categroy.findOne({city: ctx.query.city.replace('市', '') || '北京'})
  // if (result) {
  //   ctx.body = {
  //     areas: result.areas,
  //     types: result.types
  //   }
  // } else {
  //   ctx.body = {
  //     areas: [],
  //     types: []
  //   }
  // }

  let {status,data:{areas,types}} = await axios.get('http://cp-tools.cn/categroy/crumbs',{
    params:{
      city:ctx.query.city.replace('市','') || "北京",
      sign
    }
  })
  ctx.body={
    areas: status===200?areas:[],
    types: status===200?types:[]
  }
})


export default router;
