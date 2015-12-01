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


function login(username, password){
    var paras = [new WherePara("userName",jadbOP.equal, username),new WherePara("password", jadbOP.equal, password)];
    return User.find(paras);
};