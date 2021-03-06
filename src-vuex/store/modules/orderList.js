import Vue from 'vue'
const state={
   orderList:[],
   params:{},
}
const getters={
    // orderList(state){
    //     return state.orderList
    // }
    getOrderList:state=> state.orderList
}
const actions={
   fetchOrderList({commit,state}){
       Vue.http.post('/api/getOrderList',state.params).then((res)=>{
        commit('updateOrderList',res.data.list)
        //    state.orderList=res.data.list
        //    state.total=res.data.total
       },(err)=>{

    })
       

   }
}
const mutations={
updateOrderList(state,payload){
    state.orderList=payload
},
updateParams(state,{key,val}){
    state.params[key]=val
}
}


export default{
    state,
    getters,
    actions,
    mutations,

}