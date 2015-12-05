$.ajax({
    url: 'js/JSONasDB.js',
    dataType: 'script',
    async: false
});
function Hotel() {//object
    this.hotelID = "";
    this.hotelName = "";
    this.region = "";
    this.address = "";
    this.star = "";
    this.description="";
    this.img = [];
    this.roomTypes = [];
    this.comments=[];
    function RoomType() {//object
        this.qty="";
        this.name="";
        this.price="";
        this.description="";
        this.occupacy="";
        this.img=[];
    }
    function Comment(){
        this.username="";
        this.star="";
        this.content="";
    }


    this.loadJSON = function (jsonObject) {return loadJSON(this, jsonObject);};
}

Hotel.find = function (paras) {return find(Hotel, "json/Hotel.json","hotels",paras);};

Hotel.doComment= function(hotel, comment){
    var hotels = JSON.parse(localStorage.getItem("json/Hotel.json"));
    for(var name in hotels["hotels"]){
        if(hotels["hotels"][name]["hotelID"]==hotel["hotelID"]){
            hotels["hotels"][name]["comments"].push(comment);
        }
    }
    localStorage.setItem("json/Hotel.json", JSON.stringify(hotels));
};