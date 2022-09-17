

var div=document.createElement("div")
div.setAttribute("id","div")
div.style.textAlign="center";


//input.style.marginLeft="675px";
//document.body.append(input)


var div1=document.createElement("div")
div1.setAttribute("id","active")
//active.style.fontSize="30px";
//var group=document.createElement("div")
//group.setAttribute("id","recovery")
//recovery.style.fontSize="30px";
//var htmlcode=document.createElement("div")
//htmlcode.setAttribute("id","death")
//death.style.fontSize="30px";

div.append(div1)
document.body.append(div)

async function foo(){
  
    let url=`https://emojihub.herokuapp.com/api/random/`
    var res=await fetch(url);
    var res1=await res.json();
        console.log(res1.name)
        div1.innerHTML=`Name:${res1.name}<br>
        Group:${res1.group}<br>
        Category:${res1.category}<br>
        Symbal:${res1.htmlCode}<br>
        Unicode:${res1.unicode}<br>`
        //console.log(res1[i].name);
        
       
        
       
        }     



foo()