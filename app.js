let element=document.querySelectorAll(".box");
let boxes=document.querySelector(".boxes")
let restart=document.querySelector("#restart");
let msg=document.querySelector(".message");
let player1=true;
let winner_pattern=[
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
]
let count=0;


//Restart button
let restart_fun=()=>{
    player1=true;
    count=0;
    element.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    })
    hide_msg();
}

restart.addEventListener('click',restart_fun);

//hide box 
function hide_box(){
    boxes.style.cssText="visibility:hidden;"
}

function show_box(){
    boxes.style.cssText="visibility: visible ;"
}

//winner checking

let check_winner = ()=>{
    for(let pattern of winner_pattern){
        let box1=element[pattern[0]].innerText;
        let box2=element[pattern[1]].innerText;
        let box3=element[pattern[2]].innerText;
        if(box1!="" && box2!="" && box3!=""){
            if(box1==box2 && box2==box3){
               console.log("The winner is "+box1);
               msg.innerText=`The winner is ${box1}`;
               return true;
            }
        }
    }
    return false;
}
//message block
let show_msg = ()=>{
    msg.style.cssText="visibility: visible ;"
    hide_box();
}

let hide_msg = ()=>{
    msg.style.cssText="visibility:hidden;"
    show_box();
}

element.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("Button clicked");
        if(player1){
            box.innerText="X";
            player1=false;
        }
        else{
            box.innerText="O";
            player1=true;
        }
        box.disabled = true;
        count++;
        let winner=check_winner();
        if(winner){
            setTimeout(show_msg,150)
            
        }
        if(count==9 && !winner){
           msg.innerText="Draw";
           show_msg();
        }
        
    }) 
})




