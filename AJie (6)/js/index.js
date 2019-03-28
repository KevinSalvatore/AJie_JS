var name="Kevin";
var dl="null"
function dlname(){
    //函数局部作用域
    //函数运行时诞生
    var dl = "Jack";
    //函数运行结束后回收
}
//块级作用域
{
    cosnt temp = "Amy";
}
console.log(temp);