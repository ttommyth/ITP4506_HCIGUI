$.ajax({
    url: 'js/JSONasDB.js',
    dataType: 'script',
    async: false
});
function Flight(){//object
    this.flight="";
    this.fromCity="";
    this.fromAirport="";
    this.toCity="";
    this.toAirport="";
    this.duration="";
    this.takeoffTime="";
    this.companyName="";
    this.tax="";
    this.img=[];
    this.seatTypes = [];
    this.comments=[];
    function SeatType(){//object
        this.name="";
        this.price="";
        this.avaSeat="";
    }
    function Comment(){//object
        this.username="";
        this.star="";
        this.content="";
    }
    
    this.loadJSON = function (jsonObject) {return loadJSON(this, jsonObject);};
}
Flight.find = function (paras) {return find(Flight, "json/Flight.json","Flight",paras);};
