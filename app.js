/*let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
btn.addEventListener("click",function()
{

let item= document.createElement("li");
item.innerText=inp.value;
let delbtn=document.createElement("button");
delbtn.innerText="delete";
delbtn.classList.add("delete");
item.appendChild(delbtn);
ul.appendChild(item);
inp.value="";
});
ul.addEventListener("click",function(event){
    if(event.target.nodeName="button"){
        let listitem=event.target.parentElement;
        listitem.remove();
        console.log("deleted"); 
    }
})


/*let delbtns=document.querySelectorAll(".delete");
for( let delbtn of delbtns){
delbtn.addEventListener("click",function(){
    let par=this.parentElement;
    console.log(par);
    par.remove();

});
}*/
let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    let dltbtn=document.createElement("button");
    dltbtn.classList.add("delete");
    dltbtn.innerText="delete";
    item.appendChild(dltbtn);
    ul.appendChild(item);
    inp.value="";

});
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
        console.log("deleted");
    }
});