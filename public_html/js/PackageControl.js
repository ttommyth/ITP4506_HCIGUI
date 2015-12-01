$.ajax({
    url: 'js/JSONasDB.js',
    dataType: 'script',
    async: false
});
function Package(){//object
    this.name="";
    this.description="";
    this.price="";
    this.packageID="";
    this.hotelID="";
    this.flightID="";
    this.loadJSON = function (jsonObject) {return loadJSON(this, jsonObject);};
}