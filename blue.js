
var p = prompt('\n　　　　　　　　　　　문자서비스입니다\n　　　　　　　　　상대방 이름을 입력하세요\n')

var you = document.getElementById('number')
var m1 = document.getElementById('m1')
var bt = document.querySelectorAll('button')
var tt = document.getElementById('tt');
var send = document.getElementById('send');
var pp = document.getElementById('p1');
var back = document.getElementById('back')
var all = document.querySelector('.color')
var lineall = document.querySelector('.all')
var allheader = all.querySelector('.allheader')
var keybg = all.querySelector('.key')
var button = document.getElementsByTagName('button')



back.addEventListener('click',function() {
    if(back.value === '라이트'){
        all.style.backgroundColor = 'white';
        all.style.color = 'black';
        allheader.style.backgroundColor = 'white';
        lineall.style.borderColor='black';
        keybg.style.backgroundColor = 'darkgray';
        this.value = '다크';
        for(var i =0; i<button.length;i++){
            button[i].style.backgroundColor = 'white';
        }
       
        
       
    }else{ all.style.backgroundColor = 'black';
    all.style.color = 'white';
    allheader.style.backgroundColor = 'black';
    lineall.style.borderColor='white';
    keybg.style.backgroundColor = 'black';
        this.value = '라이트';
        for(var i = 0; i<button.length;i++){
            button[i].style.backgroundColor = 'gray';
        }
    }}
 );



if(p!==""){
    you.textContent = p
} 


for(var i =0; i < bt.length; i++){
    bt[i].onclick = function() { 
        
        tt.value += this.value;
}
}


    send.onclick = function(){
       
        p2.innerHTML += "<mark>"+tt.value+"</mark>";

        tt.value=" "
}



