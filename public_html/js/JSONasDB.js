function wherePara(key, operator, value){
    this.key = key;
    this.operator = operator;
    this.value = value;
}

//a is the column from database, b is a assql thing
function jasdbOperator(){
    function equals(a,b){
        return a==b;
    }
    function notEquals(a,b){
        return a!=b;
    }
    function greaterThan(a,b){
        return a>b;
    }
    function lessThan(a,b){
        return a<b;
    }
    function greaterThanOrEqual(a,b){
        return a>=b;
    }
    function lessThanOrEqual(a,b){
        return a<=b;
    }
    function like(a,b){
        return a.indexOf(b)>-1;
    }
}