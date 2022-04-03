let cartdata = JSON.parse(localStorage.getItem("cart"));
console.log(cartdata)
let getdis = JSON.parse(localStorage.getItem("discpn"))
//console.log(cartdata)
let displaytotal = document.getElementById("payment1")
function display(cart) {
    document.getElementById("cart").innerHTML = null;
    cartdata.map((elem,index,array) =>{
        let div = document.createElement("div");
        let div1 = document.createElement("div");
      
        let image = document.createElement("img");
        image.src = elem.img_url;
    
        let p1 = document.createElement("h4");
        p1.innerText = elem.name;

        let btn = document.createElement("img");
        btn.src = "https://cdn-icons-png.flaticon.com/128/1214/1214428.png";
        btn.addEventListener("click",function(){

            let part1 = array.slice(0,index);
            let part2 = array.slice(index+1,array.length);
            part1 = part1.concat(part2);
            localStorage.removeItem("cart");
            localStorage.setItem("cart",JSON.stringify(part1))
            data = JSON.parse(localStorage.getItem("cart"));
            document.location.reload();
            display(cart)
        });

        btn.setAttribute("id","delete")
     
       let option0 = document.createElement("option");
       option0.innerText = "quantity";

       let select = document.createElement("select");
       let option1 = document.createElement("option");
       option1.innerText = 1;
       let option2 = document.createElement("option");
       option2.innerText = 2;
       let option3 = document.createElement("option");
       option3.innerText = 3;

       select.append(option0 ,option1,option2,option3)
       div1.append(select)
        div.append(image,p1,btn);
      //  div1.append(btnpls,p,btnminus);
        document.getElementById("cart").append(div,div1);

       
    })
   
}

display(cart)

const findTotal = (cartdata)=>{
    document.getElementById("payment2").innerHTML = null;
    let total = cartdata.reduce(function (acc,curr){
        return acc+curr.price
    },0)
   displaytotal.innerText = total;
  let grantTotal = document.getElementById("payment2").innerText = total-150;
  localStorage.setItem("coupon",JSON.stringify(grantTotal))
   
  if(getdis == undefined){
    document.getElementById("gtotal").innerText = grantTotal
  }
  else {
    document.getElementById("gtotal").innerText = getdis
  }
  
}
findTotal(cartdata)

  document.getElementById("proceed1").addEventListener("click", function(){
      window.location.href ="address.html"
  })

