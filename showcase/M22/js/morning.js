
$(document).ready(function(){
  $('#seemore').click(function(){
    move('#channel-topic-more')
      .to(0, -498)
      .set('opacity', 1)
      .duration('0.5s')
      .end(); 
    move('#channel-topic-morning')
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
    move('#channel-topic-morning')
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
    move('#coffee-title')
      .set('opacity', 1)
      .duration('0.2s')
      .delay('0.2s')
      .end();
    $('#coffee-back-click').css({display: "block"}, 200);
    $('#coffee-add-click').css({display: "block"}, 200);
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
  }, 500);
  });

  /*to have coffee back*/
  
  $('#coffee-back-click').click(function(){
    
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
    $('#coffee-back-click').css({display: "none"}, 200);
    $('#coffee-add-click').css({display: "none"}, 200);
    move('#coffee-back')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
    move('#coffee-add')
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
    $('#coffee-cancel-click').css({display: "block"}, 200);
    $('#coffee-add-click').css({display: "none"}, 200);
    $('#coffee-back-click').css({display: "none"}, 200);
    move('#havecoffee')
      .set('opacity', 0)
      .duration('0.3s')
      .delay('0.3s')
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
    $('#coffee-cancel-click').css({display: "none"}, 200);
    $('#coffee-back-click').css({display: "block"}, 200);
    $('#coffee-back-click').css({display: "block"}, 200);
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
    $('#quality-back-click').css({display: "block"}, 200);
    $('#quality-add-click').css({display: "block"}, 200);
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
  }, 500);
  });

  /*sleep quality back*/
  $('#quality-back-click').click(function(){
    
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
    move('#quality-title')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
    $('#quality-back-click').css({display: "none"}, 200);
    $('#quality-add-click').css({display: "none"}, 200);
    move('#quality-back')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
    move('#quality-add')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
    
  });

  /*add quality*/
  $('#quality-add-click').click(function(){

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
    $('#quality-cancel-click').css({display: "block"}, 200);
    $('#quality-back-click').css({display: "none"}, 200);
    $('#quality-add-click').css({display: "none"}, 200);
    move('#sleepquality')
      .set('opacity', 0)
      .duration('0.3s')
      .delay('0.3s')
      .end();
    move('#quality-back')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
    move('#quality-add')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
  });  

  /*cancel sleep quality input*/
  $('#quality-cancel-click').click(function(){
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
    move('#quality-cancel')
      .set('opacity', 0)
      .duration('0.2s')
      .end();
    $('#quality-cancel-click').css({display: "none"}, 200);
    $('#quality-add-click').css({display: "block"}, 200);
    $('#quality-back-click').css({display: "block"}, 200);
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
    $('#quality-cancel-click').css({display: "none"}, 200);
    $('#quality-back-click').css({display: "block"}, 200);
    $('#quality-add-click').css({display: "block"}, 200);
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
  _estelle=false
  $('#quality-share-button .estelle-button').click(function(){
    if(!_estelle){
      move('#quality-share-button .estelle-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _estelle=true;
    }
    else if(_estelle) {
      move('#quality-share-button .estelle-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _estelle=false;
    }
  });

  _stan=false
  $('#quality-share-button .stan-button').click(function(){
    if(!_stan){
      move('#quality-share-button .stan-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _stan=true;
    }
    else if(_stan) {
      move('#quality-share-button .stan-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _stan=false;
    }
  });

  _zack=false
  $('#quality-share-button .zack-button').click(function(){
    if(!_zack){
      move('#quality-share-button .zack-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _zack=true;
    }
    else if(_zack) {
      move('#quality-share-button .zack-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _zack=false;
    }
  });

  _grace=false
  $('#quality-share-button .grace-button').click(function(){
    if(!_grace){
      move('#quality-share-button .grace-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _grace=true;
    }
    else if(_grace) {
      move('#quality-share-button .grace-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _grace=false;
    }
  });

  _david=false
  $('#quality-share-button .david-button').click(function(){
    if(!_david){
      move('#quality-share-button .david-button')
      .set('opacity', 1)
      .duration('0.2s')
      .scale('1.2')
      .end();
      _david=true;
    }
    else if(_david) {
      move('#quality-share-button .david-button')
      .set('opacity', 0.3)
      .duration('0.2s')
      .scale('1')
      .end();
      _david=false;
    }
  });
});






       



    


