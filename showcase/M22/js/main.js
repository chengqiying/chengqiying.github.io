
$(document).ready(function(){
  $('#seemore-icon').click(function(){
    
    move('#channel-topic-more')
      .to(0, -448)
      .set('opacity', 1)
      .duration('0.5s')
      .end(); 
    move('#channel-topic-noon')
      .to(0, -498)
      .set('opacity', 0)
      .duration('0.5s')
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
      .end(); 
  });

});
       



    

