//confirmed, recovered, death cases in India
fetch("https://api.covid19api.com/country/India").then((res)=>{
return(res.json());
}).then((res2)=>{
  console.log('hello')

  document.getElementById("totalCases").innerHTML=res2[res2.length-1].Confirmed;
  document.getElementById("totalDeath").innerHTML=res2[res2.length-1].Deaths;
  document.getElementById("totalRecovered").innerHTML=res2[res2.length-1].Recovered;
  document.getElementById("totalActive").innerHTML=res2[res2.length-1].Active;

});

fetch("/medical/productDetails").then((res)=>{
  return(res.json());
}).then((res2)=>{

  console.log(res2[0].productName);

  for(let i=0;i<res2.length;i++)
  {
  const card = document.createElement('div');
  card.classList = 'col mb-4';
  // card.className='col mb-4';
  var sheet = document.createElement('style');
  sheet.innerHTML = "div {border: 2px solid coral; border-radius: 8px;},img {width: 286;}";
  var sheet2 = document.createElement('style');
  sheet2.innerHTML="div{margin: 10px 10px 10px 10px}";
  var sheet3 = document.createElement('style');
  sheet3.innerHTML="div{position: relative margin:10px 10px 10px 10px text-align: center;}";

  // Construct card content
  const content = `
  <br>
    <div class="card" style="width:18rem; box-sizing: border-box; border: 2px solid black; margin: 60px 20px 40px 20px;">
    <img src=${res2[i].imageSRC} class="card-img-top" style:"width:18rem height:300px">
    <div class="card-body" >
    <h5 class="card-title">Name : ${res2[i].productName}</h5>
    <p class="card-text">Price : ${res2[i].price}</p>
    <p class="card-text">Description : ${res2[i].description}</p>
    </div>
    <span class="card-body" style:"text-align: center; padding: 20px;">
    <button type="button" class="btn btn-lg btn-primary" disabled>Buy</button>
    <button type="button" class="btn btn-secondary btn-lg" disabled>Add to Cart</button>
    </span>
    </div>
    </div>
  `;
 document.getElementById('medical-container').innerHTML += content;
  document.body.appendChild(sheet3);
  document.body.appendChild(sheet2);
  document.body.appendChild(sheet);
  }
});

fetch("/grocery/productDetails").then((res)=>{
  return(res.json());
}).then((res2)=>{

  console.log(res2[0].productName);

  for(let i=0;i<res2.length;i++)
  {
  const card = document.createElement('div');
  card.classList = 'col mb-4';
  // card.className='col mb-4';
  var sheet = document.createElement('style');
  sheet.innerHTML = "div {border: 2px solid coral; border-radius: 8px;},img {width: 286;}";
  var sheet2 = document.createElement('style');
  sheet2.innerHTML="div{margin: 10px 10px 10px 10px}";
  var sheet3 = document.createElement('style');
  sheet3.innerHTML="div{position: relative margin:10px 10px 10px 10px text-align: center;}";

  // Construct card content
  const content = `
  <br>
    <div class="card" style="width:18rem; box-sizing: border-box; border: 2px solid black; margin: 60px 20px 40px 20px;">
    <img src=${res2[i].imageSRC} class="card-img-top" style:"width:18rem height:300px">
    <div class="card-body" >
    <h5 class="card-title">Name : ${res2[i].productName}</h5>
    <p class="card-text">Price : ${res2[i].price}</p>
    <p class="card-text">Description : ${res2[i].description}</p>
    </div>
    <span class="card-body" style:"text-align: center; padding: 20px;">
    <button type="button" class="btn btn-lg btn-primary" disabled>Buy</button>
    <button type="button" class="btn btn-secondary btn-lg" disabled>Add to Cart</button>
    </span>
    </div>
    </div>
  `;
 document.getElementById('grocery-container').innerHTML += content;
  document.body.appendChild(sheet3);
  document.body.appendChild(sheet2);
  document.body.appendChild(sheet);
  }
});


//showCart
fetch("/login/showCart").then((res)=>{
    return(res.json());
  }).then((res2)=>{
    console.log(res2.length);
    if(res2.length==0){
      const card = document.createElement('div');
      const content=`<center>
      <div class="card bg-dark text-white">
      <img src=".//images/noItems.jpg" class="card-img" alt="...">
      <div class="card-img-overlay">
        <h1 class="card-title"></h1>
        <p class="card-text"><h1>No Items Added in the cart</h1></p>
      </div>
    </div></center>`;
    document.getElementById('container1').innerHTML += content;
    document.body.appendChild(sheet3);
    document.body.appendChild(sheet2);
    document.body.appendChild(sheet);
    }
    else{
    for(let i=0;i<res2.length;i++)
    {
    const card = document.createElement('div');
    card.classList = 'col mb-4';
    // card.className='col mb-4';
    var sheet = document.createElement('style');
    sheet.innerHTML = "div {border: 2px solid coral; border-radius: 8px;},img {width: 286;}";
    var sheet2 = document.createElement('style');
    sheet2.innerHTML="div{margin: 10px 10px 10px 10px}";
    var sheet3 = document.createElement('style');
    sheet3.innerHTML="div{position: relative margin:10px 10px 10px 10px text-align: center;}";
  
    // Construct card content
    const content = `
    <br>
      <div class="card" style="width:18rem; box-sizing: border-box; border: 2px solid black; margin: 60px 20px 40px 20px;">
      <img src=${res2[i].imageSRC} class="card-img-top" style:"width:18rem height:300px">
      <div class="card-body" >
      <h5 class="card-title">Name : ${res2[i].productName}</h5>
      <p class="card-text">Quantity : ${res2[i].quantity}</p>
      <p class="card-text">Total Price : ${res2[i].price*res2[i].quantity}</p>
      </div>
      <span class="card-body" style:"text-align: center; padding: 20px;">
      <button type="button" class="btn btn-lg btn-primary" disabled>Buy</button>
      </span>
      </div>
      </div>
    `;
   document.getElementById('container1').innerHTML += content;
    document.body.appendChild(sheet3);
    document.body.appendChild(sheet2);
    document.body.appendChild(sheet);
    }
  }
  })


  //typewriter

  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
