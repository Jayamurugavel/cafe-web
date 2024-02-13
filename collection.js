var productcontainer=document.getElementById("products")

var search=document.getElementById("search")

var productlist=productcontainer.querySelectorAll("div")


//eventlistner use pannurom
search.addEventListener("keyup",function()
{

    var enteredvalue=event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count=count+1)
    {

        //div kulla irukara paragraph text select panna "p" use pannurom
        var productname=productlist[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[count].style.display="none"
        }
        else
        {
            productlist[count].style.display="block"

        }

    }
})