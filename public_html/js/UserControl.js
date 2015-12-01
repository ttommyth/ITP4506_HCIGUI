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
    
    this.loadJSON = function (jsonObject) {
        for (var name in this) {
            this[name] = jsonObject[name];
        }
    };
};

User.find = new function (paras) {
    if(paras==null)
        paras=[];
    
    var result = [];
    $.getJSON("json/User.json", function (result) {
        $.each(result, function (i, user) {
            $.each(paras, function (j, para) {
                if (para.operator(user[para.key], para.value)) {
                    if (j != paras.length - 1) {//if is last element
                        return true;//continue
                    }
                } else {
                    return false;//break
                }
                var u = new User();
                u.loadJSON(i);
                result.push(u);
            });
        });
    });
    return result;
};