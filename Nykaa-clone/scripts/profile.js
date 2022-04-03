let data=JSON.parse(localStorage.getItem("address"))
data.forEach((data)=>{
    let div=document.createElement("div")
let h3=document.createElement("h3")
h3.innerText=data.city;
let h4=document.createElement("h4")
h4.innerText=data.name;
let p1=document.createElement("p")
p1.innerText=data.number;
let p2=document.createElement("p")
p2.innerText=data.address;
div.append(h3,h4,p1,p2)
document.getElementById("addressappend").append(div)
})