!function(){
  'use strict';
  var ua = navigator.userAgent;
  var os = '';
  if ( ua.indexOf('Windows') > -1 ) {
    os = 'windows';
  } else {
    os = 'other';
  }
  document.querySelector('body').classList.add(os);
}();