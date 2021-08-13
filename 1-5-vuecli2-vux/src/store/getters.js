export default {
  powerCounter(state) {
    return state.counter * state.counter
  },
  filterByAge(state, getter) {
    //因为没有地方传参数,所以直接返回一个函数,让使用的地方调用这个带参数的函数就行了
    return age => state.students.filter(s => s.age > age);
  }
}
