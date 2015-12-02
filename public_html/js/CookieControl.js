/**
 function setCookie(c_name, value, expiredays)
 {
 var exdate = new Date();
 exdate.setDate(exdate.getDate() + expiredays);
 document.cookie = c_name + "=" + escape(value) +
 ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
 }
 
 function getCookie(c_name)
 {
 if (document.cookie.length > 0)
 {
 c_start = document.cookie.indexOf(c_name + "=");
 if (c_start != -1)
 {
 c_start = c_start + c_name.length + 1;
 c_end = document.cookie.indexOf(";", c_start);
 if (c_end == -1)
 c_end = document.cookie.length;
 return unescape(document.cookie.substring(c_start, c_end));
 }
 }
 return "";
 }
 **/
function setCookie(c_name, value, expiredays)
{
    var fakeCookie = JSON.parse(localStorage.getItem('json/fakeCookie.json'));
    if(typeof fakeCookie != 'object'){
        fakeCookie = $.parseJSON("{}");
        console.log("not object");
    }
    if(fakeCookie==null){
        fakeCookie = $.parseJSON("{}");
    }
    fakeCookie[c_name]=value;
    localStorage.setItem('json/fakeCookie.json', JSON.stringify(fakeCookie));
}

function getCookie(c_name)
{
        var fakeCookie = JSON.parse(localStorage.getItem('json/fakeCookie.json'));
    if(typeof fakeCookie != 'object'){
        fakeCookie = $.parseJSON("{}");
        console.log("not object");
    }
    if(fakeCookie==null){
        fakeCookie = $.parseJSON("{}");
    }
    return fakeCookie[c_name];
}
function removeCookie(c_name)
{
    var fakeCookie = JSON.parse(localStorage.getItem('json/fakeCookie.json'));
    if(typeof fakeCookie != 'object'){
        fakeCookie = $.parseJSON("{}");
        console.log("not object");
    }
    if(fakeCookie==null){
        fakeCookie = $.parseJSON("{}");
    }
    fakeCookie[c_name]=undefined;
    localStorage.setItem('json/fakeCookie.json', JSON.stringify(fakeCookie));
}