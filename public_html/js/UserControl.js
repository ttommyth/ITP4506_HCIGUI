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
};

User.find = function (paras) {return find(User, "json/User.json","users",paras);};

User.register = function(newUser){
    var users = JSON.parse(localStorage.getItem("json/User.json"));
    users["users"].push(newUser);
    localStorage.setItem("json/User.json", JSON.stringify(users));
};