// Todo App

var input = document.getElementById('inp')
var parent = document.getElementById('parent')
// console.log(parent, input)

function addTodo(){

    if(!input.value){
    alert('required fields are empty!!!')
    return
    }    


   // create li element
   var li = document.createElement('li')
   //create li text
   var liTxt = document.createTextNode(input.value)
   //set class li
   li.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center')
   // relation li parent to li text
   li.appendChild(liTxt)

   var div = document.createElement('div')
   div.setAttribute('class', 'd-flex gap-4')

   //create edit button
   var editBtn = document.createElement('button')
   //create edit button text
   var editBtnTxt = document.createTextNode('Edit Todo')

   editBtn.setAttribute('class', "btn btn-success")
   editBtn.setAttribute('onclick', "edittodo(this)")

   editBtn.appendChild(editBtnTxt)

   div.appendChild(editBtn)


    // delete single todo 
   var delBtn = document.createElement('button')
   var delBtnTxt = document.createTextNode("Delete todo")
   delBtn.setAttribute('class', 'btn btn-danger')
   delBtn.setAttribute('onclick', "deleteTodo(this)")
   delBtn.appendChild(delBtnTxt)

   div.appendChild(delBtn)
   li.appendChild(div)
   parent.appendChild(li)
   input.value = ""
}

function deleteAll(){
    parent.remove()
}

function deleteTodo(ele){
    var liRem = ele.parentNode.parentNode
    // console.log(liRem)
    liRem.remove()
}

function edittodo(ele){
    var liRe = ele.parentNode.parentNode.firstChild.nodeValue
    console.log(liRe) 
    var new_value = prompt("enter new value",liRe) 
    ele.parentNode.parentNode.firstChild.nodeValue = new_value 

    if(!new_value.value){
        alert('required fields are empty!!!')
        new_value = ele.parentNode.parentNode.firstChild.nodeValue
    } 
       

}

