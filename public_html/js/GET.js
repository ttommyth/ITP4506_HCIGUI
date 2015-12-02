var _GET = getQueryParams(document.location.search);
function getQueryParams(qs) {
    qs = qs.split("+").join(" ");
    var params = {},
            tokens,
            re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])]
                = decodeURIComponent(tokens[2]);
    }

    return params;
}
function GETParameters() {
    var paras = [];
    this.toString = function () {
        var str;
        var isFirst = true;
        for (var name in this.paras) {
            if(isFirst){
                str+="?";
            }else{
                str+="&";
            }
            str+=name+"="+this.paras[name];
        }
        return str;
    };
}