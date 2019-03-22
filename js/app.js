'use strict';

function Store(name, id, avgCookiesPerCustomers, startHour, endHour, minHourlyCustomers, maxHourlyCustomers) {
  this.name = name;
  this.id = id;
  this.avgCookiesPerCustomers = avgCookiesPerCustomers;
  this.startHour = startHour;
  this.endHour = endHour;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.daySaleDetails = {};
}

Store.prototype.getRandonNoOfCust = function(minHourlyCustomers, maxHourlyCustomers) {
  //Source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  return Math.floor(Math.random() * (maxHourlyCustomers - minHourlyCustomers + 1)) + minHourlyCustomers; //The maximum is inclusive and the minimum is inclusive
};

Store.prototype.generateCookiesSoldPerhour = function() {
  var rdNoOfCust = this.getRandonNoOfCust(this.minHourlyCustomers, this.maxHourlyCustomers);
  return {
    noOfCust : rdNoOfCust,
    cookiesSold : Math.floor( this.avgCookiesPerCustomers * rdNoOfCust)
  };
};

Store.prototype.generateDaySaleDetails= function() {
  var hourlySales = [];
  var totalCookiesSoldPerDay = 0;
  for(var i = this.startHour; i <= this.endHour; i++) {
    var cookiesSoldObj= this.generateCookiesSoldPerhour();
    var saleOfHour = new HourSale(i, cookiesSoldObj.noOfCust, cookiesSoldObj.cookiesSold);
    totalCookiesSoldPerDay += saleOfHour.cookiesSold;
    hourlySales.push(saleOfHour);
  }
  this.daySaleDetails = new DaySale(hourlySales, totalCookiesSoldPerDay);
};

function HourSale(hour, noOfCust, cookiesSold){
  this.hour = hour;
  this.noOfCust = noOfCust;
  this.cookiesSold = cookiesSold;
  this.hourInAmPm = format24to12(hour);
}

function DaySale(hourlySales, totalCookiesSold){
  this.totalCookiesSold = totalCookiesSold;
  this.hourlySales = hourlySales;
}

/* Utility Functions*/

function format24to12(timein24){
  var timeIn12 = (timein24 > 12) ? (timein24 - 12) : timein24;
  var timeAmPmStr = (timein24 >= 12) ? 'pm' : 'am';
  return timeIn12+timeAmPmStr;
}

/* HTMl Generation Functions */

function makeDaySaleTable(daySaleObj){
  var tblDaySale = document.createElement('table');
  tblDaySale.innerHTML = `<thead>
                              <th>Time</th>
                              <th>Cookies Sold</th>
                            </thead>
                            <tbody>
                            </tbody>
                            <tfoot>
                            </tfoot>`;
  var tbodyEle = tblDaySale.getElementsByTagName('tbody')[0];
  var hourSaleRows = makeHourSaleRows(daySaleObj.hourlySales);
  for(var i = 0; i < hourSaleRows.length; i++){
    tbodyEle.appendChild(hourSaleRows[i]);
  }

  var tfootEle = tblDaySale.getElementsByTagName('tfoot')[0];
  tfootEle.innerHTML = `
  <tr> 
    <th>Total </th>
    <th>${daySaleObj.totalCookiesSold}</th>
  </tr>`;
  return tblDaySale;
}

function makeHourSaleRows(aryHourSales){
  var rows = [];
  for(var i=0; i < aryHourSales.length; i++){
    var trEleSale = document.createElement('tr');
    var cols = makeCols(aryHourSales[i]);
    for(var j = 0; j < cols.length; j++){
      trEleSale.appendChild(cols[j]);
    }
    rows.push(trEleSale);
  }
  return rows;
}

function makeCols(hourSaleObj){
  var cols = [];
  var tdEleSaleCol1 = document.createElement('td');
  tdEleSaleCol1.innerHTML = hourSaleObj.hourInAmPm;

  var tdEleSaleCol2 = document.createElement('td');
  tdEleSaleCol2.innerHTML = hourSaleObj.cookiesSold;
  cols.push(tdEleSaleCol1, tdEleSaleCol2);

  return cols;
}

function generateRandomStoreSales(storesAry){
  for(var i=0; i < storesAry.length; i++){
    var store = storesAry[i];
    store.generateDaySaleDetails();
  }
}

function renderStoreDaySales(storesAry){
  console.log('stores', storesAry);
  var ele = document.getElementById('allStoreDialySalesDetails');
  ele.innerHTML = '<h1>Dialy Sales Details- All Stores</h1>';
  for(var i=0; i < storesAry.length; i++){
    var store = storesAry[i];
    var storeSecEle = document.createElement('section');
    storeSecEle.innerHTML = `<h2> ${store.name} </h2>`;
    storeSecEle.id = store.id;

    storeSecEle.appendChild(makeDaySaleTable(store.daySaleDetails));

    ele.appendChild(storeSecEle);
  }
}

var storeForm =  document.getElementById('store_form');
function storeFormData(event){
  event.preventDefault();
  var name = event.target.storeName.value;
  var sid = event.target.storeId.value;
  var avgCust = parseInt(event.target.avgCustomers.value);
  var minCust = parseInt(event.target.minCustomers.value);
  var maxCust = parseInt(event.target.maxCustomers.value);
  var startHour = parseInt(event.target.startHour.value);
  var endHour = parseInt(event.target.endHour.value);

  var newStore = new Store(name, sid, avgCust, startHour, endHour, minCust, maxCust);
  newStore.generateDaySaleDetails();
  stores.push(newStore);

  renderStoreDaySales(stores);
  createStoresSummaryTable(stores);
  storeForm.reset();
}

var allStoreSalesSummary_table = document.getElementById('allStoreSalesSummary');
function createStoresSummaryTable(storesAry) {
  allStoreSalesSummary_table.innerHTML = '';
  var row;
  var allStoreTotal = 0;
  for (var i = 0; i < storesAry.length; i++) {
    row = document.createElement('tr');
    row.innerHTML = '<td>' + storesAry[i].name + '</td>' +
      '<td>' + storesAry[i].id + '</td>' +
      '<td>' + storesAry[i].avgCookiesPerCustomers + '</td>' +
      '<td>' + storesAry[i].startHour + '</td>' +
      '<td>' + storesAry[i].endHour + '</td>' +
      '<td>' + storesAry[i].minHourlyCustomers + '</td>' +
      '<td>' + storesAry[i].maxHourlyCustomers + '</td>' +
      '<td>' + storesAry[i].daySaleDetails.totalCookiesSold + '</td>' ;
    allStoreSalesSummary_table.appendChild(row);
    allStoreTotal += storesAry[i].daySaleDetails.totalCookiesSold;
  }
  var tfooter = allStoreSalesSummary_table.parentNode.getElementsByTagName('tfoot');
  tfooter[0].innerHTML = '';
  row = document.createElement('tr');
  row.innerHTML = `<th colspan='7'>All Stores Total Sales</th> <td> ${allStoreTotal}</th>`;
  tfooter[0].appendChild(row);
  allStoreSalesSummary_table.parentNode.append(tfooter[0]);
}

storeForm.addEventListener('submit', storeFormData);

var pike = new Store('1st and Pike', 'storeId1', 6.3, 6, 20, 23, 65);
var stores = [pike];
generateRandomStoreSales(stores);
renderStoreDaySales(stores);
createStoresSummaryTable(stores);

