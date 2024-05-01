    
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', ()=> {
        const navLinks = document.querySelector('.nav-links');
        const navButtons = document.querySelector('.nav-buttons');

        navLinks.classList.toggle('active');
        navButtons.classList.toggle('active');

        burger.classList.toggle('toggle');
    });

    function GstCalculate() {

        const userName = document.getElementById("name").value
        const Mobile = document.getElementById("phone").value
        const userEmail = document.getElementById("email").value
        const Place = document.getElementById("place").value
    
        const starters = document.getElementById("items1").value
        const chicken = document.getElementById("items2").value
        const Burgers = document.getElementById("items3").value
        const Chinese = document.getElementById("items4").value
        const Biryani = document.getElementById("items5").value
    
        const GST = document.getElementById("gst").value
        const button = document.getElementById("PaymentButton");
    
    
        let arrayOfItems = [parseInt(starters), parseInt(chicken), parseInt(Burgers), parseInt(Chinese), parseInt(Biryani)]
    
        let calculate = 0;
    
        for (let i = 0; i < arrayOfItems.length; i++) {
            calculate = calculate + arrayOfItems[i];
    
        }
    
    
        let totalGstCalculate = (calculate * GST) / 100
    
        let total = calculate + totalGstCalculate
    
        let tip1=total+1000
        let tip2=total+500
    
        if (total >= 6000) {
            console.log("with tip 1000 rupees:", + tip1)
    
        }
        else {
            console.log("with tip 500 rupees", + tip2)
        }
    
    
    
    
        let details = `<h1>Name : ${userName}</h1><br>
        <h3>Email : ${userEmail}</h3><br>
        <h3>Mobile : ${Mobile}</h3><br>
        <h3>Place : ${Place}</h3> <br>
        <h3>Amount : ${calculate}</h3><br>
        <h3>Total bill payment With ${totalGstCalculate} GST : ${total}</h3><br>
        <h3>Note: Bill exceeds 6000 then will only pay 500 rupees in tip otherwise will pay 1000 rupees in tip</h3>
                       `
    
        let data = document.getElementById("data").innerHTML = details;
    
    
    
    }