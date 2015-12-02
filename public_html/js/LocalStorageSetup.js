function doSetup(url){
            $.ajax({
            url: ""+url,
            dataType: 'json',
            async: false,
            success: function (jsons) {
                localStorage.setItem(url, JSON.stringify(jsons));
            }
        });
}

function LocalStorgeSetup() {

    if (localStorage.getItem('json/Flight.json') == undefined) {
        doSetup("json/Flight.json");
    }
    if (localStorage.getItem('json/Hotel.json') == undefined) {
        doSetup("json/Hotel.json");
    }
    if (localStorage.getItem('json/Package.json') == undefined) {
        doSetup("json/Package.json");
    }
    if (localStorage.getItem('json/User.json') == undefined) {
        doSetup("json/User.json");
    }
}
function ForceLocalStorgeSetup() {
        doSetup("json/Flight.json");
        doSetup("json/Hotel.json");
        doSetup("json/Package.json");
        doSetup("json/User.json");
}