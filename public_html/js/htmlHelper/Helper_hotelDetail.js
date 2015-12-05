function getRecommendedHotel(hotel){
    var markStr = "";
    if(hotel['star']=="0"){
        markStr="Poor";
    }else if(hotel['star']=="1"){
        markStr="Normal";
    }else if(hotel['star']=="2"){
        markStr="Not Bad";
    }else if(hotel['star']=="3"){
        markStr="Good";
    }else if(hotel['star']=="4"){
        markStr="Very Good";
    }else if(hotel['star']=="5"){
        markStr="Awesome";
    }
    var str = '                <!-- one hotel -->\
                <div class="rcHotel">\
                    <table>\
                    <tr>\
                        <th colspan="2">\
                    <a href="hotelDetail.html?hotelID='+hotel['hotelID']+'"><span class="recomName">'+hotel['hotelName']+'</span></a></th>\
                    </tr>\
                    <tr>\
                        <td><div class="recomIcon"><img src="img/hotel/'+hotel['img'][0]+'" class="rcImg"/>\
                    </div></td>\
                        <td><div class="recomDetail">\
                                <span class="glyphicon glyphicon-star '+(parseInt(hotel['star'])>=1?'':'hidden')+'"></span>\
                                <span class="glyphicon glyphicon-star '+(parseInt(hotel['star'])>=2?'':'hidden')+'"></span>\
                                <span class="glyphicon glyphicon-star '+(parseInt(hotel['star'])>=3?'':'hidden')+'"></span>\
                                <span class="glyphicon glyphicon-star '+(parseInt(hotel['star'])>=4?'':'hidden')+'"></span>\
                                <span class="glyphicon glyphicon-star '+(parseInt(hotel['star'])>=5?'':'hidden')+'"></span><br/>\
                            <span class="hotelAddress">'+hotel['region']+'</span><br/>\
                            <span class="hotelMark">'+markStr+'</span>\
                    </div></td>\
                    </tr>\
                    </table>\
                    <hr/>\
                </div>\
                <!-- -->';
    return str;
}

function getRoomTr(room){
    var str = '<tr>\
                    <form action="hotelPayment.html">\
                    <input type="hidden" name="room_name" value="'+room['name']+'">\
                    <td class="hotel_roomType-1_name">'+room['name']+'</td>\
                    <td class="hotel_roomType-1_occupancy">'+room['occupancy']+' guests</td>\
                    <td class="hotel_roomType-1_price">HKD '+room['price']+'</td>\
                    <td ><input class="form-control roomQty"  type="number" name="roomQty" value="1" required /></td>\
                    <td><button type="submit" id="RoombookBtn" class="btn btn-primary navbar-btn">Book</button></td>\
                    </form>\
                </tr>';
    return str;
}