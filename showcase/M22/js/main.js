
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
  _i=false;
  $('#coffee').click(function(){
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

  /*add coffee*/
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
    move('#coffee-cancel-click')
      .to(0, 0)
      .set('opacity', 0)
      .duration('0.2s')
      .end();
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

  /*select friends*/
  _estelle=false
  $('.estelle-button').click(function(){
    if(!_estelle){
      move('.estelle-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _estelle=true;
    }
    else if(_estelle) {
      move('.estelle-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _estelle=false;
    }
  });

  _stan=false
  $('.stan-button').click(function(){
    if(!_stan){
      move('.stan-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _stan=true;
    }
    else if(_stan) {
      move('.stan-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _stan=false;
    }
  });

  _zack=false
  $('.zack-button').click(function(){
    if(!_zack){
      move('.zack-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _zack=true;
    }
    else if(_zack) {
      move('.zack-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _zack=false;
    }
  });

  _grace=false
  $('.grace-button').click(function(){
    if(!_grace){
      move('.grace-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _grace=true;
    }
    else if(_grace) {
      move('.grace-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _grace=false;
    }
  });

  _david=false
  $('.david-button').click(function(){
    if(!_david){
      move('.david-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _david=true;
    }
    else if(_david) {
      move('.david-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _david=false;
    }
  });

  
});



       



    


