let inputtext = document.getElementById("inputtext");
let addbtn= document.getElementById("addtask");
let del= document.getElementById("deletetask");
showtask()

add.addEventListener("click",()=>{
    inputtextval= inputtext.value;

    let webtask = localStorage.getItem("localtask")
    if(webtask == null){
        inputtextObj=[];
    }
    else{
        inputtextObj = JSON.parse(webtask);
    }
    
    inputtextObj.push(inputtextval);
    localStorage.setItem("localtask", JSON.stringify(inputtextObj))
    showtask()


})
function showtask(){
    let webtask = localStorage.getItem("localtask");
    if(webtask == null){
        inputtextObj=[];
    }
    else{
        inputtextObj = JSON.parse(webtask);
    }
    let html ='';
    let list =document.getElementById("list");
    inputtextObj.forEach((element,index)=>{
        html += 
    ` <tr>
    <th scope="row">${index+1}</th>
    <td>${element}</td>
    <td><button class=" ed btn-primary">Edit</button></td>
    <td><button class=" del btn-danger">Delete</button></td>
   
  </tr>`;
    })
    list.innerHTML = html;
}