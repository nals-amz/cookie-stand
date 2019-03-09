'use strict'

var Store = function(name, id, avgCookiesPerCustomers, startHour, endHour, minHourlyCustomers, maxHourlyCustomers) {
  this.name  = name;
  this.id  = id;
  this.avgCookiesPerCustomers  = avgCookiesPerCustomers;
  this.startHour  = startHour;
  this.endHour  = endHour;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.daySaleDetails = {};
}

Store.prototype.getRandonNoOfCust = function(minHourlyCustomers, maxHourlyCustomers) {
  //Source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  return Math.floor(Math.random() * (maxHourlyCustomers - minHourlyCustomers + 1)) + minHourlyCustomers; //The maximum is inclusive and the minimum is inclusive
}

Store.prototype.generateCookiesSoldPerhour = function() {
  var rdNoOfCust = this.getRandonNoOfCust(this.minHourlyCustomers, this.maxHourlyCustomers);
  return { 
    noOfCust : rdNoOfCust, 
    cookiesSold : Math.floor( this.avgCookiesPerCustomers * rdNoOfCust)
  };
}

Store.prototype.generateDaySaleDetails= function() {
  var hourlySales = [];
  var totalCookiesSoldPerDay = 0;
  for(var i = this.startHour; i <= this.endHour; i++) {
    var cookiesSoldObj= this.generateCookiesSoldPerhour();
    var saleOfHour = new HourSale(i, cookiesSoldObj.noOfCust,  cookiesSoldObj.cookiesSold);     
    totalCookiesSoldPerDay += saleOfHour.cookiesSold;
    hourlySales.push(saleOfHour);
  }
  this.daySaleDetails = new DaySale(hourlySales, totalCookiesSoldPerDay);
}

var HourSale = function(hour, noOfCust, cookiesSold){
  this.hour = hour;
  this.noOfCust = noOfCust;
  this.cookiesSold = cookiesSold;
  this.hourinAmPm = format24to12(hour)
}

var DaySale = function(hourlySales, totalCookiesSold){
  this.totalCookiesSold = totalCookiesSold;
  this.hourlySales = hourlySales;
}


function format24to12(timein24){
  var timeIn12 = (timein24 > 12) ? (timein24 - 12) : timein24;
  var timeAmPmStr = (timein24 >= 12) ? 'pm' : 'am';
  return timeIn12+timeAmPmStr;
}

var pike = new Store('1st and Pike', 'storeId1', 6.3, 6, 20, 23, 65);
var seaTacAirport = new Store('SeaTac Airport', 'storeId2', 1.2, 6, 20, 3, 24);
var seattleCenter = new Store('1st and Pike', 'storeId3', 3.7, 6, 20, 11, 38);
var capitolHill = new Store('Capitol Hill', 'storeId4', 2.3, 6, 20, 20, 38);
var alki = new Store('Alki', 'storeId5', 4.6, 6, 20, 2, 16);

var stores = [pike, seaTacAirport, capitolHill, seattleCenter, alki];
console.log('stores', stores);
for(var i=0; i < stores.length; i++){
  var store = stores[i];
  store.generateDaySaleDetails();
  var ele = document.getElementById('allStoreSales');
  var storeSecEle = document.createElement("section");
  storeSecEle.innerHTML = `<h2> ${store.name} </h2>`;
  storeSecEle.id = store.id;

  var storeSalesListEle = document.createElement("ul");
  for(var j=0; j < store.daySaleDetails.hourlySales.length; j++){
    var storeSalesListItemEle = document.createElement("li");
    storeSalesListItemEle.innerHTML = `${store.daySaleDetails.hourlySales[j].hourinAmPm} :  ${store.daySaleDetails.hourlySales[j].cookiesSold} cookies`;
    storeSalesListEle.appendChild(storeSalesListItemEle);
  }
  var storeSalesListItemEle = document.createElement("li");
  storeSalesListItemEle.innerHTML = `Total:  ${store.daySaleDetails.totalCookiesSold} cookies`;
  storeSalesListEle.appendChild(storeSalesListItemEle);
  storeSecEle.appendChild(storeSalesListEle);

  ele.appendChild(storeSecEle);
}

