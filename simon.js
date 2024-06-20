
//strat-level1 wait press check if matched not same overevent listenesr track key press then start
let h1=document.querySelector('h1');

let flash=document.querySelector(".flash")
let gameseq=[];
let level=0;
let started=false;
let div=document.querySelector(".container ")
let h2=document.querySelector("h2");
let btn=document.querySelector(".btn");
let btn1=document.querySelector(".btn1");
let btn2=document.querySelector(".btn2");
let btn3=document.querySelector(".btn3");
let btn4=document.querySelector(".btn4");





div.addEventListener("click", function () {
    
    if (started == false) {
        
        console.log("game started");
        started = true;
        random();
        
    }}
)
let arr=[];
function checkSequence(arr, gameseq) {
    // Check if both arrays have the same length
    

    // Check if all elements are the same in both arrays
    if(arr.every((value, index) => value === gameseq[index])){
        level++;
        h1.innerText=level;
        arr=[];
    } 
    else{h1.innerText="u lost"}
    
}
    
  
  
btn1.addEventListener("click", function () {

    this.classList.add("flash");
    console.log("Button 1 clicked");
    arr.push("btn1");
    console.log("arr is",arr)
    
    checkSequence();
    random();
    
    setTimeout(function(){//imporatnt------
        btn1.classList.remove("flash");
                },400);
                ;});
                
    
    


btn2.addEventListener("click", function () {
    this.classList.add("flash");
    console.log("Button 2 clicked");
    arr.push("btn2");
    console.log("arr is")
    console.log(arr);
    checkSequence();
    random();
    
    setTimeout(function(){//imporatnt------
        btn2.classList.remove("flash");
                },400)
                ;});
                
                

btn3.addEventListener("click", function () {
    this.classList.add("flash");
    console.log("Button 3 clicked");
    arr.push("btn3");
    console.log("arr is")
    console.log(arr);
    checkSequence();
    random();
    setTimeout(function(){//imporatnt------
        btn3.classList.remove("flash");}
                ,400)
                ;})
               
;

btn4.addEventListener("click", function () {
    this.classList.add("flash");
    console.log("Button 4 clicked");
    arr.push("btn4");
    console.log("arr is")
    console.log(arr);
    checkSequence();
    random();
    
    setTimeout(function(){//imporatnt------
        btn4.classList.remove("flash");
                },400)
                });
                
                


let userseq=[btn1,btn2,btn3,btn4];
function random(){
    let rand=Math.floor(Math.random()*4);
    userseq[rand].classList.add("game");
    setTimeout(function(){//imporatnt------
        userseq[rand].classList.remove("game");
                },400);
gameseq.push(userseq[rand]);
console.log(gameseq);

}
