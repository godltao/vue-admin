import * as Type from "./store-types";

export default {
  //context ,上下文
  [Type.AUPDATEINFO](context, payload) {
    console.log(payload.payload);
    return new Promise(resolve => {
      setTimeout(() => {
        context.commit(Type.UPDATEINFO)
        resolve("我执行完毕了")
      }, 1000)
    })
  }
}
