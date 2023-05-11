
const input = document.getElementById('input')
    console.log(input)
const ul = document.getElementById('list-container')
    console.log(ul)

function addTask(){
    if (input.value === '')  {
        alert('You must write smth')
    }

    else{
        let li = document.createElement('li')
        li.innerHTML = input.value
        ul.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }

     input.value = ''
     saveData()
     return
    

}

ul.addEventListener('click', function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle('checked')
        saveData()
    }

    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
},false)
  

function saveData(){
    localStorage.setItem('data', ul.innerHTML)
}

function showTask(){
    ul.innerHTML = localStorage.getItem('data')
}
showTask()




document.addEventListener('keyup', (event) => {
   if (event.keyCode === 13){
    addTask()
   }


    
    
})



