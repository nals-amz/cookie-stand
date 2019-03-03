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
    for(var i = this.startHour; i <= this.endHour; i++) {
      var rdNoOfCust = this.getRandonNoOfCust();
      var saleOfHour = {
        hour: format24to12(i),
        noOfCust: rdNoOfCust,
        cookiesSold: Math.floor( this.avgCookiesPerCustomers * rdNoOfCust),
      }
      this.cookiesSoldPerhour.push(saleOfHour);
    }
    return this.cookiesSoldPerhour;
  }
}

function format24to12(timein24){
  timeIn12 = (timein24 > 12) ? (timein24 - 12) : timein24;
  timeAmPmStr = (timein24 >= 12) ? 'pm' : 'am';
  return timeIn12+timeAmPmStr;
}



var stores = [pike];
console.log(stores);
for(var i=0; i < stores.length; i++){
  var store = stores[i];
  store.generateCookiesSoldPerhour();
  var ele = document.getElementById('allStoreSales');

  var storeSecEle = document.createElement("section");
  storeSecEle.innerHTML = `<h2> ${store.name} </h2>`;
  storeSecEle.id = store.id;
  

  var storeSalesListEle = document.createElement("ul");
  for(var j=0; j < store.cookiesSoldPerhour.length; j++){
    console.log(i, store.cookiesSoldPerhour)
    var storeSalesListItemEle = document.createElement("li");
    storeSalesListItemEle.innerHTML = `${store.cookiesSoldPerhour[j].hour} :  ${store.cookiesSoldPerhour[j].cookiesSold} cookies`;
    storeSalesListEle.appendChild(storeSalesListItemEle);
  }
  storeSecEle.appendChild(storeSalesListEle);

  ele.appendChild(storeSecEle);
}

