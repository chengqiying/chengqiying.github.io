
$(document).ready(function(){
  /*menu---------------------------------*/
  $('#menu-friends').click(function(){
    $('#friends-title').fadeIn(200);
    $('#member-add').fadeIn(200);
    $('#member-add-click').fadeIn(200);
    $('#channel-title').fadeOut(50);
    $('#me-title').fadeOut(50);
    $('#tips-title').fadeOut(50);
    $('#tips-search').fadeOut(50);
    $('#tips-add').fadeOut(50);
    $('#tips-search-click').fadeOut(50);
    $('#tips-add-click').fadeOut(50);
    $('#tips-one-full-click').fadeOut(50);
    $('#tips-one-edit-click').fadeOut(50);
    $('#tips-one-forward-click').fadeOut(50);
    $('#forward-click').fadeOut(50);
    $('#edit-click').fadeOut(50);
    
    $('#channel').fadeOut(400);
    $('#me').fadeOut(400);
    $('#tips').fadeOut(400);
    $('#friends').show(400);
    

    $('#menu-friends-svg path').css({fill: "#BDE9F4"}, 200);
    $('#menu-channels-svg circle').css({fill: "#CECECE"}, 200);
    $('#menu-me-svg path').css({fill: "#CECECE"}, 200);
    $('#menu-tips-svg path').css({fill: "#CECECE"}, 200);
    $('#menu-tips-svg circle').css({stroke: "#CECECE"}, 200);

    $('#menu-friends .menu-text').css({color: "#76cee5"}, 200);
    $('#menu-channels .menu-text').css({color: "#a5a5a5"}, 200);
    $('#menu-me .menu-text').css({color: "#a5a5a5"}, 200);
    $('#menu-tips .menu-text').css({color: "#a5a5a5"}, 200);

  });

  $('#menu-channels').click(function(){
    $('#channel-title').fadeIn(200);
    $('#friends-title').fadeOut(50);
    $('#member-add-click').fadeOut(50);
    $('#me-title').fadeOut(50);
    $('#tips-title').fadeOut(50);
    $('#tips-search').fadeOut(50);
    $('#tips-add').fadeOut(50);
    $('#tips-search-click').fadeOut(50);
    $('#tips-add-click').fadeOut(50);
    $('#tips-one-full-click').fadeOut(50);
    $('#tips-one-edit-click').fadeOut(50);
    $('#tips-one-forward-click').fadeOut(50);
    $('#forward-click').fadeOut(50);
    $('#edit-click').fadeOut(50);

    $('#me').fadeOut(400);
    $('#tips').fadeOut(400);
    $('#friends').fadeOut(400);
    $('#channel').show(400);

    $('#menu-channels-svg circle').css({fill: "#BDE9F4"}, 200);
    $('#menu-friends-svg path').css({fill: "#CECECE"}, 200);
    $('#menu-tips-svg path').css({fill: "#CECECE"}, 200);
    $('#menu-tips-svg circle').css({stroke: "#CECECE"}, 200);
    $('#menu-me-svg path').css({fill: "#CECECE"}, 200);

    $('#menu-channels .menu-text').css({color: "#76cee5"}, 200);
    $('#menu-friends .menu-text').css({color: "#a5a5a5"}, 200);
    $('#menu-me .menu-text').css({color: "#a5a5a5"}, 200);
    $('#menu-tips .menu-text').css({color: "#a5a5a5"}, 200);

    
  });

  $('#menu-me').click(function(){
    $('#me-title').fadeIn(200);
    $('#friends-title').fadeOut(50);
    $('#member-add-click').fadeOut(200);
    $('#channel-title').fadeOut(50);
    $('#tips-title').fadeOut(50);
    $('#tips-search').fadeOut(50);
    $('#tips-add').fadeOut(50);
    $('#tips-search-click').fadeOut(50);
    $('#tips-add-click').fadeOut(50);
    $('#tips-one-full-click').fadeOut(50);
    $('#tips-one-edit-click').fadeOut(50);
    $('#tips-one-forward-click').fadeOut(50);
    $('#forward-click').fadeOut(50);
    $('#edit-click').fadeOut(50);

    $('#channel').fadeOut(400);
    $('#tips').fadeOut(400);
    $('#friends').fadeOut(400);
    $('#me').show(400);

    $('#menu-me-svg path').css({fill: "#BDE9F4"}, 200);
    $('#menu-friends-svg path').css({fill: "#CECECE"}, 200);
    $('#menu-tips-svg path').css({fill: "#CECECE"}, 200);
    $('#menu-tips-svg circle').css({stroke: "#CECECE"}, 200);
    $('#menu-channels-svg circle').css({fill: "#CECECE"}, 200);

    $('#menu-me .menu-text').css({color: "#76cee5"}, 200);
    $('#menu-friends .menu-text').css({color: "#a5a5a5"}, 200);
    $('#menu-channels .menu-text').css({color: "#a5a5a5"}, 200);
    $('#menu-tips .menu-text').css({color: "#a5a5a5"}, 200);
  });

  $('#menu-tips').click(function(){
    $('#tips-title').fadeIn(200);
    $('#tips-add').fadeIn(200);
    $('#tips-search').fadeIn(200);
    $('#tips-add-click').fadeIn(200);
    $('#tips-search-click').fadeIn(200);
    $('#forward-click').fadeIn(200);
    $('#edit-click').fadeIn(200);
    $('#friends-title').fadeOut(50);
    $('#member-add-click').fadeOut(50);
    $('#channel-title').fadeOut(50);
    $('#me-title').fadeOut(50);

    $('#channel').fadeOut(50);
    $('#me').fadeOut(50);
    $('#friends').fadeOut(50);
    $('#tips').show(400);

    $('#menu-tips-svg path').css({fill: "#BDE9F4"}, 200);
    $('#menu-tips-svg circle').css({stroke: "#BDE9F4"}, 200);
    $('#menu-friends-svg path').css({fill: "#CECECE"}, 200);
    $('#menu-me-svg path').css({fill: "#CECECE"}, 200);
    $('#menu-channels-svg circle').css({fill: "#CECECE"}, 200);

    $('#menu-tips .menu-text').css({color: "#76cee5"}, 200);
    $('#menu-friends .menu-text').css({color: "#a5a5a5"}, 200);
    $('#menu-channels .menu-text').css({color: "#a5a5a5"}, 200);
    $('#menu-me .menu-text').css({color: "#a5a5a5"}, 200);

  });

  /*channel--------------------------*/
  /*see more/back*/
  $('#seemore').click(function(){
    setTimeout(function(){
    move('#channel-topic-more')
      .to(0, -498)
      .set('opacity', 1)
      .duration('0.5s')
      .end(); 
    move('#channel-topic-morning')
      .set('opacity', 0)
      .duration('0.4s')
      .end();
    }, 300); 
    move('#seemore-icon')
      .scale('0.85')
      .duration('0.3s')
      .end();
    move('#seemore-text')
      .scale('0.85')
      .duration('0.3s')
      .end();
    move('#seeback-icon')
      .scale('1')
      .duration('0.5s')
      .end();
    move('#seeback-text')
      .scale('1')
      .duration('0.5s')
      .end();
  });

  $('#seeback').click(function(){
    setTimeout(function(){
    move('#channel-topic-more')
      .to(0, 0)
      .set('opacity', 1)
      .duration('0.5s')
      .end(); 
    move('#channel-topic-morning')
      .set('opacity', 1)
      .duration('0.4s')
      .end();
    }, 300);
    move('#seemore-icon')
      .scale('1')
      .duration('0.3s')
      .end();
    move('#seemore-text')
      .scale('1')
      .duration('0.3s')
      .end();
    move('#seeback-icon')
      .scale('0.85')
      .duration('0.5s')
      .end();
    move('#seeback-text')
      .scale('0.85')
      .duration('0.5s')
      .end();
  });

  /*to have coffee*/
  _i=false;
  $('#coffee').click(function(){
    $('#coffee').addClass("topic-clickcolor");
    setTimeout(function(){ 
    if(!_i){
      move('#havecoffee')
        .to(-320, 0)
        .set('opacity', 1)
        .duration('0.3s')
        .ease('in')
        .end();
    } 
    else if (_i){
      move('#havecoffee')
        .to(-320, 240)
        .set('opacity', 1)
        .duration('0.3s')
        .ease('in')
        .end();
    }
    
    move('#channel')
      .set('opacity', 0)
      .duration('0.3s')
      .delay('0.3s')
      .end();
    move('#channel-title')
      .set('opacity', 0)
      .duration('0.2s')
      .end(); 
    $('.menu').fadeOut(50);
    move('#coffee-title')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    $('#coffee-back-click').fadeIn(200);
    $('#coffee-add-click').fadeIn(200);
    move('#coffee-back')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    move('#coffee-add')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
  }, 300);
  });

  /*to have coffee back*/  
  $('#coffee-back-click').click(function(){
    setTimeout(function(){
    $('#coffee').removeClass("topic-clickcolor");
    if(!_i){
      move('#havecoffee')
        .to(0, 0)
        .set('opacity', 0)
        .duration('0.3s')
        .end();
    } 
    else if (_i){
      move('#havecoffee')
        .to(0, 240)
        .set('opacity', 0)
        .duration('0.3s')
        .end();
    }
    $('.menu').fadeIn(200);
    move('#channel')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2')
      .end();
    move('#channel-title')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    $('#coffee-back-click').fadeOut(50);
    $('#coffee-add-click').fadeOut(50); 
    move('#coffee-add')
      .set('opacity', 0)
      .duration('0.2s')
      .end();  
    }, 200);
    move('#coffee-back')
      .set('opacity', 0)
      .duration('0.2s')
      .end();  
    move('#coffee-title')
      .set('opacity', 0)
      .duration('0.2s')
      .end();  
  });

  /*add coffee*/
  $('#coffee-add-click').click(function(){
    setTimeout(function(){
    move('#inputcoffee')
      .to(-320, 0)
      .set('opacity', 1)
      .duration('0.3s')
      .ease('in')
      .end();
    move('#coffee-cancel')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    $('#coffee-cancel-click').fadeIn(200);
    $('#coffee-add-click').fadeOut(50);
    $('#coffee-back-click').fadeOut(50);
    move('#havecoffee')
      .set('opacity', 0)
      .duration('0.3s')
      .delay('0.3s')
      .end();
    move('#coffee-back')
      .set('opacity', 0)
      .duration('0.2s')
      .end(); 
    }, 200); 
    move('#coffee-add')
      .set('opacity', 0)
      .duration('0.2s')
      .end(); 
  });

/*cancel coffeeinput*/
  $('#coffee-cancel-click').click(function(){
    setTimeout(function(){
    move('#inputcoffee')
      .to(0, 0)
      .set('opacity', 0)
      .duration('0.3s')
      .ease('in')
      .delay('0.3s')
      .end(); 
    move('#havecoffee')
      .set('opacity', 1)
      .duration('0.3s')
      .end();
    $('#coffee-cancel-click').fadeOut(50);
    $('#coffee-back-click').fadeIn(200);
    $('#coffee-add-click').fadeIn(200);
    move('#coffee-back')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    move('#coffee-add')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    }, 200);
    move('#coffee-cancel')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
  });

  /*done coffeeinput*/
  $('#coffee-done').click(function(){
    _i=true;
    move('#inputcoffee')
      .to(0, 0)
      .set('opacity', 0)
      .duration('0.3s')
      .ease('in')
      .delay('0.3s')
      .end(); 
    move('#coffee-cancel')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
    $('#coffee-cancel-click').fadeOut(50);
    $('#havecoffee').css({height: "498px"});
    move('#havecoffee')
      .to(-320, 240)
      .set('opacity', 1)
      .duration('0.3s')
      .end();
    move('#coffee-back')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    $('#coffee-back-click').fadeIn(200);
    $('#coffee-add-click').fadeIn(200);
    move('#coffee-add')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
      $('#inputcoffee h5').css({color: "#fff"});
      $('#coffee-done').addClass("done-color");
      move('#coffee-done')
      .scale('1.2')
      .duration('0.5s')
      .end();
  });



  /*input coffee/tea button*/
  c = false
  $('.button-coffee').click(function(){
    if (!c){
      $('.button-coffee h2').css({color: "#fff"});
      $('.button-coffee').addClass("button-coffee-color"); 
      c= true;
    }
    else if (c){
      $('.button-coffee h2').css({color: "#B6B7B7"});
      $('.button-coffee').removeClass("button-coffee-color"); 
      c= false;
    }
  });

  t = false
  $('.button-tea').click(function(){
    if (!t){
      $('.button-tea h2').css({color: "#fff"});
      $('.button-tea').addClass("button-tea-color"); 
      t= true;
    }
    else if (t){
      $('.button-tea h2').css({color: "#B6B7B7"});
      $('.button-tea').removeClass("button-tea-color"); 
      t= false;
    }
  });

  /*select time*/
  /*coffee*/
  $('#hour-number-coffee').click(function(){
    $('#hour-select-coffee').fadeIn(200);
    move('#hour-tick-coffee')
      .duration('0.05s')
      .scale('1')
      .end();
    move('#hour-cross-coffee')
      .duration('0.05s')
      .scale('1')
      .end();
  });
  $('#minu-number-coffee').click(function(){
    $('#minute-select-coffee').fadeIn(200);
    move('#minute-tick-coffee')
      .duration('0.05s')
      .scale('1')
      .end();
    move('#minute-cross-coffee')
      .duration('0.05s')
      .scale('1')
      .end();
  });

  $('#hour-tick-coffee').click(function(){
    setTimeout(function(){
      $('#hour-select-coffee').fadeOut(50); 
    }, 200);
    move('#hour-tick-coffee')
      .duration('0.2s')
      .scale('1.2')
      .end();
  });
  $('#hour-cross-coffee').click(function(){
    setTimeout(function(){
      $('#hour-select-coffee').fadeOut(50); 
    }, 200);
    move('#hour-cross-coffee')
      .duration('0.2s')
      .scale('1.2')
      .end();
  });
  $('#minute-tick-coffee').click(function(){
    setTimeout(function(){
      $('#minute-select-coffee').fadeOut(50); 
    }, 200);
    move('#minute-tick-coffee')
      .duration('0.2s')
      .scale('1.2')
      .end();
  });
  $('#minute-cross-coffee').click(function(){
    setTimeout(function(){
      $('#minute-select-coffee').fadeOut(50); 
    }, 200);
    move('#minute-cross-coffee')
      .duration('0.2s')
      .scale('1.2')
      .end();
  });

  /*detect time*/
    $('#timeroll-hour-coffee').scroll(function(){
            
      // Is this element visible onscreen?
      var a = $('#timeroll-hour-coffee').scrollTop();

      if(a < 45){
          document.getElementById("hour-number-coffee").innerHTML= "1";
      }
      else if(a > 44 && a <138){
          document.getElementById("hour-number-coffee").innerHTML= "2";
      }
      else if(a > 137 && a <231){
          document.getElementById("hour-number-coffee").innerHTML= "3";
      }
      else if(a > 230 && a <324){
          document.getElementById("hour-number-coffee").innerHTML= "4";
      }
      else if(a > 323 && a <417){
          document.getElementById("hour-number-coffee").innerHTML= "5";
      }
      else if(a > 416 && a <510){
          document.getElementById("hour-number-coffee").innerHTML= "6";
      }
      else if(a > 509 && a <603){
          document.getElementById("hour-number-coffee").innerHTML= "7";
      }
      else if(a > 602 && a <696){
          document.getElementById("hour-number-coffee").innerHTML= "8";
      }
      else if(a > 695 && a <789){
          document.getElementById("hour-number-coffee").innerHTML= "9";
      }
      else if(a > 788 && a <882){
          document.getElementById("hour-number-coffee").innerHTML= "10";
      }
      else if(a > 881 && a <975){
          document.getElementById("hour-number-coffee").innerHTML= "11";
      }
      else if(a > 974 && a <1068){
          document.getElementById("hour-number-coffee").innerHTML= "12";
      }
      else if(a > 1067 && a <1161){
          document.getElementById("hour-number-coffee").innerHTML= "13";
      }
      else if(a > 1067 && a <1161){
          document.getElementById("hour-number-coffee").innerHTML= "14";
      }
      else if(a > 1067 && a <1161){
          document.getElementById("hour-number-coffee").innerHTML= "15";
      }
      else if(a > 1160 && a <1254){
          document.getElementById("hour-number-coffee").innerHTML= "16";
      }
      else if(a > 1253 && a <1347){
          document.getElementById("hour-number-coffee").innerHTML= "17";
      }
      else if(a > 1346 && a <1440){
          document.getElementById("hour-number-coffee").innerHTML= "18";
      }
      else if(a > 1439 && a <1533){
          document.getElementById("hour-number-coffee").innerHTML= "19";
      }
      else if(a > 1532 && a <1626){
          document.getElementById("hour-number-coffee").innerHTML= "20";
      }
      else if(a > 1625 && a <1719){
          document.getElementById("hour-number-coffee").innerHTML= "21";
      }
      else if(a > 1718 && a <1812){
          document.getElementById("hour-number-coffee").innerHTML= "22";
      }
      else if(a > 1905 && a <1999){
          document.getElementById("hour-number-coffee").innerHTML= "23";
      }
      else if(a > 1998 && a <2092){
          document.getElementById("hour-number-coffee").innerHTML= "24";
      }
    });

    $('#timeroll-minute-coffee').scroll(function(){
            
      // Is this element visible onscreen?
      var b = $('#timeroll-minute-coffee').scrollTop();

      if(b < 45){
          document.getElementById("minu-number-coffee").innerHTML= "0";
      }
      else if(b > 44 && b <138){
          document.getElementById("minu-number-coffee").innerHTML= "5";
      }
      else if(b > 137 && b <231){
          document.getElementById("minu-number-coffee").innerHTML= "10";
      }
      else if(b > 230 && b <324){
          document.getElementById("minu-number-coffee").innerHTML= "15";
      }
      else if(b > 323 && b <417){
          document.getElementById("minu-number-coffee").innerHTML= "20";
      }
      else if(b > 416 && b <510){
          document.getElementById("minu-number-coffee").innerHTML= "25";
      }
      else if(b > 509 && b <603){
          document.getElementById("minu-number-coffee").innerHTML= "30";
      }
      else if(b > 602 && b <696){
          document.getElementById("minu-number-coffee").innerHTML= "35";
      }
      else if(b > 695 && b <789){
          document.getElementById("minu-number-coffee").innerHTML= "40";
      }
      else if(b > 788 && b <882){
          document.getElementById("minu-number-coffee").innerHTML= "45";
      }
      else if(b > 881 && b <975){
          document.getElementById("minu-number-coffee").innerHTML= "50";
      }
      else if(b > 974 && b <1068){
          document.getElementById("minu-number-coffee").innerHTML= "55";
      }
      else if(b > 1067 && b <1161){
          document.getElementById("minu-number-coffee").innerHTML= "60";
      }
    });
    
    /*getup time change*/
    $('#hour-number-getup').click(function(){
    $('#hour-select-getup').fadeIn(200);
    move('#hour-tick-getup')
      .duration('0.05s')
      .scale('1')
      .end();
    move('#hour-cross-getup')
      .duration('0.05s')
      .scale('1')
      .end();
  });
  $('#minu-number-getup').click(function(){
    $('#minute-select-getup').fadeIn(200);
    move('#minute-tick')
      .duration('0.05s')
      .scale('1')
      .end();
    move('#minute-cross-getup')
      .duration('0.05s')
      .scale('1')
      .end();
  });

  $('#hour-tick-getup').click(function(){
    setTimeout(function(){
      $('#hour-select-getup').fadeOut(50); 
    }, 200);
    move('#hour-tick-getup')
      .duration('0.2s')
      .scale('1.2')
      .end();
  });
  $('#hour-cross-getup').click(function(){
    setTimeout(function(){
      $('#hour-select-getup').fadeOut(50); 
    }, 200);
    move('#hour-cross-getup')
      .duration('0.2s')
      .scale('1.2')
      .end();
  });
  $('#minute-tick-getup').click(function(){
    setTimeout(function(){
      $('#minute-select-getup').fadeOut(50); 
    }, 200);
    move('#minute-tick-getup')
      .duration('0.2s')
      .scale('1.2')
      .end();
  });
  $('#minute-cross-getup').click(function(){
    setTimeout(function(){
      $('#minute-select-getup').fadeOut(50); 
    }, 200);
    move('#minute-cross-getup')
      .duration('0.2s')
      .scale('1.2')
      .end();
  });
    $('#timeroll-hour-getup').scroll(function(){
            
      // Is this element visible onscreen?
      var cc = $('#timeroll-hour-getup').scrollTop();

      if(cc < 45){
          document.getElementById("hour-number-getup").innerHTML= "1";
      }
      else if(cc > 44 && cc <138){
          document.getElementById("hour-number-getup").innerHTML= "2";
      }
      else if(cc > 137 && cc <231){
          document.getElementById("hour-number-getup").innerHTML= "3";
      }
      else if(cc > 230 && cc <324){
          document.getElementById("hour-number-getup").innerHTML= "4";
      }
      else if(cc > 323 && cc <417){
          document.getElementById("hour-number-getup").innerHTML= "5";
      }
      else if(cc > 416 && cc <510){
          document.getElementById("hour-number-getup").innerHTML= "6";
      }
      else if(cc > 509 && cc <603){
          document.getElementById("hour-number-getup").innerHTML= "7";
      }
      else if(cc > 602 && cc <696){
          document.getElementById("hour-number-getup").innerHTML= "8";
      }
      else if(cc > 695 && cc <789){
          document.getElementById("hour-number-getup").innerHTML= "9";
      }
      else if(cc > 788 && cc <882){
          document.getElementById("hour-number-getup").innerHTML= "10";
      }
      else if(cc > 881 && cc <975){
          document.getElementById("hour-number-getup").innerHTML= "11";
      }
      else if(cc > 974 && cc <1068){
          document.getElementById("hour-number-getup").innerHTML= "12";
      }
      else if(cc > 1067 && cc <1161){
          document.getElementById("hour-number-getup").innerHTML= "13";
      }
      else if(cc > 1067 && cc <1161){
          document.getElementById("hour-number-getup").innerHTML= "14";
      }
      else if(cc > 1067 && cc <1161){
          document.getElementById("hour-number-getup").innerHTML= "15";
      }
      else if(cc > 1160 && cc <1254){
          document.getElementById("hour-number-getup").innerHTML= "16";
      }
      else if(cc > 1253 && cc <1347){
          document.getElementById("hour-number-coffee").innerHTML= "17";
      }
      else if(cc > 1346 && cc <1440){
          document.getElementById("hour-number-getup").innerHTML= "18";
      }
      else if(cc > 1439 && cc <1533){
          document.getElementById("hour-number-getup").innerHTML= "19";
      }
      else if(cc > 1532 && cc <1626){
          document.getElementById("hour-number-coffee").innerHTML= "20";
      }
      else if(cc > 1625 && cc <1719){
          document.getElementById("hour-number-getup").innerHTML= "21";
      }
      else if(cc > 1718 && cc <1812){
          document.getElementById("hour-number-getup").innerHTML= "22";
      }
      else if(cc > 1905 && cc <1999){
          document.getElementById("hour-number-getup").innerHTML= "23";
      }
      else if(cc > 1998 && cc <2092){
          document.getElementById("hour-number-getup").innerHTML= "24";
      }
    });

    $('#timeroll-minute-getup').scroll(function(){
            
      // Is this element visible onscreen?
      var d = $('#timeroll-minute-getup').scrollTop();

      if(d < 45){
          document.getElementById("minu-number-getup").innerHTML= "0";
      }
      else if(d > 44 && d <138){
          document.getElementById("minu-number-getup").innerHTML= "5";
      }
      else if(d > 137 && d <231){
          document.getElementById("minu-number-getup").innerHTML= "10";
      }
      else if(d > 230 && d <324){
          document.getElementById("minu-number-getup").innerHTML= "15";
      }
      else if(d > 323 && d <417){
          document.getElementById("minu-number-getup").innerHTML= "20";
      }
      else if(d > 416 && d <510){
          document.getElementById("minu-number-getup").innerHTML= "25";
      }
      else if(d > 509 && d <603){
          document.getElementById("minu-number-getup").innerHTML= "30";
      }
      else if(d > 602 && d <696){
          document.getElementById("minu-number-getup").innerHTML= "35";
      }
      else if(d > 695 && d <789){
          document.getElementById("minu-number-getup").innerHTML= "40";
      }
      else if(d > 788 && d <882){
          document.getElementById("minu-number-getup").innerHTML= "45";
      }
      else if(d > 881 && d <975){
          document.getElementById("minu-number-coffee").innerHTML= "50";
      }
      else if(d > 974 && d <1068){
          document.getElementById("minu-number-getup").innerHTML= "55";
      }
      else if(d > 1067 && d <1161){
          document.getElementById("minu-number-getup").innerHTML= "60";
      }
    });

    
  /*select friends*/
  _estelle=false
  $('#coffee-share-button .estelle-button').click(function(){
    if(!_estelle){
      move('#coffee-share-button .estelle-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _estelle=true;
    }
    else if(_estelle) {
      move('#coffee-share-button .estelle-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _estelle=false;
    }
  });

  _stan=false
  $('#coffee-share-button .stan-button').click(function(){
    if(!_stan){
      move('#coffee-share-button .stan-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _stan=true;
    }
    else if(_stan) {
      move('#coffee-share-button .stan-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _stan=false;
    }
  });

  _zack=false
  $('#coffee-share-button .zack-button').click(function(){
    if(!_zack){
      move('#coffee-share-button .zack-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _zack=true;
    }
    else if(_zack) {
      move('#coffee-share-button .zack-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _zack=false;
    }
  });

  _grace=false
  $('#coffee-share-button .grace-button').click(function(){
    if(!_grace){
      move('#coffee-share-button .grace-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _grace=true;
    }
    else if(_grace) {
      move('#coffee-share-button .grace-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _grace=false;
    }
  });

  _david=false
  $('#coffee-share-button .david-button').click(function(){
    if(!_david){
      move('#coffee-share-button .david-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _david=true;
    }
    else if(_david) {
      move('#coffee-share-button .david-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _david=false;
    }
  });


  /* sleep well*/
  _h=false;
  $('#quality').click(function(){
    $('#quality').addClass("topic-clickcolor");
    setTimeout(function(){ 
    if(!_h){
      move('#sleepquality')
        .to(-320, 0)
        .set('opacity', 1)
        .duration('0.3s')
        .ease('in')
        .end();
    } 
    else if (_h){
      move('#sleepquality')
        .to(-320, 240)
        .set('opacity', 1)
        .duration('0.3s')
        .ease('in')
        .end();
    } 
    $('.menu').fadeOut(50);
    move('#channel')
      .set('opacity', 0)
      .duration('0.3s')
      .delay('0.3s')
      .end();
    move('#channel-title')
      .set('opacity', 0)
      .duration('0.2s')
      .end(); 
    move('#quality-title')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    $('#quality-back-click').fadeIn(200);
    $('#quality-add-click').fadeIn(200);
    move('#quality-back')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    move('#quality-add')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
  }, 300);
  });

  /*sleep quality back*/
  $('#quality-back-click').click(function(){
    setTimeout(function(){
    $('#quality').removeClass("topic-clickcolor");
    if(!_h){
      move('#sleepquality')
        .to(0, 0)
        .set('opacity', 0)
        .duration('0.3s')
        .end();
    } 
    else if (_h){
      move('#sleepquality')
        .to(0, 240)
        .set('opacity', 0)
        .duration('0.3s')
        .end();
    }
    $('.menu').fadeIn(300);
    move('#channel')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2')
      .end();
    move('#channel-title')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    $('#quality-back-click').fadeOut(50);
    $('#quality-add-click').fadeOut(50);
    move('#quality-add')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
    }, 200);
    move('#quality-back')
      .set('opacity', 0)
      .duration('0.2s')
      .end(); 
    move('#quality-title')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
  });

  /*add quality*/
  $('#quality-add-click').click(function(){
    setTimeout(function(){
    move('#input-quality')
      .to(-320, 0)
      .set('opacity', 1)
      .duration('0.3s')
      .ease('in')
      .end();
    move('#quality-cancel')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    $('#quality-cancel-click').fadeIn(200);
    $('#quality-back-click').fadeOut(50);
    $('#quality-add-click').fadeOut(50);
    move('#sleepquality')
      .set('opacity', 0)
      .duration('0.3s')
      .delay('0.3s')
      .end();
    move('#quality-back')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
    }, 200);
    move('#quality-add')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
  });  

  /*cancel sleep quality input*/
  $('#quality-cancel-click').click(function(){
    setTimeout(function(){
    move('#input-quality')
      .to(0, 0)
      .set('opacity', 0)
      .duration('0.3s')
      .ease('in')
      .delay('0.3s')
      .end(); 
    move('#sleepquality')
      .set('opacity', 1)
      .duration('0.3s')
      .end();
    $('#quality-cancel-click').fadeOut(50);
    $('#quality-add-click').fadeIn(200);
    $('#quality-back-click').fadeIn(200);
    move('#quality-back')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    move('#quality-add')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    }, 200);
    move('#quality-cancel')
      .set('opacity', 0)
      .duration('0.2s')
      .end(); 
  });

  /*done sleep qualtity input*/
  $('#quality-done').click(function(){
    _h=true;
    move('#input-quality')
      .to(0, 0)
      .set('opacity', 0)
      .duration('0.3s')
      .ease('in')
      .delay('0.3s')
      .end(); 
    move('#quality-cancel')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
    move('#sleepquality')
      .to(-320, 240)
      .set('opacity', 1)
      .duration('0.3s')
      .end();
    $('#sleepquality').css({height: "498px"});
    $('#quality-cancel-click').fadeOut(50);
    $('#quality-back-click').fadeIn(200);
    $('#quality-add-click').fadeIn(200);
    move('#quality-back')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    move('#quality-add')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    $('#input-quality h5').css({color: "#fff"});
    $('#quality-done').addClass("done-color");
    move('#quality-done')
    .scale('1.2')
    .duration('0.5s')
    .end();
  });

/*select quality*/
  _vp=false
  $('#verypoor').click(function(){
    if(!_vp){
      $('#verypoor').animate({width:"250px"}, {duration: 300});
      $('#poor').animate({width: "0"}, {duration: 50});
      $('#fair').animate({width: "0"}, {duration: 50});
      $('#good').animate({width: "0"}, {duration: 50});
      $('#verygood').animate({width: "0"}, {duration: 50});
      _vp=true;
    }
    else if(_vp) {
      $('#verypoor').animate({width:"50px"}, {duration: 500});
      $('#poor').animate({width: "50px"}, {duration: 50});
      $('#fair').animate({width: "50px"}, {duration: 50});
      $('#good').animate({width: "50px"}, {duration: 50});
      $('#verygood').animate({width: "50px"}, {duration: 50});
      _vp=false;
    }
  });

  _p=false
  $('#poor').click(function(){
    if(!_p){
      $('#poor').animate({width:"250px"}, {duration: 300});
      $('#verypoor').animate({width: "0"}, {duration: 50});
      $('#fair').animate({width: "0"}, {duration: 50});
      $('#good').animate({width: "0"}, {duration: 50});
      $('#verygood').animate({width: "0"}, {duration: 50});
      _p=true;
    }
    else if(_p) {
      $('#poor').animate({width:"50px"}, {duration: 500});
      $('#verypoor').animate({width: "50px"}, {duration: 50});
      $('#fair').animate({width: "50px"}, {duration: 50});
      $('#good').animate({width: "50px"}, {duration: 50});
      $('#verygood').animate({width: "50px"}, {duration: 50});
      _p=false;
    }
  });

  _f=false
  $('#fair').click(function(){
    if(!_f){
      $('#fair').animate({width:"250px"}, {duration: 300});
      $('#poor').animate({width: "0"}, {duration: 50});
      $('#verypoor').animate({width: "0"}, {duration: 50});
      $('#good').animate({width: "0"}, {duration: 50});
      $('#verygood').animate({width: "0"}, {duration: 50});
      _f=true;
    }
    else if(_f) {
      $('#fair').animate({width:"50px"}, {duration: 500});
      $('#poor').animate({width: "50px"}, {duration: 50});
      $('#verypoor').animate({width: "50px"}, {duration: 50});
      $('#good').animate({width: "50px"}, {duration: 50});
      $('#verygood').animate({width: "50px"}, {duration: 50});
      _f=false;
    }
  });

  _g=false
  $('#good').click(function(){
    if(!_g){
      $('#good').animate({width:"250px"}, {duration: 300});
      $('#poor').animate({width: "0"}, {duration: 50});
      $('#fair').animate({width: "0"}, {duration: 50});
      $('#verypoor').animate({width: "0"}, {duration: 50});
      $('#verygood').animate({width: "0"}, {duration: 50});
      _g=true;
    }
    else if(_g) {
      $('#good').animate({width:"50px"}, {duration: 500});
      $('#poor').animate({width: "50px"}, {duration: 50});
      $('#fair').animate({width: "50px"}, {duration: 50});
      $('#verypoor').animate({width: "50px"}, {duration: 50});
      $('#verygood').animate({width: "50px"}, {duration: 50});
      _g=false;
    }
  });
    _vgd=false
  $('#verygood').click(function(){
    if(!_vgd){
      $('#verygood').animate({width:"250px"}, {duration: 300});
      $('#poor').animate({width: "0"}, {duration: 50});
      $('#fair').animate({width: "0"}, {duration: 50});
      $('#good').animate({width: "0"}, {duration: 50});
      $('#verypoor').animate({width: "0"}, {duration: 50});
      _vgd=true;
    }
    else if(_vgd) {
      $('#verygood').animate({width:"50px"}, {duration: 500});
      $('#poor').animate({width: "50px"}, {duration: 50});
      $('#fair').animate({width: "50px"}, {duration: 50});
      $('#good').animate({width: "50px"}, {duration: 50});
      $('#verypoor').animate({width: "50px"}, {duration: 50});
      _vgd=false;
    }
  });


  /*select friends*/
  _estellequality=false
  $('#quality-share-button .estelle-button').click(function(){
    if(!_estellequality){
      move('#quality-share-button .estelle-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _estellequality=true;
    }
    else if(_estellequality) {
      move('#quality-share-button .estelle-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _estellequality=false;
    }
  });

  _stanquality=false
  $('#quality-share-button .stan-button').click(function(){
    if(!_stanquality){
      move('#quality-share-button .stan-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _stanquality=true;
    }
    else if(_stanquality) {
      move('#quality-share-button .stan-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _stanquality=false;
    }
  });

  _zackquality=false
  $('#quality-share-button .zack-button').click(function(){
    if(!_zackquality){
      move('#quality-share-button .zack-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _zackquality=true;
    }
    else if(_zackquality) {
      move('#quality-share-button .zack-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _zackquality=false;
    }
  });

  _gracequality=false
  $('#quality-share-button .grace-button').click(function(){
    if(!_gracequality){
      move('#quality-share-button .grace-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _gracequality=true;
    }
    else if(_gracequality) {
      move('#quality-share-button .grace-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _gracequality=false;
    }
  });

  _davidquality=false
  $('#quality-share-button .david-button').click(function(){
    if(!_davidquality){
      move('#quality-share-button .david-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _davidquality=true;
    }
    else if(_davidquality) {
      move('#quality-share-button .david-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _davidquality=false;
    }
  });


  /* getup*/
  _j=false;
  $('#getup').click(function(){
    $('#getup').addClass("topic-clickcolor");
    setTimeout(function(){ 
    if(!_j){
      move('#getuptime')
        .to(-320, 0)
        .set('opacity', 1)
        .duration('0.3s')
        .ease('in')
        .end();
    } 
    else if (_j){
      move('#getuptime')
        .to(-320, 240)
        .set('opacity', 1)
        .duration('0.3s')
        .ease('in')
        .end();
    } 
    $('.menu').fadeOut(50);
    move('#channel')
      .set('opacity', 0)
      .duration('0.3s')
      .delay('0.3s')
      .end();
    move('#channel-title')
      .set('opacity', 0)
      .duration('0.2s')
      .end(); 
    move('#getup-title')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    $('#getup-back-click').fadeIn(200);
    $('#getup-add-click').fadeIn(200);
    move('#getup-back')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    move('#getup-add')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
  }, 300);
  });

  /*get up time back*/
  $('#getup-back-click').click(function(){
    setTimeout(function(){
    $('#getup').removeClass("topic-clickcolor");
    if(!_j){
      move('#getuptime')
        .to(0, 0)
        .set('opacity', 0)
        .duration('0.3s')
        .end();
    } 
    else if (_j){
      move('#getuptime')
        .to(0, 240)
        .set('opacity', 0)
        .duration('0.3s')
        .end();
    }
    $('.menu').fadeIn(300);
    move('#channel')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2')
      .end();
    move('#channel-title')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    $('#getup-back-click').fadeOut(50);
    $('#getup-add-click').fadeOut(50); 
    move('#getup-add')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
    }, 200);
    move('#getup-back')
      .set('opacity', 0)
      .duration('0.2s')
      .end(); 
    move('#getup-title')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
  });

  /*add getuptime*/
  $('#getup-add-click').click(function(){
    setTimeout(function(){
    move('#input-getup')
      .to(-320, 0)
      .set('opacity', 1)
      .duration('0.3s')
      .ease('in')
      .end();
    move('#getup-cancel')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    $('#getup-cancel-click').fadeIn(200);
    $('#getup-back-click').fadeOut(50);
    $('#getup-add-click').fadeOut(50);
    move('#getuptime')
      .set('opacity', 0)
      .duration('0.3s')
      .delay('0.3s')
      .end();
    move('#getup-back')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
    }, 200);
    move('#getup-add')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
  });  

  /*cancel getup time input*/
  $('#getup-cancel-click').click(function(){
    setTimeout(function(){
    move('#input-getup')
      .to(0, 0)
      .set('opacity', 0)
      .duration('0.3s')
      .ease('in')
      .delay('0.3s')
      .end(); 
    move('#getuptime')
      .set('opacity', 1)
      .duration('0.3s')
      .end();
    $('#getup-cancel-click').fadeOut(50);
    $('#getup-add-click').fadeIn(200);
    $('#getup-back-click').fadeIn(200);
    move('#getup-back')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    move('#getup-add')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    }, 200);
    move('#getup-cancel')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
  });

  /*done getup input*/
  $('#getup-done').click(function(){
    _j=true;
    move('#input-getup')
      .to(0, 0)
      .set('opacity', 0)
      .duration('0.3s')
      .ease('in')
      .delay('0.3s')
      .end(); 
    move('#getup-cancel')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
    move('#getuptime')
      .to(-320, 240)
      .set('opacity', 1)
      .duration('0.3s')
      .end();
    $('#getuptime').css({height: "498px"});
    $('#getup-cancel-click').fadeOut(50);
    $('#getup-back-click').fadeIn(200);
    $('#getup-add-click').fadeIn(200);
    move('#getup-back')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    move('#getup-add')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    $('#input-getup h5').css({color: "#fff"});
    $('#getup-done').addClass("done-color");
    move('#getup-done')
    .scale('1.2')
    .duration('0.5s')
    .end();
  });

  /*select friends*/
  _estellegetup=false
  $('#getup-share-button .estelle-button').click(function(){
    if(!_estellegetup){
      move('#getup-share-button .estelle-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _estellegetup=true;
    }
    else if(_estellegetup) {
      move('#getup-share-button .estelle-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _estellegetup=false;
    }
  });

  _stangetup=false
  $('#getup-share-button .stan-button').click(function(){
    if(!_stangetup){
      move('#getup-share-button .stan-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _stangetup=true;
    }
    else if(_stangetup) {
      move('#getup-share-button .stan-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _stangetup=false;
    }
  });

  _zackgetup=false
  $('#getup-share-button .zack-button').click(function(){
    if(!_zackgetup){
      move('#getup-share-button .zack-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _zackgetup=true;
    }
    else if(_zackgetup) {
      move('#getup-share-button .zack-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _zackgetup=false;
    }
  });

  _gracegetup=false
  $('#getup-share-button .grace-button').click(function(){
    if(!_gracegetup){
      move('#getup-share-button .grace-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _gracegetup=true;
    }
    else if(_gracegetup) {
      move('#getup-share-button .grace-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _gracegetup=false;
    }
  });

  _davidgetup=false
  $('#getup-share-button .david-button').click(function(){
    if(!_davidgetup){
      move('#getup-share-button .david-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _davidgetup=true;
    }
    else if(_davidgetup) {
      move('#getup-share-button .david-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _davidgetup=false;
    }
  });


  /* before bed*/
  _k=false;
  $('#beforebed').click(function(){
    $('#beforebed').addClass("topic-clickcolor");
    setTimeout(function(){ 
    if(!_k){
      move('#beforebedstate')
        .to(-320, 0)
        .set('opacity', 1)
        .duration('0.3s')
        .ease('in')
        .end();
    } 
    else if (_k){
      move('#beforebedstate')
        .to(-320, 200)
        .set('opacity', 1)
        .duration('0.3s')
        .ease('in')
        .end();
    }
    $('.menu').fadeOut(50);
    move('#channel')
      .set('opacity', 0)
      .duration('0.3s')
      .delay('0.3s')
      .end();
    move('#channel-title')
      .set('opacity', 0)
      .duration('0.2s')
      .end(); 
    move('#beforebed-title')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    $('#beforebed-back-click').fadeIn(200);
    $('#beforebed-add-click').fadeIn(200);
    move('#beforebed-back')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    move('#beforebed-add')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
  }, 300);
  });

  /*beforebed back*/
  $('#beforebed-back-click').click(function(){
    setTimeout(function(){
    $('#beforebed').removeClass("topic-clickcolor");
    if(!_k){
      move('#beforebedstate')
        .to(0, 0)
        .set('opacity', 0)
        .duration('0.3s')
        .end();
    } 
    else if (_k){
      move('#beforebedstate')
        .to(0, 200)
        .set('opacity', 0)
        .duration('0.3s')
        .end();
    }
    $('.menu').fadeIn(200);
    move('#channel')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2')
      .end();
    move('#channel-title')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    $('#beforebed-back-click').fadeOut(50);
    $('#beforebed-add-click').fadeOut(50);
    move('#beforebed-add')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
    }, 200);
    move('#beforebed-back')
      .set('opacity', 0)
      .duration('0.2s')
      .end(); 
    move('#beforebed-title')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
  });

  /*add beforebed time*/
  $('#beforebed-add-click').click(function(){
    setTimeout(function(){
    move('#input-beforebed')
      .to(-320, 0)
      .set('opacity', 1)
      .duration('0.3s')
      .ease('in')
      .end();
    move('#beforebed-cancel')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    $('#beforebed-cancel-click').fadeIn(200);
    $('#beforebed-back-click').fadeOut(50);
    $('#beforebed-add-click').fadeOut(50);
    move('#beforebedstate')
      .set('opacity', 0)
      .duration('0.3s')
      .delay('0.3s')
      .end();
    move('#beforebed-back')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
    }, 200);
    move('#beforebed-add')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
  }); 

  /*select before bed emotions*/
  $('.state-content').click(function(){
    $('#beforebed-select').fadeIn(200);
    move('#beforebed-tick')
      .duration('0.05s')
      .scale('1')
      .end();
    move('#beforebed-cross')
      .duration('0.05s')
      .scale('1')
      .end();
  });
  

  $('#beforebed-tick').click(function(){
    setTimeout(function(){
      $('#beforebed-select').fadeOut(50); 
    }, 200);
    move('#beforebed-tick')
      .duration('0.2s')
      .scale('1.2')
      .end();
  });
  $('#beforebed-cross').click(function(){
    setTimeout(function(){
      $('#beforebed-select').fadeOut(50); 
    }, 200);
    move('#beforebed-cross')
      .duration('0.2s')
      .scale('1.2')
      .end();
  });

  $('#emotionroll').scroll(function(){
            
      // Is this element visible onscreen?
      var e = $('#emotionroll').scrollTop();

      if(e < 45){
          document.getElementById("state-content-change").innerHTML= "happy";
      }
      else if(e > 44 && e <138){
          document.getElementById("state-content-change").innerHTML= "excited";
      }
      else if(e > 137 && e <231){
          document.getElementById("state-content-change").innerHTML= "calm";
      }
      else if(e > 230 && e <324){
          document.getElementById("state-content-change").innerHTML= "anxious";
      }
      else if(e > 323 && e <417){
          document.getElementById("state-content-change").innerHTML= "upset";
      }
      else if(e > 416 && e <510){
          document.getElementById("state-content-change").innerHTML= "frustrated";
      }
      else if(e > 509 && e <603){
          document.getElementById("state-content-change").innerHTML= "dispirited";
      }
    });

  /*cancel beforebed input*/
  $('#beforebed-cancel-click').click(function(){
    setTimeout(function(){
    move('#input-beforebed')
      .to(0, 0)
      .set('opacity', 0)
      .duration('0.3s')
      .ease('in')
      .delay('0.3s')
      .end(); 
    move('#beforebedstate')
      .set('opacity', 1)
      .duration('0.3s')
      .end();
    $('#beforebed-cancel-click').fadeOut(50);
    $('#beforebed-add-click').fadeIn(200);
    $('#beforebed-back-click').fadeIn(200);
    move('#beforebed-back')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    move('#beforebed-add')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end(); 
    }, 200);
    move('#beforebed-cancel')
      .set('opacity', 0)
      .duration('0.2s')
      .end(); 
  });

  /*done beforebed input*/
  $('#beforebed-done').click(function(){
    _k=true;
    move('#input-beforebed')
      .to(0, 0)
      .set('opacity', 0)
      .duration('0.3s')
      .ease('in')
      .delay('0.3s')
      .end(); 
    move('#beforebed-cancel')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
    move('#beforebedstate')
      .to(-320, 200)
      .set('opacity', 1)
      .duration('0.3s')
      .end();
    $('#beforebedstate').css({height: "498px"});
    $('#beforebed-cancel-click').fadeOut(50);
    $('#beforebed-back-click').fadeIn(200);
    $('#beforebed-add-click').fadeIn(200);
    move('#beforebed-back')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    move('#beforebed-add')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    $('#input-beforebed h5').css({color: "#fff"});
    $('#beforebed-done').addClass("done-color");
    move('#beforebed-done')
    .scale('1.2')
    .duration('0.5s')
    .end();
  });

  /*before bed select friends*/
  _estellebeforebed=false
  $('#beforebed-share-button .estelle-button').click(function(){
    if(!_estellebeforebed){
      move('#beforebed-share-button .estelle-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _estellebeforebed=true;
    }
    else if(_estellebeforebed) {
      move('#beforebed-share-button .estelle-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _estellebeforebed=false;
    }
  });

  _stanbeforebed=false
  $('#beforebed-share-button .stan-button').click(function(){
    if(!_stanbeforebed){
      move('#beforebed-share-button .stan-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _stanbeforebed=true;
    }
    else if(_stanbeforebed) {
      move('#beforebed-share-button .stan-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _stanbeforebed=false;
    }
  });

  _zackbeforebed=false
  $('#beforebed-share-button .zack-button').click(function(){
    if(!_zackbeforebed){
      move('#beforebed-share-button .zack-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _zackbeforebed=true;
    }
    else if(_zackbeforebed) {
      move('#beforebed-share-button .zack-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _zackbeforebed=false;
    }
  });

  _gracebeforebed=false
  $('#beforebed-share-button .grace-button').click(function(){
    if(!_gracebeforebed){
      move('#beforebed-share-button .grace-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _gracebeforebed=true;
    }
    else if(_gracebeforebed) {
      move('#beforebed-share-button .grace-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _gracebeforebed=false;
    }
  });

  _davidbeforebed=false
  $('#beforebed-share-button .david-button').click(function(){
    if(!_davidbeforebed){
      move('#beforebed-share-button .david-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _davidbeforebed=true;
    }
    else if(_davidbeforebed) {
      move('#beforebed-share-button .david-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _davidbeforebed=false;
    }
  });



  /*friends------------------------------*/
  /*like/comment*/
  _davidlike=false
  $('#feeds-post-david-like').click(function(){
    if(!_davidlike){
      $('#feeds-post-david-like').addClass("like-color");
      $('#feeds-post-david-like h2').css({color: "#ffffff"}, 200);
      _davidlike=true;
    }
    else if(_davidlike) {
      $('#feeds-post-david-like').removeClass("like-color");
      $('#feeds-post-david-like h2').css({color: "#B6B7B7"}, 200);
      _davidlike=false;
    }
  });

  _keyboard=false
  _davidkeyboard=false
  $('#feeds-post-david-comment').click(function(){
    if(!_keyboard){
      move('.keyboard')
      .to(0, -261)
      .duration('0.2s')
      .end();
      move('#friends-feeds')
      .to(0, -35)
      .duration('0.2s')
      .end();
      _davidkeyboard=true;
      _keyboard=true;
    }
    else if(_keyboard) {
      move('.keyboard')
      .to(0, 0)
      .duration('0.2s')
      .end();
      move('#friends-feeds')
      .to(0, 0)
      .duration('0.1s')
      .end();
      _davidkeyboard=false;
      _keyboard=false;
    }
  });


  _gracelike=false
  _gracekeyboard=false
  $('#feeds-post-grace-like').click(function(){
    if(!_gracelike){
      $('#feeds-post-grace-like').addClass("like-color");
      $('#feeds-post-grace-like h2').css({color: "#ffffff"}, 200);
      _gracelike=true;
    }
    else if(_gracelike) {
      $('#feeds-post-grace-like').removeClass("like-color");
      $('#feeds-post-grace-like h2').css({color: "#B6B7B7"}, 200);
      _gracelike=false;
    }
  });

  $('#feeds-post-grace-comment').click(function(){
    if(!_keyboard){
      move('.keyboard')
      .to(0, -261)
      .duration('0.2s')
      .end();
      move('#friends-feeds')
      .to(0, -35)
      .duration('0.2s')
      .end();
      _gracekeyboard=true;
      _keyboard=true;
    }
    else if(_keyboard) {
      move('.keyboard')
      .to(0, 0)
      .duration('0.2s')
      .end();
      move('#friends-feeds')
      .to(0, 0)
      .duration('0.1s')
      .end();
      _keyboard=false;
    }
  });

  _stanlike=false
  _stankeyboard=false
  $('#feeds-post-stan-like').click(function(){
    if(!_stanlike){
      $('#feeds-post-stan-like').addClass("like-color");
      $('#feeds-post-stan-like h2').css({color: "#ffffff"}, 200);
      _stanlike=true;
    }
    else if(_stanlike) {
      $('#feeds-post-stan-like').removeClass("like-color");
      $('#feeds-post-stan-like h2').css({color: "#B6B7B7"}, 200);
      _stanlike=false;
    }
  });

  $('#feeds-post-stan-comment').click(function(){
    if(!_keyboard){
      move('.keyboard')
      .to(0, -261)
      .duration('0.2s')
      .end();
      move('#friends-feeds')
      .to(0, -35)
      .duration('0.2s')
      .end();
      _stankeyboard=true;
      _keyboard=true;
    }
    else if(_keyboard) {
      move('.keyboard')
      .to(0, 0)
      .duration('0.2s')
      .end();
      move('#friends-feeds')
      .to(0, 0)
      .duration('0.1s')
      .end();
      _keyboard=false;
    }
  });

  _estellelike=false
  _estellekeyboard=false
  $('#feeds-post-estelle-like').click(function(){
    if(!_estellelike){
      $('#feeds-post-estelle-like').addClass("like-color");
      $('#feeds-post-estelle-like h2').css({color: "#ffffff"}, 200);
      _estellelike=true;
    }
    else if(_estellelike) {
      $('#feeds-post-estelle-like').removeClass("like-color");
      $('#feeds-post-estelle-like h2').css({color: "#B6B7B7"}, 200);
      _estellelike=false;
    }
  });

  $('#feeds-post-estelle-comment').click(function(){
    if(!_keyboard){
      move('.keyboard')
      .to(0, -261)
      .duration('0.2s')
      .end();
      move('#friends-feeds')
      .to(0, -200)
      .duration('0.1s')
      .end();
      _estellekeyboard=true;
      _keyboard=true;
    }
    else if(_keyboard) {
      move('.keyboard')
      .to(0, 0)
      .duration('0.2s')
      .end();
      move('#friends-feeds')
      .to(0, 0)
      .duration('0.1s')
      .end();
      _keyboard=false;
    }
  });

  /*keyboard*/
  $('#keyboard-cancel-click').click(function(){
    if(_keyboard){
      move('.keyboard')
      .to(0, 0)
      .duration('0.2s')
      .end();
      move('#friends-feeds')
      .to(0, 0)
      .duration('0.1s')
      .end();
      _keyboard=false;
      _davidkeyboard=false;
      _gracekeyboard=false;
    }
  });

  $('#keyboard-send-click').click(function(){
    if(_davidkeyboard){
      $('#addcomment-david').slideDown(200);
      move('.keyboard')
      .to(0, 0)
      .duration('0.2s')
      .end();
      move('#friends-feeds')
      .to(0, 0)
      .duration('0.1s')
      .end();
      _keyboard=false;
      _davidkeyboard=false;
    }
    else if(_gracekeyboard){
      $('#addcomment-grace').slideDown(200);
      move('.keyboard')
      .to(0, 0)
      .duration('0.2s')
      .end();
      move('#friends-feeds')
      .to(0, 0)
      .duration('0.1s')
      .end();
      _keyboard=false;
      _gracekeyboard=false;
    }
    else if(_stankeyboard){
      $('#addcomment-stan').slideDown(200);
      move('.keyboard')
      .to(0, 0)
      .duration('0.2s')
      .end();
      move('#friends-feeds')
      .to(0, 0)
      .duration('0.1s')
      .end();
      _keyboard=false;
      _stankeyboard=false;
    }
    else if(_estellekeyboard){
      $('#addcomment-estelle').slideDown(200);
      move('.keyboard')
      .to(0, 0)
      .duration('0.2s')
      .end();
      move('#friends-feeds')
      .to(0, 0)
      .duration('0.1s')
      .end();
      _keyboard=false;
      _esttellekeyboard=false;
    }
  });

  /*add member*/
  _add=false;
  $('#member-add-click').click(function(){
    setTimeout(function(){
    $('#friends-feeds').css("height", "448px");
    $('#friends').css("height", "498px");

    
    $('#addfriends-title').fadeIn(200);
    $('#member-add-back').fadeIn(200);
    $('#member-add-back-click').fadeIn(200);

    $('#friends-title').fadeOut(50);
    $('#member-add-click').fadeOut(50);
    $('.menu').fadeOut(50);
    move('#friends')
    .to(-250, 0)
    .duration('0.2s')
    .end();
    move('#addfriends')
    .to(-250, 0)
    .duration('0.2s')
    .end();
    _add=true;    
    },200);
    $('#member-add').fadeOut(200);
  });

  $('#member-add-back-click').click(function(){
    setTimeout(function(){
    $('#friends-feeds').css("height", "398px");
    $('#friends').css("height", "448px");    
    
    $('#friends-title').fadeIn(200);
    $('#member-add').fadeIn(200);
    $('#member-add-click').fadeIn(200);
    $('.menu').fadeIn(200);

    $('#addfriends-title').fadeOut(50);
    $('#member-add-back-click').fadeOut(50);
    move('#friends')
    .to(0, 0)
    .duration('0.2s')
    .end();
    move('#addfriends')
    .to(0, 0)
    .duration('0.2s')
    .end();
    _add=false;
    },200);
    $('#member-add-back').fadeOut(200);
  });


  /*tips-------------------------------*/
  /*to have coffee back*/


  /*tips full*/
  /*tips-one*/
  _full=false
  _fullcancel=false;
  $('#tips-one').click(function(){    
    $('#tips-one-content').addClass("tips-content-color");
    $('#tips-one-text h1').css({color: "#ffffff"}, 200);
    move('#tips-one')
    .scale(0.9)
    .end();
    setTimeout(function(){
    $('#tips-one').fadeOut(50);
    $('#tips-two').fadeOut(50);
    $('#tips-three').fadeOut(50);
    $('#tips-four').fadeOut(50);
    $('#menu').fadeOut(50);

    $('#tips-one-full').fadeIn(400);
    $('.tips-full-click').fadeIn(400);
    }, 400);
  });

  $('#tips-one-full-click').click(function(){
    if (!_full){
      $('#tips-one-content').removeClass("tips-content-color");
      $('#tips-one-text h1').css({color: "#5fc6ff"}, 200);
      move('#tips-one')
      .scale(1)
      .duration('0.1s')
      .end();

      $('#tips-one').fadeIn(200);
      $('#tips-two').fadeIn(200);
      $('#tips-three').fadeIn(200);
      $('#tips-four').fadeIn(200);
      $('#menu').fadeIn(200);

      $('#tips-one-full').fadeOut(50);
      $('.tips-full-click').fadeOut(50);
    }
  });

  /*edit*/
  $('#edit-click').click(function(){
      setTimeout(function(){
      $('#tips-one-full').css({height: "287px"},200);
     
      move('.tips-keyboard')
      .to(0, -261)
      .duration('0.3s')
      .end();
      $('.tips-full-text-edit').fadeIn(400);
      $('#tips-edit-done').fadeIn(400);
      $('#tips-one-edit-click').fadeIn(400);

      $('#tips-one-full-click').fadeOut(50);
      $('.tips-full-text').fadeOut(50);
      $('#forward').fadeOut(50);
      $('#forward-click').fadeOut(50);
      $('#edit-click').fadeOut(50);
      _full=true;
      _fullcancel=false;      
      },200);
      $('#edit').fadeOut(200);
  });

  $('#tips-one-edit-click').click(function(){
    if (!_fullcancel){
      $('#tips-one-full').css({height: "548px"},200);

      move('.tips-keyboard')
      .to(0, 0)
      .duration('0.3s')
      .end();
      $('.tips-full-text').fadeIn(400);
      $('#forward').fadeIn(400);
      $('#forward-click').fadeIn(400);
      $('#edit').fadeIn(400);
      $('#edit-click').fadeIn(400);
      $('#tips-one-full-click').fadeIn(50);

      $('#tips-one-edit-click').fadeOut(50);
      $('.tips-full-text-edit').fadeOut(50);
      $('#tips-edit-done').fadeOut(50);
      _full=false;
      _fullcancel=true;
    }
  });

  $('#tips-edit-done').click(function(){
    if (!_fullcancel){
      $('#tips-one-full').css({height: "548px"},200);

      move('.tips-keyboard')
      .to(0, 0)
      .duration('0.3s')
      .end();
      $('.tips-full-text').fadeIn(400);
      $('#forward').fadeIn(400);
      $('#forward-click').fadeIn(400);
      $('#edit').fadeIn(400);
      $('#edit-click').fadeIn(400);
      $('#tips-one-full-click').fadeIn(50);

      $('#tips-one-edit-click').fadeOut(50);
      $('.tips-full-text-edit').fadeOut(50);
      $('#tips-edit-done').fadeOut(50);
      _full=false;
      _fullcancel=true;
    }
  });

  $('#tips-keyboard-cancel-click').click(function(){
    if (!_fullcancel){
      $('#tips-one-full').css({height: "548px"},200);

      move('.tips-keyboard')
      .to(0, 0)
      .duration('0.3s')
      .end();
      $('.tips-full-text').fadeIn(400);
      $('#forward').fadeIn(400);
      $('#forward-click').fadeIn(400);
      $('#edit').fadeIn(400);
      $('#edit-click').fadeIn(400);
      $('#tips-one-full-click').fadeIn(50);

      $('#tips-one-edit-click').fadeOut(50);
      $('.tips-full-text-edit').fadeOut(50);
      $('#tips-edit-done').fadeOut(50);
      _full=false;
      _fullcancel=true;
    }
  });

  $('#tips-keyboard-send-click').click(function(){
    if (!_fullcancel){
      $('#tips-one-full').css({height: "548px"},200);

      move('.tips-keyboard')
      .to(0, 0)
      .duration('0.3s')
      .end();
      $('.tips-full-text').fadeIn(400);
      $('#forward').fadeIn(400);
      $('#forward-click').fadeIn(400);
      $('#edit').fadeIn(400);
      $('#edit-click').fadeIn(400);
      $('#tips-one-full-click').fadeIn(50);

      $('#tips-one-edit-click').fadeOut(50);
      $('.tips-full-text-edit').fadeOut(50);
      $('#tips-edit-done').fadeOut(50);
      _full=false;
      _fullcancel=true;
    }
  });

  /*tips forward*/
  $('#forward-click').click(function(){
      setTimeout(function(){
      $('#tips-one-full').css({height: "200px"},200);

      move('#tips-forward')
      .to(0, -348)
      .duration('0.3s')
      .end();
      $('.tips-full-text-forward').fadeIn(400);
      $('#tips-one-forward-click').fadeIn(50);

      $('#tips-one-full-click').fadeOut(50);
      $('.tips-full-text').fadeOut(50);
      $('#forward-click').fadeOut(50);
      $('#edit').fadeOut(50);
      $('#edit-click').fadeOut(50);
      _full=true;
      _fullcancel=false;
      },200);
      $('#forward').fadeOut(200);
  });


  /*tips select friends*/
  _tips_estelle=false
  $('#tips-share-button .estelle-button').click(function(){
    if(!_tips_estelle){
      move('#tips-share-button .estelle-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _estelle=true;
    }
    else if(_tips_estelle) {
      move('#tips-share-button .estelle-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _tips_estelle=false;
    }
  });

  _tips_stan=false
  $('#tips-share-button .stan-button').click(function(){
    if(!_tips_stan){
      move('#tips-share-button .stan-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _tips_stan=true;
    }
    else if(_tips_stan) {
      move('#tips-share-button .stan-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _tips_stan=false;
    }
  });

  _tips_zack=false
  $('#tips-share-button .zack-button').click(function(){
    if(!_tips_zack){
      move('#tips-share-button .zack-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _tips_zack=true;
    }
    else if(_tips_zack) {
      move('#tips-share-button .zack-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _tips_zack=false;
    }
  });

  _tips_grace=false
  $('#tips-share-button .grace-button').click(function(){
    if(!_tips_grace){
      move('#tips-share-button .grace-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _tips_grace=true;
    }
    else if(_tips_grace) {
      move('#tips-share-button .grace-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _tips_grace=false;
    }
  });

  _tips_david=false
  $('#tips-share-button .david-button').click(function(){
    if(!_tips_david){
      move('#tips-share-button .david-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _tips_david=true;
    }
    else if(_tips_david) {
      move('#tips-share-button .david-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _tips_david=false;
    }
  });

  /*tips forward-done*/
  $('#tips-forward-done').click(function(){
    if (!_fullcancel){
      setTimeout(function(){
      $('#tips-one-full').css({height: "548px"},200);
      move('#tips-forward')
      .to(0, 0)
      .duration('0.3s')
      .end();
      $('.tips-full-text').fadeIn(400);
      $('#forward').fadeIn(400);
      $('#forward-click').fadeIn(400);
      $('#edit').fadeIn(400);
      $('#edit-click').fadeIn(400);
      $('#tips-one-full-click').fadeIn(50);

      $('#tips-one-forward-click').fadeOut(50);
      $('.tips-full-text-forward').fadeOut(50);
      }, 500);

      $('#tips-forward h5').css({color: "#fff"});
      $('#tips-forward-done').addClass("done-color");
      move('#tips-forward-done')
      .scale('1.2')
      .duration('0.5s')
      .end();  
      _full=false;
      _fullcancel=true;
    }
  });

  $('#tips-one-forward-click').click(function(){
    if (!_fullcancel){
      $('#tips-one-full').css({height: "548px"},200);

      move('#tips-forward')
      .to(0, 0)
      .duration('0.3s')
      .end();
      $('.tips-full-text').fadeIn(400);
      $('#forward').fadeIn(400);
      $('#forward-click').fadeIn(400);
      $('#edit').fadeIn(400);
      $('#edit-click').fadeIn(400);
      $('#tips-one-full-click').fadeIn(50);

      $('#tips-one-forward-click').fadeOut(50);
      $('.tips-full-text-forward').fadeOut(50);
      _full=false;
      _fullcancel=true;
    }
  });


  /*my sleep----------------------------------*/
  _week=false
  $('#week').click(function(){
    if (!_week){
      $('#day').addClass("week-color-day");
      $('#week').addClass("week-color-week");
      $('#start').addClass("week-color-start");
      $('#day').removeClass("start-color-day");
      $('#day').removeClass("day-color-day");
      $('#week').removeClass("start-color-week");
      $('#week').removeClass("day-color-week");
      $('#start').removeClass("start-color-start");
      $('#start').removeClass("day-color-start");
      $('#week h2').css("color", "#205d6b");
      $('#day h2').css("color", "#b7b7b7");
      $('#start h2').css("color", "#b7b7b7"); 
      $('#sleep-quality-content').removeClass("sleep-quality-day");
      $('#sleep-quality-content').removeClass("sleep-quality-start");
      $('#sleep-quality-content').addClass("sleep-quality-week");
      $('#sleep-quality-content-text-week').fadeIn(500);
      $('#sleep-quality-content-text-week').css("display", "inline-block");

      $('#sleep-quality-content-text-day').fadeOut(50);
      $('#sleep-quality-content-text-start').fadeOut(50);
      _week=true;
      _day=false;
      _start=false;
    }
  });

  _day=true
  $('#day').click(function(){
    if (!_day){
      $('#day').addClass("day-color-day");
      $('#week').addClass("day-color-week");
      $('#start').addClass("day-color-start");
      $('#day').removeClass("start-color-day");
      $('#day').removeClass("week-color-day");
      $('#week').removeClass("start-color-week");
      $('#week').removeClass("week-color-week");
      $('#start').removeClass("start-color-start");
      $('#start').removeClass("week-color-start");
      $('#day h2').css("color", "#205d6b");
      $('#week h2').css("color", "#b7b7b7");
      $('#start h2').css("color", "#b7b7b7"); 
      $('#sleep-quality-content').removeClass("sleep-quality-week");
      $('#sleep-quality-content').removeClass("sleep-quality-start");
      $('#sleep-quality-content').addClass("sleep-quality-day");
      $('#sleep-quality-content-text-day').fadeIn(500);
      $('#sleep-quality-content-text-day').css("display", "inline-block");

      $('#sleep-quality-content-text-week').fadeOut(50);
      $('#sleep-quality-content-text-start').fadeOut(50);
      _day=true;
      _week=false;
      _start=false;
    }
  });

  _start=false
  $('#start').click(function(){
    if (!_start){
      $('#day').addClass("start-color-day");
      $('#week').addClass("start-color-week");
      $('#start').addClass("start-color-start");
      $('#day').removeClass("day-color-day");
      $('#day').removeClass("week-color-day");
      $('#week').removeClass("day-color-week");
      $('#week').removeClass("week-color-week");
      $('#start').removeClass("day-color-start");
      $('#start').removeClass("week-color-start");
      $('#start h2').css("color", "#205d6b");
      $('#day h2').css("color", "#b7b7b7");
      $('#week h2').css("color", "#b7b7b7"); 
      $('#sleep-quality-content').removeClass("sleep-quality-day");
      $('#sleep-quality-content').removeClass("sleep-quality-week");
      $('#sleep-quality-content').addClass("sleep-quality-start");
      $('#sleep-quality-content-text-start').fadeIn(500);
      $('#sleep-quality-content-text-start').css("display", "inline-block");

      $('#sleep-quality-content-text-day').fadeOut(50);
      $('#sleep-quality-content-text-week').fadeOut(50);
      _start=true;
      _day=false;
      _week=false;
    }
  });
  
  /*quality animation*/
  $('#sleep-quality-content').click(function(){
    if (_day){
      move('#sleep-quality-content')
        .scale('0.95')
        .duration('0.3s')
        .ease('in')
        .end();
      setTimeout(function(){  
      $('#quality-ani').fadeIn(500);
      $('#quality-ani-title').fadeIn(500);
      $('#me-title').fadeOut(50);
      $('#me').fadeOut(50);
      $('.menu').fadeOut(50);
      $('#clock-circle-pic ellipse').css("fill", "#d2f9f8");
      $('#clock-circle-text-day').fadeIn(50);
      $('#clock-circle-text-week').fadeOut(50);
      $('#clock-circle-text-start').fadeOut(50);
      }, 400);
    }
  });

  $('#quality-ani').click(function(){
    move('#sleep-quality-content')
      .scale('1')
      .duration('0.1s')
      .ease('in')
      .end();
    $('#me').fadeIn(500);
    $('.menu').fadeIn(500);
    $('#me-title').fadeIn(500);
    $('#quality-ani-title').fadeOut(50);
    $('#quality-ani').fadeOut(50);
  });

  $('#sleep-quality-content').click(function(){
    if (_week){
      move('#sleep-quality-content')
        .scale('0.95')
        .duration('0.3s')
        .ease('in')
        .end();
      setTimeout(function(){  
      $('#quality-ani').fadeIn(500);
      $('#quality-ani-title').fadeIn(500);
      $('#me-title').fadeOut(50);
      $('#me').fadeOut(50);
      $('.menu').fadeOut(50);
      $('#clock-circle-pic ellipse').css("fill", "#79ecf2");
      $('#clock-circle-text-week').fadeIn(50);
      $('#clock-circle-text-day').fadeOut(50);
      $('#clock-circle-text-start').fadeOut(50);
      }, 400);
    }
  });

  $('#sleep-quality-content').click(function(){
    if (_start){
      move('#sleep-quality-content')
        .scale('0.95')
        .duration('0.3s')
        .ease('in')
        .end();
      setTimeout(function(){  
      $('#quality-ani').fadeIn(500);
      $('#quality-ani-title').fadeIn(500);
      $('#me-title').fadeOut(50);
      $('#me').fadeOut(50);
      $('.menu').fadeOut(50);
      $('#clock-circle-pic ellipse').css("fill", "#a2f4f2");
      $('#clock-circle-text-start').fadeIn(50);
      $('#clock-circle-text-week').fadeOut(50);
      $('#clock-circle-text-day').fadeOut(50);
      }, 400);
    }
  });

  /*before bed reasons*/
  $('#reasons-four').click(function(){
    move('#reasons-four')
        .scale('0.95')
        .duration('0.3s')
        .ease('in')
        .end();
    setTimeout(function(){ 
      $('.menu').fadeOut(50);
      $('#me').fadeOut(50);
      move('#beforebed-reason')
        .to(-320, 0)
        .set('opacity', 1)
        .duration('0.3s')
        .ease('in')
        .end();
      move('#me')
      .set('opacity', 0)
      .duration('0.3s')
      .delay('0.3s')
      .end();
      $('#me-title').fadeOut(50);
      $('#reason-beforebed-title').fadeIn(300);
      $('#reason-beforebed-back').fadeIn(300);
      $('#reason-beforebed-back-click').fadeIn(300);
    }, 400);
  });

  $("#reason-beforebed-back-click").click(function(){
    setTimeout(function(){     
    $('.menu').fadeIn(500);
    $('#me').fadeIn(500);
    $('#me-title').fadeIn(300);
    $('#reason-beforebed-title').fadeOut(50);
    $('#reason-beforebed-back-click').fadeOut(50);
      move('#beforebed-reason')
        .to(0, 0)
        .set('opacity', 0)
        .duration('0.3s')
        .ease('in')
        .end();
      move('#reasons-four')
        .scale('1')
        .duration('0.1s')
        .ease('in')
        .end();
    },200);
    $('#reason-beforebed-back').fadeOut(200);
  });         

  $("#beforebed-reason").on("swiperight",function(){
    $('.menu').fadeIn(500);
    $('#me').fadeIn(500);
    $('#me-title').fadeIn(300);
    $('#reason-beforebed-title').fadeOut(50);
    $('#reason-beforebed-back').fadeOut(50);
    $('#reason-beforebed-back-click').fadeOut(50);
      move('#beforebed-reason')
        .to(0, 0)
        .set('opacity', 0)
        .duration('0.3s')
        .ease('in')
        .end();
      move('#reasons-four')
        .scale('1')
        .duration('0.1s')
        .ease('in')
        .end();
  });         

});






       



    


