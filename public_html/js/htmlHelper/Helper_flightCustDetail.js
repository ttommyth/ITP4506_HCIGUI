function getPassengerTabHeader(number, type) {
var str = '\
        <li role="presentation">\
            <a href="#Passenger-' + number + '" aria-controls="Passenger-' + number + '" role="tab" data-toggle="tab">Passenger ' + number + ' (' + type + ')</a>\
        </li>';
    return str;
}
function getPassengerTabBody(number, type) {
var str = '                         <div role="tabpanel" class="tab-pane fade" id="Passenger-'+number+'">\
                                    <form id="passenger-'+number+'" onsubmit="passengers['+number+']=$(this).serializeArray();return false;">\
                                    <div class="inline">\
                                        Title*<br/>\
                                        <div class="input-group">\
                                            <select class="form-control" name="passenger-'+number+'_title">\
                                                <option value="Mr">Mr.</option>\
                                                <option value="Mrs">Mrs.</option>\
                                                <optiom value="Ms">Ms.</option>\
                                            </select>\
                                        </div>\
                                    </div>\
                                    <div class="inline">\
                                        Full Name*<br/>\
                                        <div class="input-group">\
                                            <input type="text" name="passenger-'+number+'_fName" class="form-control" placeholder="Shown in Passport" required/>\
                                        </div>\
                                    </div>\
                                    <div class="inline">\
                                        Grender*<br/>\
                                        <div class="input-group">\
                                            <select class="form-control" name="passenger-'+number+'_gender">\
                                                <option value="m">M</option>\
                                                <option value="f">F</option>\
                                            </select>\
                                        </div>\
                                    </div>\
                                    <div class="inline">\
                                        Brithday*<br/>\
                                        <div class="input-group">\
                                            <input class="form-control" type="date" name="passenger-'+number+'_dob" required />\
                                        </div>\
                                    </div>\
                                    <div class="inline">\
                                        Passport ID*<br/>\
                                        <div class="input-group">\
                                            <input class="form-control" type="text" name="passenger-'+number+'_id" required />\
                                        </div>\
                                    </div>\
                                    <div class="inline">\
                                        Seat No*<br/>\
                                        <div class="input-group">\
                                            <input class="form-control" type="text" id="passenger-'+number+'_seatId" name="passenger-'+number+'_seatId" onclick="openFlightSeatModal('+number+')" required readonly/>\
                                        </div>\
                                    </div>\
  Launch demo modal\
</button>\
                                    </form>\
                                </div>';
    return str;
    
}