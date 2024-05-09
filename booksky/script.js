//selecting add button, popup overlay, poopup box 
var popupoverlay = document.querySelector(".popup-overlay")
var poopupbox= document.querySelector(".poopup-box")
var addbutton = document.getElementById("addbutton")

addbutton.addEventListener("click",function(){
    popupoverlay.style.display= "block"
    poopupbox.style.display= "block"
})

//select cancel button
var cancelbutton = document.getElementById("cancelbutton")

cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display= "none"
    poopupbox.style.display= "none"
})

// select book title, authir, description, add button, container

var container = document.querySelector(".container")
var booktitle = document.getElementById("booktitle")
var bookauth = document.getElementById("bookauth")
var description = document.getElementById("description")
var adddetails = document.getElementById('adddetails')


adddetails.addEventListener("click",function(event){
    event.preventDefault()
    //creating a new element div inside the container 
    var div = document.createElement("div")
    //set the attribute - class 
    div.setAttribute("class","book-container")
    div.innerHTML =`<h3>${booktitle.value}</h3>
    <h5>${bookauth.value}</h5>
   <p>${description.value}</p>
   <button onclick="deletebutton(event)">Delete</button>`
    
    container.append(div)
    popupoverlay.style.display= "none"
    poopupbox.style.display= "none"
    booktitle.value=""
    bookauth.value=""
    description.value=""
    
})

// delete button - the particular target event will be deleted. 

function deletebutton(event){
    event.target.parentElement.remove()

}

