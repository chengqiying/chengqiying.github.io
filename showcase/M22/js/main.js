
$(document).ready(function(){
  $('#seemore').click(function(){
    move('#channel-topic-more')
      .to(0, -498)
      .set('opacity', 1)
      .duration('0.5s')
      .end(); 
    move('#channel-topic-noon')
      .set('opacity', 0)
      .duration('0.4s')
      .end(); 
  });

  $('#seemore').mousedown(function(){
    move('#seemore-icon')
      .scale('0.85')
      .duration('0.5s')
      .end();
  });
  $('#seemore').mouseup(function(){
    move('#seemore-icon')
      .scale('1')
      .duration('0.5s')
      .end();
  });

  $('#seeback').click(function(){
    
    move('#channel-topic-more')
      .to(0, 0)
      .set('opacity', 1)
      .duration('0.5s')
      .end(); 
    move('#channel-topic-noon')
      .set('opacity', 1)
      .duration('0.4s')
      .end();
  });

  $('#seeback').mousedown(function(){
    move('#seeback-icon')
      .scale('0.85')
      .duration('0.5s')
      .end();
  });
  $('#seeback').mouseup(function(){
    move('#seeback-icon')
      .scale('1')
      .duration('0.5s')
      .end();
  });

  /*to have coffee*/
  $('#coffee').click(function(){
    move('#havecoffee')
      .to(-320, 0)
      .set('opacity', 1)
      .duration('0.3s')
      .ease('in')
      .end(); 
    move('#channel')
      .set('opacity', 0)
      .duration('0.3s')
      .delay('0.3s')
      .end();
    move('#channel-title')
      .set('opacity', 0)
      .duration('0.2s')
      .end(); 
    move('#coffee-title')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    move('#coffee-back')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    move('#coffee-back-click')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    move('#coffee-add')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
     move('#coffee-add-click')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
  });

  /*to have coffee back*/
  $('#coffee-back-click').click(function(){
    move('#havecoffee')
      .to(0, 240)
      .set('opacity', 0)
      .duration('0.3s')
      .ease('in')
      .delay('0.3s')
      .end(); 
    move('#channel')
      .set('opacity', 1)
      .duration('0.3s')
      .end();
    move('#channel-title')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end(); 
    move('#coffee-title')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
    move('#coffee-back')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
    move('#coffee-back-click')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
    move('#coffee-add')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
    move('#coffee-add-click')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
  });

  /*input coffee*/
  $('#coffee-add-click').click(function(){

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
    move('#coffee-cancel-click')
      .to(-50, 0)
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    move('#havecoffee')
      .set('opacity', 0)
      .duration('0.3s')
      .delay('0.3s')
      .end();
    move('#coffee-back')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
    move('#coffee-back-click')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
    move('#coffee-add')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
    move('#coffee-add-click')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
  });

/*cancel coffeeinput*/
  $('#coffee-cancel-click').click(function(){
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
    move('#coffee-cancel')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
    move('#coffee-cancel-click')
      .to(0, 0)
      .set('opacity', 0)
      .duration('0.2s')
      .end();
    move('#coffee-back')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    move('#coffee-back-click')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    move('#coffee-add')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    move('#coffee-add-click')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
  });

  /*done coffeeinput*/
  $('#coffee-done').click(function(){
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
    move('#coffee-cancel-click')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
    move('#havecoffee')
      .to(-320, 240)
      .set('opacity', 1)
      .set('height', 498)
      .duration('0.3s')
      .end();
    move('#coffee-back')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    move('#coffee-back-click')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    move('#coffee-add')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    move('#coffee-add-click')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    move('#luis')
      .set('opacity', 1)
      .set('margin-top', 0)
      .duration('0.2s')
      .end();
    move('#luis-space')
      .set('opacity', 1)
      .duration('0.2s')
      .end();
  });

  $('#coffee-done').mousedown(function(){
    $('#inputcoffee h5').css({color: "#fff"});
    $('#coffee-done').addClass("done-color");

    move('#coffee-done')
      .scale('1.2')
      .duration('0.5s')
      .end();
  });

  $('#coffee-done').mouseup(function(){
    $('#inputcoffee h5').css({color: "#058DE0"});
    $('#coffee-done').removeClass("done-color");

    move('#coffee-done')
      .scale('1')
      .duration('0.5s')
      .end();
  });
});



       



    


