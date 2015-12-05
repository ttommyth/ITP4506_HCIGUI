function getPassengerTabHeader(number, type) {
var str = '\
        <li role="presentation">\
            <a href="#Passenger-' + number + '" aria-controls="Passenger-' + number + '" role="tab" data-toggle="tab">Passenger ' + number + ' (' + type + ')</a>\
        </li>';
    return str;
}
function getPassengerTabBody(number, type) {
var str = '                         <div role="tabpanel" class="tab-pane fade" id="Passenger-'+number+'">\
                                    <form id="passenger-'+number+'_form" onsubmit="saveFormAsPassenger('+number+');return false;">\
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
                                            <input class="form-control" type="text" name="passenger-'+number+'_id" placeholder="e.g. Y11111111" required />\
                                        </div>\
                                    </div>\
                                    <div class="inline">\
                                        Departing Flight Seat No*<br/>\
                                        <div class="input-group">\
                                            <input class="form-control btn readonly" tabindex="-1" placeholder="Click here to select seat" type="text" id="passenger-'+number+'_toSeatId" name="passenger-'+number+'_toSeatId" onclick="openFlightSeatModal(\'toSeatId\','+number+');" required/>\
                                      </div>\
                                    </div>\
                                    <div class="inline">\
                                        Return Flight Seat No*<br/>\
                                        <div class="input-group">\
                                            <input class="form-control btn readonly" tabindex="-1" placeholder="Click here to select seat" type="text" id="passenger-'+number+'_backSeatId" name="passenger-'+number+'_backSeatId" onclick="openFlightSeatModal(\'backSeatId\','+number+');" required/>\
                                      </div>\
                                    </div>\
                                    <input id="passenger-'+number+'_submit" type="submit" style="visibility: hidden" value="submit"/>\
                                    </form>\
                                </div>';
    return str;
    
}