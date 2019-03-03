'use strict'
var pike = {
  name : '1st and Pike',
  id : 'storeId1',
  minHourlyCustomers : 23,
  maxHourlyCustomers : 65,
  avgCookiesPerCustomers : 6.3,
  getRandonNoOfCust : function() {
    //Source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    var min = Math.ceil(this.minHourlyCustomers);
    var max = Math.floor(this.maxHourlyCustomers);
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers; //The maximum is inclusive and the minimum is inclusive
  },
  startHour : 6,
  endHour : 20,
  cookiesSoldPerhour : [],
  generateCookiesSoldPerhour : function(){
    this.totalCookiesSold = 0;
    for(var i = this.startHour; i <= this.endHour; i++) {
      var rdNoOfCust = this.getRandonNoOfCust();
      var saleOfHour = {
        hour: format24to12(i),
        noOfCust: rdNoOfCust,
        cookiesSold: Math.floor( this.avgCookiesPerCustomers * rdNoOfCust),
      }
      this.totalCookiesSold += saleOfHour.cookiesSold;
      this.cookiesSoldPerhour.push(saleOfHour);
    }
    return this.cookiesSoldPerhour;
  },
  totalCookiesSold : 0,
  
}


var seaTacAirport	 = {
  name : 'SeaTac Airport',
  id : 'storeId2',
  minHourlyCustomers : 3,
  maxHourlyCustomers : 24,
  avgCookiesPerCustomers : 1.2,
  getRandonNoOfCust : function() {
    //Source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    var min = Math.ceil(this.minHourlyCustomers);
    var max = Math.floor(this.maxHourlyCustomers);
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers; //The maximum is inclusive and the minimum is inclusive
  },
  startHour : 6,
  endHour : 20,
  cookiesSoldPerhour : [],
  generateCookiesSoldPerhour : function(){
    this.totalCookiesSold = 0;
    for(var i = this.startHour; i <= this.endHour; i++) {
      var rdNoOfCust = this.getRandonNoOfCust();
      var saleOfHour = {
        hour: format24to12(i),
        noOfCust: rdNoOfCust,
        cookiesSold: Math.floor( this.avgCookiesPerCustomers * rdNoOfCust),
      }
      this.totalCookiesSold += saleOfHour.cookiesSold;
      this.cookiesSoldPerhour.push(saleOfHour);
    }
    return this.cookiesSoldPerhour;
  },
  totalCookiesSold : 0,
  
}

var seattleCenter	 = {
  name : 'Seattle Center',
  id : 'storeId3',
  minHourlyCustomers : 11,
  maxHourlyCustomers : 38,
  avgCookiesPerCustomers : 3.7,
  getRandonNoOfCust : function() {
    //Source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    var min = Math.ceil(this.minHourlyCustomers);
    var max = Math.floor(this.maxHourlyCustomers);
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers; //The maximum is inclusive and the minimum is inclusive
  },
  startHour : 6,
  endHour : 20,
  cookiesSoldPerhour : [],
  generateCookiesSoldPerhour : function(){
    this.totalCookiesSold = 0;
    for(var i = this.startHour; i <= this.endHour; i++) {
      var rdNoOfCust = this.getRandonNoOfCust();
      var saleOfHour = {
        hour: format24to12(i),
        noOfCust: rdNoOfCust,
        cookiesSold: Math.floor( this.avgCookiesPerCustomers * rdNoOfCust),
      }
      this.totalCookiesSold += saleOfHour.cookiesSold;
      this.cookiesSoldPerhour.push(saleOfHour);
    }
    return this.cookiesSoldPerhour;
  },
  totalCookiesSold : 0,
  
}

var capitolHill	 = {
  name : 'Capitol Hill',
  id : 'storeId4',
  minHourlyCustomers : 20,
  maxHourlyCustomers : 38,
  avgCookiesPerCustomers : 2.3,
  getRandonNoOfCust : function() {
    //Source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    var min = Math.ceil(this.minHourlyCustomers);
    var max = Math.floor(this.maxHourlyCustomers);
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers; //The maximum is inclusive and the minimum is inclusive
  },
  startHour : 6,
  endHour : 20,
  cookiesSoldPerhour : [],
  generateCookiesSoldPerhour : function(){
    this.totalCookiesSold = 0;
    for(var i = this.startHour; i <= this.endHour; i++) {
      var rdNoOfCust = this.getRandonNoOfCust();
      var saleOfHour = {
        hour: format24to12(i),
        noOfCust: rdNoOfCust,
        cookiesSold: Math.floor( this.avgCookiesPerCustomers * rdNoOfCust),
      }
      this.totalCookiesSold += saleOfHour.cookiesSold;
      this.cookiesSoldPerhour.push(saleOfHour);
    }
    return this.cookiesSoldPerhour;
  },
  totalCookiesSold : 0,
  
}

var alki	 = {
  name : 'Alki',
  id : 'storeId2',
  minHourlyCustomers : 2,
  maxHourlyCustomers : 16,
  avgCookiesPerCustomers : 4.6,
  getRandonNoOfCust : function() {
    //Source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    var min = Math.ceil(this.minHourlyCustomers);
    var max = Math.floor(this.maxHourlyCustomers);
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers; //The maximum is inclusive and the minimum is inclusive
  },
  startHour : 6,
  endHour : 20,
  cookiesSoldPerhour : [],
  generateCookiesSoldPerhour : function(){
    this.totalCookiesSold = 0;
    for(var i = this.startHour; i <= this.endHour; i++) {
      var rdNoOfCust = this.getRandonNoOfCust();
      var saleOfHour = {
        hour: format24to12(i),
        noOfCust: rdNoOfCust,
        cookiesSold: Math.floor( this.avgCookiesPerCustomers * rdNoOfCust),
      }
      this.totalCookiesSold += saleOfHour.cookiesSold;
      this.cookiesSoldPerhour.push(saleOfHour);
    }
    return this.cookiesSoldPerhour;
  },
  totalCookiesSold : 0,
  
}



function format24to12(timein24){
  var timeIn12 = (timein24 > 12) ? (timein24 - 12) : timein24;
  var timeAmPmStr = (timein24 >= 12) ? 'pm' : 'am';
  return timeIn12+timeAmPmStr;
}



var stores = [pike, seaTacAirport, capitolHill, seattleCenter, alki];
console.log('stores', stores);
for(var i=0; i < stores.length; i++){
  var store = stores[i];
  store.generateCookiesSoldPerhour();
  var ele = document.getElementById('allStoreSales');

  var storeSecEle = document.createElement("section");
  storeSecEle.innerHTML = `<h2> ${store.name} </h2>`;
  storeSecEle.id = store.id;
  

  var storeSalesListEle = document.createElement("ul");
  for(var j=0; j < store.cookiesSoldPerhour.length; j++){
    var storeSalesListItemEle = document.createElement("li");
    storeSalesListItemEle.innerHTML = `${store.cookiesSoldPerhour[j].hour} :  ${store.cookiesSoldPerhour[j].cookiesSold} cookies`;
    storeSalesListEle.appendChild(storeSalesListItemEle);
  }
  var storeSalesListItemEle = document.createElement("li");
  storeSalesListItemEle.innerHTML = `Total:  ${store.totalCookiesSold} cookies`;
  storeSalesListEle.appendChild(storeSalesListItemEle);
  storeSecEle.appendChild(storeSalesListEle);

  ele.appendChild(storeSecEle);
}

