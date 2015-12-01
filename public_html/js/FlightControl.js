$.ajax({
    url: 'js/JSONasDB.js',
    dataType: 'script',
    async: false
});
function Flight(){//object
    this.flight="";
    this.region="";
    this.companyName="";
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
