
let task=[]

function addData(){
    let id=document.getElementById("txtid").value;
    let name=document.getElementById("txtname").value;
    let index=document.getElementById("addindex").value;

    if(id==""||name==""){
        alert("please fill the id and Task");
        return;
    }
            
    let newtask={
        id:id,
        name:name,
    }
    if(index===""){
        task.push(newtask);
    }
    else{
        task[index]=newtask;

        document.getElementById("addindex").value="";
    }
    read();
    clearData();
}

//read data

function read(){
    let list=document.getElementById("list")
        list.innerHTML="";

        for(let i=0;i<task.length;i++){
        list.innerHTML+=`
            <tr>
                <td>${i}</td>
                <td>${task[i].id}</td>
                <td>${task[i].name}</td>
                      
                <td>
                        
                    <button onclick="edit(${i})">Update</button> 
                    <button onclick="remove(${i})">Delete</button>       
                </td>   
            </tr> 
                `
        }        
    }

//update 

function edit(index){
    let updatedata=task[index];

        document.getElementById("txtid").value=updatedata.id;
        document.getElementById("txtname").value=updatedata.name;
        document.getElementById("addindex").value=index;
    }

function remove(index){
    task.splice(index,1);
        read();
    }

function clearData(){
    document.getElementById("txtid").value="";
    document.getElementById("txtname").value="";
    document.getElementById("addindex").value="";
}