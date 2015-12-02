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
        return this.hour+"h"+this.min+"m";
    };
    this.toSymbolTime=function(){
        return this.hour+":"+this.min;
    };
};