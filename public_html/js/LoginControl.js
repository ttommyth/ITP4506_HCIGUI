$.ajax({
    url: 'js/JSONasDB.js',
    dataType: 'script',
    async: false
});
$.ajax({
    url: 'js/UserControl.js',
    dataType: 'script',
    async: false
});
$.ajax({
    url: 'js/CookieControl.js',
    dataType: 'script',
    async: false
});
//return the user
function login(username, password){
    var paras = [new WherePara("username",jadbOP.equals, username),new WherePara("password", jadbOP.equals, password)];
    var user = User.find(paras)[0];
    if(typeof user !== "undefined"){
        setCookie("user",user, 1);
        console.log("username "+user["username"]+" stored in cookie");
    }
    return user;
};
function logout(){
    removeCookie("user");
}