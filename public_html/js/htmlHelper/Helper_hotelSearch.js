function getHotelDiv(hotel){
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
    var str ='<div class="hotels">\
                        <table>\
                        <tr>\
                            <td rowspan="2">\
                        <div class="hotleImg">\
                        <img src="img/hotel/'+hotel['img'][0]+'"/>\
                        </div>\
                        </td>\
                        <td>\
                        <div>\
                            <span class="hotelNamelbl">'+hotel['hotelName']+'</span><br>\
                            <div class="hotelsRing">\
                                <span class="glyphicon glyphicon-star '+(parseInt(hotel['star'])>=1?'':'hidden')+'"></span>\
                                <span class="glyphicon glyphicon-star '+(parseInt(hotel['star'])>=2?'':'hidden')+'"></span>\
                                <span class="glyphicon glyphicon-star '+(parseInt(hotel['star'])>=3?'':'hidden')+'"></span>\
                                <span class="glyphicon glyphicon-star '+(parseInt(hotel['star'])>=4?'':'hidden')+'"></span>\
                                <span class="glyphicon glyphicon-star '+(parseInt(hotel['star'])>=5?'':'hidden')+'"></span>\
                            </div>\
                            <a href="" class="hotelregion">'+hotel['region']+'</a>\
                        </div>\
                        </td>\
                        <td>\
                            <span class="score">'+markStr+' <span class="sMark">'+(hotel['star'])+'</span></span>\
                            <button type="button" class="btn btn-primary navbar-btn" onclick="window.location.href = \'hotelDetail.html?hotelID='+hotel['hotelID']+'\'">\
                More Detail</button>\
                        </td>\
                        </tr>\
                        <tr>\
                            <td colspan="2">\
                                <div class="hotelsRoom">\
                                    <div class="panel-group" id="accordion_'+hotel['hotelID']+'" role="tablist" aria-multiselectable="true">\
                                      <div class="panel panel-default">\
                                        <div class="panel-heading" role="tab" id="headingOne_'+hotel['hotelID']+'">\
                                          <h4 class="panel-title">\
                                            <a role="button" data-toggle="collapse" data-parent="#accordion_'+hotel['hotelID']+'" href="#collapseOne_'+hotel['hotelID']+'" >\
                                                <div class="roomName">'+hotel['roomTypes'][0]['name']+' Room</div>\
                                                <div class="roomPrice">HKD <span class="hotelsPrice">'+hotel['roomTypes'][0]['price']+'</span></div>\
                                            </a>\
                                          </h4>\
                                        </div>\
                                        <div id="collapseOne_'+hotel['hotelID']+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">\
                                          <div class="panel-body">\
                                              <table class="roomTable">\
                                                  <tr>\
                                                      <td>Discription</td>\
                                                  </tr>\
                                                  <tr>\
                                                      <td><span class="roomDis">'+hotel['roomTypes'][0]['description']+'\
                                                              </span></td>\
                                                  </tr>\
                                              </table>\
                                          </div>\
                                        </div>\
                                      </div>\
                                    </div>\
                                </div>\
                            </td>\
                        </tr>\
                        </table>\
                        <hr class="hotelHr"/>\
                    </div>';
    return str;
}