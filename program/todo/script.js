let todo=[]

let task = prompt("action")

while (true){
    if (task=="q"){
        console.log("you quited")
        break
    }

    if (task=="l"){
        console.log("------------------")
        for(let i=0 ; i<todo.length ; i++){
            console.log(i , todo[i])
        }
        console.log("------------------")
    }

    else if(task=="a"){
        let req = prompt("add your task")
        todo.push(req)
        console.log("req added")
    }

    else if (task == "d"){
        let idx = prompt("which task")
        todo.splice(idx, 1)
        console.log("task deleted")
    }

    task = prompt("what next")
}