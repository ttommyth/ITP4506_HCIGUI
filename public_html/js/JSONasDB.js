function WherePara(key, operator, value){
    this.key = key;
    this.operator = operator;
    this.value = value;
};

//a is the column from database, b is a assql thing
//json as database Operator
function jadbOP(){
};

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