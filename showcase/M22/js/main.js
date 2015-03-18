
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
    move('#coffee-add')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
  });

  $('#coffee-back').click(function(){
    move('#havecoffee')
      .to(0, 0)
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
    move('#coffee-add')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
  });

});
       



    


