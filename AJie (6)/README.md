# 作用域 Scope
document DOM
    getElementsByTagName
    getElementsByClassName
    querySelector
    querySelectorAll
window BOM
    全局定义的var变量
    全局变量 前端 js由window管理
    局部变量 function(){}
    window js 内嵌在浏览器中的脚本语言，它与其它语言不一样的地方在于它有一个window
    全局变量挂载在window上
    console.log(name); console.log(window.name);
    window 类型 typeof object
    数值 字符串 布尔值 null undifined Symbol object
    cosnt let 比var 优秀的地方，遵守块级作用域
    全局 -> 函数局部 -> 块级作用域
    scope 范围

    setTimeout 异步的内置函数
    for 循环 立即执行
    1000 之后i var 变成了10
    let 立马创建了块级作用域 for{ 块级作用域 let} 1000后