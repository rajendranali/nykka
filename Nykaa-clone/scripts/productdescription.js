let getdata = JSON.parse(localStorage.getItem("description"));
display()
function display() {
       
        let div = document.createElement("div")
        // console.log(getdata)

        let image = document.createElement("img");
        image.src = getdata.img_url;

        let p1 = document.createElement("h4");
        p1.innerText = getdata.name;

        let p2 = document.createElement("h3");
        p2.innerText ="MRP :"+"₹"+getdata.price;

        let p3 = document.createElement("p");
        p3.innerText = "⭐⭐⭐⭐⭐"+"5/5"+"    "+"4921 ratings"  

        let p4 = document.createElement("p");
        p4.innerText = getdata.tax;
        
        let p5=document.createElement("p")
        p4.innerText="•Free Mini Shampoo on orders above 399+"
        let small =document.getElementsByClassName("tF1");
        for(let i=0;i<=small.length-1;i++)
        {
                // console.log(getdata.arr[i],small[i])
                 let img=document.createElement("img");
                 img.src=getdata.arr[i]
                 img.className="imageS"
                //  console.log(img)
                // // let data=getdata.arr[i];
                 small[i].append(img);
                
                // // console.log(typeof(data),data)
        }
        div.append(p1,p3,p2,p4,p5)
        document.getElementById("tS").append(image)
        document.getElementById("nykaa_details").append(div);
}

document.getElementById("bag").addEventListener("click",addbag)

function addbag(){
      

}
let val=document.getElementsByClassName("tF1");
for(let i=0;i<=val.length-1;i++)
{
        val[i].addEventListener("click",()=>{
                document.getElementById("tS").innerHTML=null;
                let ig=document.createElement("img")
                ig.src=getdata.arr[i];
                document.getElementById("tS").append(ig)
                console.log(getdata.arr[i]);
        })
}
