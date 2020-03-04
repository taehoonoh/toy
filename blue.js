
var p = prompt('\n　　　　　　　　　　　문자서비스입니다\n　　　　　　　　　상대방 이름을 입력하세요\n')

var you = document.getElementById('number')
var m1 = document.getElementById('m1')
var bt = document.querySelectorAll('button')
var tt = document.getElementById('tt');
var send = document.getElementById('send');
var pp = document.getElementById('p1');
var back = document.getElementById('back')
var all = document.querySelector('.color')

var button = document.getElementsByTagName('button')



back.addEventListener('click',function() {
    if(back.value === '라이트'){
        all.style.backgroundColor = 'black';
        all.style.color = 'white';
        //button.slice[0,1].style.backgroundColor = 'black';
        this.value = '다크';
        
       
    }else{all.style.backgroundColor = 'white';
        all.style.color = 'black';
        //button[0][20].style.backgroundColor = 'white';
        this.value = '라이트';

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
        // confirm('정말로 전송하시겠습니까?')
        p2.innerHTML += "<mark>"+tt.value+"</mark>";

        tt.value=" "
}



