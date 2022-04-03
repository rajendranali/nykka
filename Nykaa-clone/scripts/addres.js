let form=document.getElementById("formad").addEventListener("submit",(event)=>{
    event.preventDefault();
    let city=document.getElementById("country").value;
    let name=document.getElementById("name").value;
    let phone=document.getElementById("number").value;
    let pin=document.getElementById("postal_code").value;
    let address=document.getElementById("address").value;
    let obj={
        city,
        name,
        phone,
        pin,
        address
    }
    let arr=[]
   arr.push(obj)
   localStorage.setItem("address",JSON.stringify(arr))
   window.location.href="payment.html"
    
})

let getdata = JSON.parse(localStorage.getItem("cart"));
var total = JSON.parse(localStorage.getItem("discpn")) || 0;
document.getElementById("sub_Total").innerText = total;
document.getElementById("Sub_Total").innerText = total
function displayItem() {
    getdata.map(function (elem) {
    let div2 = document.createElement("div");

    let image = document.createElement("img");
    image.src = elem.img_url;

    let p1 = document.createElement("p");
    p1.innerText = elem.name;

    let p2 = document.createElement("p");
    p2.innerText = elem.price;

    //div1.append(image);
    div2.append(image,p2,p1);
   // console.log(div1)
    document.getElementById("product").append(div2)
    })
    
    
}
displayItem()