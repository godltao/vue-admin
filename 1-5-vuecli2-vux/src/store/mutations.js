import * as Type from "./store-types";

export default {
  //默认就会有一个state参数 ,如果多个参数,那么把第二个参数变成对象放在一起传就行了
  //这种方式也可以定义方法, 也保证了方法名统一,建议这样做
  [Type.INCREMENT](state, payload) {
    return state.counter += payload;
  },
  decrement(state) {
    state.counter--;
  },
  [Type.UPDATEINFO](state) {
    //如果做异步操作,那么devtools不会更新,但是界面会更新
    //错误示范
    // setTimeout(() => {
    //   state.info.name = 'james'
    // }, 1000)
    //已经在state中初始化完成了的属性,可以做到响应式
    state.info.name = 'james'
    //新增属性,通过直接在对象上添加属性,不能做到响应式
    // state.info['address'] = '洛杉矶'
    //通过Vue的方法添加 Vue.set,     可以做到响应式
    // Vue.set(state.info, 'address', '洛杉矶')
    //通过直接删除对象的属性,         不能做到响应式
    // delete state.info.id
    //通过Vue的方法,                 可以做到响应式
    // Vue.delete(state.info, 'id')
  }
}
