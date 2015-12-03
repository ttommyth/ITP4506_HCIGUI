function padLeft(str,len){
    str = '' + str;
    return str.length >= len ? str : new Array(len - str.length + 1).join("0") + str;
}
function padRight(str, len) {
    str = '' + str;
    return str.length >= len ? str : str + new Array(len - str.length + 1).join("0");
}

function Time(time){
    this.hour = parseInt(time.split(":")[0]);
    this.min = parseInt(time.split(":")[1]);
    this.add = function(time){
        var tempHour= parseInt(time.split(":")[0]);
        var tempMin = parseInt(time.split(":")[1]);
        var roundUp = 0;
        roundUp = Math.floor((tempMin+this.min)/60);
        this.min = (tempMin+this.min)%60;
        this.hour = tempHour+this.hour+roundUp;
        return this.hour+":"+this.min;
    };
    this.toShortTime=function(){
        return padLeft(this.hour, 2)+"h"+padLeft(this.min, 2)+"m";
    };
    this.toSymbolTime=function(){
        return padLeft(this.hour, 2)+":"+padLeft(this.min, 2);
    };
};