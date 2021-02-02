fetch("../data/data.json").then(response=>{
    return response.json()
}).then(data=>{
    displayData(data)
})
function displayData(info) {
    var sampleElement=document.createElement("img")
    sampleElement.src="img/1.jpg";
    ("class1","class2","class3")
sampleElement.classList.remove
()

    var bodyElement=document.querySelector("body");
    bodyElement.append(sampleElement);
}

function displayData(info){
    var bodyElement=document.querySelector("body");
    var row=document.createElement("section");
    row.classList.add("row","justify-content-center");
    bodyElement.append(row)
    info.laptops.map(value=>{
        var column=document.createElement("article");
        column.classList.add("col-sm-10","col-md-6","col-lg-3");
        row.append(column);

    // Card
    var card=document.createElement("div");
    card.classList.add("card");

    //Card - body
    var cardBody=document.createElement("div");
    cardBody.classList.add("card-body");
    //Image
    var imageElement=document.createElement("img");
    imageElement.src=value.image;
    imageElement.classList.add("img-responsive")
    imageElement.alt=value.name;

    //Name
    var nameElement = document.createElement("h2");
    nameElement.textContent=value.name;
    nameElement.classList.add("text-center","text-danger")
    
    //price 
    var price=document.createElement("p");
    price.classList.add("text-secondary","text-center")
    price.innerHTML="<s>₹ "+value.price+" /-</s>";

    //Original price
    var oPrice=document.createElement("p");
        oPrice.classList.add("text-center","text-danger")
        oPrice.textContent=value.originalprice;
    
    //ButtonParent
    var buttonParent=document.createElement("div");
    buttonParent.classList.add("d-grid","gap-2");
    //Button
    var Button=document.createElement("button");
    Button.classList.add("btn","btn-block","btn-primary");
    Button.textContent="Add to cart" 
    buttonParent.append(Button) 

    cardBody.append(imageElement);
    cardBody.append(nameElement);
    cardBody.append(price);
    cardBody.append(oPrice);
    cardBody.append(buttonParent);
    
    card.append(cardBody);
    column.append(card);

})

} 