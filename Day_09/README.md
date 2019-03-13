# DOM event()

- DOM
  onclick 事件注册只有一个 DOM-0
  addEventListener() 不限 DOM-2
- [DOM 事件流](https://blog.csdn.net/kongjiea/article/details/30234095)
  - 捕获(capture)
    window -> document(documentElement) -> body -> Parent -> Child -> target
  - 冒泡(bubble)
    与捕获顺序相反，IE
  - 当第三个参数
    设置为 true 就在捕获过程中执行，反之就在冒泡过程中执行处理函数
  - 事件按照DOM流的顺序执行事件回调
    处于目标阶段的时候，时间调用顺序取决于事件注册顺序。
  - event
    event.stopProgration()阻止事件冒泡
    event.stopImmediatePropagation();阻止后面注册的事件。
    event.target是点击对象
    event.currentTarget是响应回调函数所在的对象
  - 事件代理（事件委托）
    由父元素代理子元素的事件。
    原理：事件冒泡