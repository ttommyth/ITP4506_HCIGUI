$.ajax({
    url: 'js/JSONasDB.js',
    dataType: 'script',
    async: false
});

function User() {//object
    this.username = "";
    this.password = "";
    this.name = "";
    this.email = "";
    this.tel = "";
    this.creditCardNum = "";

    this.loadJSON = function (jsonObject) {return loadJSON(this, jsonObject);};
}
;

User.find = function (paras) {return find(User, "json/User.json","users",paras);};