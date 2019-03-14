# Class 类

ES5 没有 class 关键字，怎么做面向对象？

JS 是面向对象的，function 是一等对象

普通函数 Player()

new Player(): 作为类的构造函数被运行。function Player(){ this }中 this 一直都在，是函数里的一个常在。指针 this 指向一个 Object{} this.name = name;

**函数运行方式的不同，里面 this 指向不同**

- 普通函数被运行的时候，this 指针没有使命，全局，前端-window, node-global, undefined
- 函数作为构造函数被运行时：new Player(); this 指向实例化的对象。
