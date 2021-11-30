/*
 * @Author: chengxinyu
 * @Date: 2021-11-29 22:23:25
 * @LastEditors: chengxinyu
 * @LastEditTime: 2021-11-29 22:27:50
 */
//add an event listener to the div with a class of one
//use the event object to log to console the innerText value when the div is clicked
// one should be logged to the console

var one =document.querySelector('.one')
one.onclick=function(){
    console.log(one.innerHTML);
}