let movieContainer = document.getElementById("movieContainer")

 // movie from 2021 

let  spiderman = {

name:"Spider-man No Way Home",
rating:93,
image: "images/spiderman.jpg",
likebtn: function(){
   alert("you liked " +spiderman.name)
}

}


let freeguy= {
    name: "Free guy",
    rating: 80,
    image: "images/freeguy.jpg",
    likebtn: function(){
        alert("you liked " +freeguy.name)
    }
}

let ethernals={
name:"Ethernals",
rating:47,
image: "images/ethernals.jpg",
likebtn: function(){
    alert("you liked " +ethernals.name)
}

}

let nobody = {
    name: "Nobody",
    rating: 84,
    image: "images/nobody.jpg",
    likebtn: function(){
        alert("you liked " +nobody.name)
    }
}


let movieARR = [spiderman,freeguy, ethernals, nobody]


for(let i = 0; i<movieARR.length; i++){
console.log(movieARR[i])
let newDiv= document.createElement("div")

let newHeader = document.createElement("h1")
newHeader.innerHTML=movieARR[i].name

newDiv.appendChild(newHeader)

let newimg= document.createElement("img")
newimg.src= movieARR[i].image
newDiv.appendChild(newimg)


let newP=document.createElement("p")
newP.innerHTML= "rating: " + movieARR[i].rating +"% on rotten Tomatoes"
newDiv.appendChild(newP)


let newButton = document.createElement("button")
newButton.innerHTML="like"
newDiv.appendChild(newButton)


newButton.onclick= movieARR[i].likebtn


movieContainer.appendChild(newDiv)

}





