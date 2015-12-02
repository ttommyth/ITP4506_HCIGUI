function WherePara(key, operator, value) {
    this.key = key;
    this.operator = operator;
    this.value = value;
}
;

//a is the column from database, b is a assql thing
//json as database Operator
//<editor-fold>
function jadbOP() {
}
;

jadbOP.equals = function (a, b) {
    return a == b;
};

jadbOP.notEquals = function (a, b) {
    return a != b;
};
jadbOP.greaterThan = function (a, b) {
    return a > b;
};
jadbOP.lessThan = function (a, b) {
    return a < b;
};
jadbOP.greaterThanOrEqual = function (a, b) {
    return a >= b;
};
jadbOP.lessThanOrEqual = function (a, b) {
    return a <= b;
};
jadbOP.like = function (a, b) {
    return a.indexOf(b) > -1;
};
jadbOP.all = function(a,b){
    return true;
}
//</editor-fold>

//the basic find method
//<editor-fold>
/** old find
 function find(targetObject,url,table,paras) {
 if (paras == null)
 paras = [];
 
 var results = new Array();
 $.ajax({
 url: ""+url,
 dataType: 'json',
 async: false,
 success: function (jsons) {
 $.each(jsons[table], function (i, row) {
 $.each(paras, function (j, para) {
 if (para.operator(row[para.key], para.value)) {
 if (j != paras.length - 1) {//if is last element
 return true;//continue
 }
 } else {
 return false;//break
 }
 var tar = new targetObject();
 tar.loadJSON(row);
 results.push(tar);
 });
 });
 }
 });
 return results;
 }
 **/
function find(targetObject, url, table, paras) {
    if (paras == null)
        paras = [];

    var results = new Array();
    var jsons = JSON.parse(localStorage.getItem(url));
    $.each(jsons[table], function (i, row) {
        $.each(paras, function (j, para) {
            if (para.operator(row[para.key], para.value)) {
                if (j != paras.length - 1) {//if is last element
                    return true;//continue
                }
            } else {
                return false;//break
            }
            var tar = new targetObject();
            tar.loadJSON(row);
            results.push(tar);
        });
    });

    return results;
}
//</editor-fold>

//the basic loadJSON method for the virual Database object
//<editor-fold>
function loadJSON(targetObject, jsonObject) {
    for (var name in jsonObject) {
        if (typeof targetObject[name] == "function") {
            targetObject[name].loadJSON(jsonObject[name]);
        } else {
            targetObject[name] = jsonObject[name];
        }
    }
}
;
//</editor-fold>