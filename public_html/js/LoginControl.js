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

//return the user
function login(username, password){
    var paras = [new WherePara("username",jadbOP.equals, username),new WherePara("password", jadbOP.equals, password)];
    return User.find(paras)[0];
};