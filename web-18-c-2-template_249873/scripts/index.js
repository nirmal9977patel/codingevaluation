// Add the coffee to local storage with key "coffee"
const url = "https://masai-mock-api.herokuapp.com/coffee/menu";

async function getData(){
    try{
        let res= await fetch(url);
        let products= await res.json();
        appenddata(products);
        console.log(products);
    }
    catch (err){
        console.log(err);
    }
}
getData()

function appenddata(data){
   data.forEach(function(el){
       let title=document.createElement("h3");
       title.innerText=el.title;

       let image= document.createElement("img");
       image.src=el.image;

       let price= document.createElement("p");
       price.innerHTML="$30";

       let btn= document.createElement("button");
        btn.innerHTML="add to bucket"

        let div= document.createElement("div");
        div.append(image,h3,p,btn);

        menu.append(div);
       
   });
}
