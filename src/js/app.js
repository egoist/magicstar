var Version = '1.0.0';

$(function() {

  console.log('Magic Star ' + Version);
  $('body')
   .on('click', '.js-toggler-target', StarAction)

});

function StarAction() {
  if($(this).attr('aria-label') == 'Star this repository') {
    alert('Star');
  } else if($(this).attr('aria-label') == 'Unstar this repository') {
    alert('Unstar');
  }
}
