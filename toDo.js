let input=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let dbn=document.querySelectorAll(".delete");



btn.addEventListener("click",function(){
    let li=document.createElement("li");
    li.innerText=input.value;
    ul.appendChild(li)

    let button=document.createElement("button");
    button.innerText="Delete";
    li.appendChild(button);
    button.classList.add("delete");
    input.value="";
    
})

    //for(but of dbn){
    //    but.addEventListener("click",function(){
    //    let par=this.parentElement;
       // par.remove();
       // })
  //  }
 
  ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        
    let parent=event.target.parentElement;
        parent.remove();

    }
  })