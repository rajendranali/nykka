// Enter Grand Total Here------------------------------------>>>>>>>>>>>
var total = JSON.parse(localStorage.getItem("discpn")) || 0
var total_items = JSON.parse(localStorage.getItem("money")) || 0;


console.log(total);
document.getElementById("payButton").innerHTML = `Pay &#8377;${total} Now <i class="fas fa-angle-right"></i>`;

// DIV 1
let div1 = document.createElement("div");
div1.setAttribute("id","checkOut-one");

let p1 = document.createElement("p");
// Enter Total Items Here------------------------------------>>>>>>>>>>>
var total_items = 1;
p1.innerText = `${total_items} Items in your bag`;

let p2 = document.createElement("p");
p2.innerHTML = `DETAILS <i class="fa-solid fa-angle-down"></i>`;

div1.append(p1,p2);
document.getElementById("checkOut").append(div1);


// DIV 2
let div2 = document.createElement("div");
div2.setAttribute("id","checkOut-two");

let p3 = document.createElement("p");
p3.innerText = `Sub Total`;

let p4 = document.createElement("p");
p4.innerHTML = `&#8377;${total}`;

div2.append(p3,p4);
document.getElementById("checkOut").append(div2);


// DIV 3
let div3 = document.createElement("div");
div3.setAttribute("id","checkOut-three");

let p5 = document.createElement("p");
p5.innerText = `Shipping Charges`;

let p6 = document.createElement("p");
p6.innerText = `Free`;

div3.append(p5,p6);
document.getElementById("checkOut").append(div3);


// DIV 4
let div4 = document.createElement("div");
div4.setAttribute("id","checkOut-four");

let p7 = document.createElement("p");
p7.innerText = `Discount`;

let p8 = document.createElement("p");
p8.innerHTML = `- &#8377;0`;

div4.append(p7,p8);
document.getElementById("checkOut").append(div4);

// DIV 5
let div5 = document.createElement("div");
div5.setAttribute("id","checkOut-five");

let p9 = document.createElement("p");
p9.innerText = `Grand Total`;

let p10 = document.createElement("p");
p10.innerHTML = `&#8377;${total} <i class="fa-solid fa-angle-up"></i>`;

div5.append(p9,p10);
document.getElementById("checkOut").append(div5);


// DIV 6
let div6 = document.createElement("div");
div6.setAttribute("id","checkOut-six");

let p11 = document.createElement("p");
p11.innerText = `SHIPPING ADDRESS`;

let p12 = document.createElement("p");
p12.innerHTML = `CHANGE`;

div6.append(p11,p12);
document.getElementById("checkOut").append(div6);


// DIV 7
var address= JSON.parse(localStorage.getItem("address")) || 0;
let div7 = document.createElement("div");
div7.setAttribute("id","checkOut-seven");

let p13 = document.createElement("p");
// Enter Address Here------------------------------------>>>>>>>>>>>
//var address = `Mumbai, Maharashtra - 400000, India`
p13.innerText = `${address[0].city}`;

let p15 = document.createElement("p");
//var custName = `Manoj`
p15.innerText = `Name:${address[0].name}`;

let p14 = document.createElement("p");
//var mobNum = `+91 9100000000`
p14.innerText = `Phone no:${address[0].phone}`;
let p16 = document.createElement("p");
p16.innerText=`PIN:${address[0].pin}`

div7.append(p15,p13,p16,p14);
document.getElementById("checkOut").append(div7);



