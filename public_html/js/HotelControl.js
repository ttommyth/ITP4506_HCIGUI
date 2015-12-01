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
    this.img = [];
    this.roomTypes = [];
    this.comments=[];
    function RoomType() {//object
        this.qty="";
        this.name="";
        this.price="";
        this.description="";
        this.img=[];
    }
    function Comment(){
        this.username="";
        this.star="";
        this.content="";
    }

    function find(Query) {

    }
}
