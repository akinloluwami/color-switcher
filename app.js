const body = document.querySelector("body");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");


btn1.addEventListener('click', function(){
    btn1.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    text1.classList.add('visible');
    text2.classList.remove('visible');
    text3.classList.remove('visible');
})

btn2.addEventListener('click', function(){
    body.classList.add('darkorange');
    body.classList.remove('crimson', 'deepskyblue');
    btn2.classList.add('active');
    btn1.classList.remove('active');
    btn3.classList.remove('active');
    text2.classList.add('visible');
    text1.classList.remove('visible');
    text3.classList.remove('visible');

})
btn3.addEventListener('click', function(){
    body.classList.add('deepskyblue');
    body.classList.remove('crimson', 'darkorange');
    btn3.classList.add('active');
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    text3.classList.add('visible');
    text1.classList.remove('visible');
    text2.classList.remove('visible');
})