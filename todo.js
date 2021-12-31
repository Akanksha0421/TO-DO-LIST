let inputtext =  document.getElementById("inputtext");
let addtask =  document.getElementById("addtask")

let savetask = document.getElementById("savetask")
showtask()
addtask.addEventListener("click",function(e){
    e.preventDefault();
    inputtextval = inputtext.value;
    let webtask = localStorage.getItem("localtask")
    if(webtask== null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
    }

    if(inputtext.value.length<1){
        let alert1 = document.getElementById("alert1")
        alert1.classList.add('wrong')
        setTimeout(() => {
            alert1.classList.remove('wrong')
            
        }, 2000);
    }
    else{
        taskObj.push(inputtextval);
        localStorage.setItem("localtask", JSON.stringify(taskObj))
        let alert2 = document.getElementById("alert2")
        alert2.classList.add('right')
        setTimeout(() => {
            alert2.classList.remove('right')
            
        }, 2000);

    }
    inputtextval=" "
    showtask();

})
// show task
function showtask(){
    let webtask = localStorage.getItem("localtask")
    if(webtask== null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
    }
    let html = ''
   
    let tasklist = document.getElementById("list")
    taskObj.forEach((element,index)=> {
        html+=`<tr class="element" >
        <th  scope="row">${index+1}</th>
        <td><p>${element}</p></td>
        <td><button class=" edit btn-primary" onclick="edittask (${index})">Edit</button></td>
        <td><button  class="  del btn-danger " id=${index} onclick="deletetask(this.id)">Delete</button></td>
       
      </tr>`
    });
    if(taskObj.length!= 0){

        tasklist.innerHTML=html;
    }
    else{
        
        tasklist.innerHTML= `<i>Add your tasks<i>!!`
    }

}
// EDIT
function edittask(index){

    let saveindex=document.getElementById("saveindex")

    let addtask=document.getElementById("addtask")
    let savetask = document.getElementById("savetask")
    saveindex.value= index;
    let webtask = localStorage.getItem("localtask")
    let taskObj = JSON.parse(webtask);
    inputtext.value = taskObj[index]
    addtask.style.display = "none"
    savetask.style.display= "block"
}
// saving the edited task
let saveindex=document.getElementById("saveindex")
savetask.addEventListener("click",function(){
    let webtask = localStorage.getItem("localtask")
    let taskObj = JSON.parse(webtask);
    let saveindexvalue=document.getElementById("saveindex").value;
    taskObj[saveindexvalue]=inputtext.value;
    localStorage.setItem("localtask", JSON.stringify(taskObj))
    showtask();
})
// delete all
let deletealltask = document.getElementById("deletealltask")
deletealltask.addEventListener("click", function(e){
    e.preventDefault()
    console.log("Done");
    if(confirm("Are you suriour you want to delete all?")){

        localStorage.clear()
        showtask()
    }
})

// delete
function deletetask(index) {
    
  
    let webtask = localStorage.getItem("localtask")
    if(webtask== null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
    }
  
    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();
  }
//   search
let search = document.getElementById("searchbar");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  console.log('Input event fired!', inputVal);
  let noteCards = document.getElementsByClassName("element");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
    
  });
});




