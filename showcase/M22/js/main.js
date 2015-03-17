
$(document).ready(function(){
  $('#seemore-icon').click(function(){
    
    move('#channel-topic-more')
      .to(0, -448)
      .set('opacity', 1)
      .duration('0.5s')
      .end(); 
    move('#channel-topic-noon')
      .set('opacity', 0)
      .duration('0.5s')
      .end(); 
  });

  $('#seemore-icon').mousedown(function(){
    move('#seemore-icon')
      .scale('0.85')
      .duration('0.5s')
      .end();
  });
  $('#seemore-icon').mouseup(function(){
    move('#seemore-icon')
      .scale('1')
      .duration('0.5s')
      .delay('0.2s')
      .end();
  });

  $('#seeback-icon').click(function(){
    
    move('#channel-topic-more')
      .to(0, 0)
      .set('opacity', 0)
      .duration('0.5s')
      .end(); 
    move('#channel-topic-noon')
      .to(0, 0)
      .set('opacity', 1)
      .duration('0.5s')
      .delay('0.2s')
      .end(); 
  });

  $('#seeback-icon').mousedown(function(){
    move('#seeback-icon')
      .scale('0.85')
      .duration('0.5s')
      .end();
  });
  $('#seeback-icon').mouseup(function(){
    move('#seeback-icon')
      .scale('1')
      .duration('0.5s')
      .end();
  });

});
       



    


