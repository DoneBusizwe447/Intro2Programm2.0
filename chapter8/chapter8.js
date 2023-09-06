

let dreamCar = {    
    make: "Porsche",    
    model: "2017",    
    color: "purple",    
    year: 2017,    
    bodyStyle: "Luxury Car",    
    price: 45000 };
    
    alert("the type of dreamCar is: " + typeof dreamCar);

    document.getElementById("pricetag").innerHTML = dreamCar.price;

    document.getElementById("modelyear").innerHTML = dreamCar.year;

    document.getElementById("body").style.backgroundColor = dreamCar.color;

    document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;