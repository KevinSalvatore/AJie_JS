# 相对单位，为了自适应
    不同的移动设备
    750px
    iPhone XR 小手机
    小米，华为
    iPhone 打手机 Max
    小米，华为
    vw, vh 按比例分配宽/高 20% 20vh 100vh主容器

    em, rem 适合细致的每个盒子和盒模型大小等比例定义，在移动端少用px
    em 是相对于自身的字体大小来比例的
    rem 相对于html的根元素的font-size来比例的

    ::before, ::after 伪元素
    没有标签，但却可以像真正的元素一样在页面上占位置。
    dom 文档流中不需要写这个元素，副作用，不会影响到内容的显示。
    使用CSS 来声明，content 属性是必须的，

    html 默认的字体大小为16px
    如果没有设置，会使用父级，或者body 的font-size

    