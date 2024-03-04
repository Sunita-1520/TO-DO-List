let Task= document.getElementById("task");
let taskList= document.querySelector(".tasklist");
function addTask()
{
    let newtask=Task.ariaValueMax;
    if(newtask!="")
    {  
        let li=document.createElement("li");
        li.innerHTML=newtask;
        // tasklist.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML=" &#215;"; 
        li.appendChild(span);
        taskList.appendChild(li);
        // console.log(newtask);
    }else
    {
        alert("enter the task");
    }
    savedata();
    Task.value="";
}
taskList.addEventListener(
    "click",
    function(event)
{
    if(event.target.tagname == "li")
    {
        event.target.classlist.toggle("checked");
        savedata();
        console.log("enter the li tag");
    }else if(event.target.tagname =="span")
    {
        event.target.parentElement.remove();
        savedata();
        // console.log("clicked on cross");
    }
},false);
function savedata()
{
    localStorage.setItem("data",taskList.innerHTML);
}
function fetchdata()
{
    taskList.innerHTML= localStorage.getItem("data");
}
fetchdata();