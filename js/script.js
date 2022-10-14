var allProducts = document.querySelectorAll (" li")

  var content = document.querySelector("#chart")

  var btn = document.querySelector(".btn-danger")

  var totalPrice = 0;


 allProducts.forEach(function (item){
     item.onclick = function (){

       totalPrice +=  parseInt (item.getAttribute ("price"))
        content.innerHTML +="-" +item.textContent + " ";

        if (content.innerHTML != "" ) {
           btn.style.display = "block"
          //  content.style.display="block"
        }
      }
  })

  

  btn.onclick = function (){
    content.innerHTML += "Total is :  "+ totalPrice +"" ;
console.log(totalPrice)
  }

