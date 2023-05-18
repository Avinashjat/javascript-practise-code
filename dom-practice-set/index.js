let firstele = document.getElementsByClassName("nav-link")[0]
firstele.style.color = "red"

let firstele1 = document.getElementsByClassName("navbar-brand")[0]
firstele1.style.color = "green"

let firstele2 = document.getElementsByClassName("nav-link1")[0]
firstele2.style.color = "green"

document.getElementsByClassName("container-fluid")[0].firstElementChild.style.color = "green"

// document.getElementsByClassName("nav-item")[0].lastElementChild.style.color = "green"

// let kk =document.getElementsByTagName("li")

// kk[0].style.background = "cyan"
// kk[1].style.background = "cyan"
// kk[2].style.background = "cyan"
// kk[3].style.background = "cyan"

Array.from(document.getElementsByTagName("li")).forEach((element) => {
element.style.background = "cyan"
    
})