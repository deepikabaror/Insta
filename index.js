// kise bhi element ko select krne per select used
var istatus = document.querySelector("h5")
var addFriend = document.querySelector("#add")
var removeFriend = document.querySelector("#remove")

// var check = 0


// add friends button click
btn.addFriend.addEventListener("click",function(){
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
    // if(check == 0){
    //     istatus.innerHTML = "Friends"
    //     istatus.style.color = "green"
    //     check = 1
           //btn.innerHTML = "Remove Friends"
    //     console.log("hui hui hi")
    // }
    // else{
    //        istatus.innerHTML = "Stranger"
    //        istatus.style.color = "red"
    //        check = 0
    //     //    console.log("hui hui hi")
    // }

})


// remove button
removeFriend.addEventListener("click", function(){
    istatus.innerHTML = "Stranger"
    istatus.style.color = "red"
})
