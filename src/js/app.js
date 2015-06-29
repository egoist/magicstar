var Version = '1.0.0';

$(function() {

  console.log('Magic Star ' + Version);
  $('body')
   .on('click', '.js-toggler-target', function() {
      if($(this).attr('aria-label') == 'Star this repository') {
        alert('good');
      }
   })

});
