$(document).ready(function() {
  let ajaxForm =
  `<h3>Jquery/Ajax</h3>
  <form id='ajaxData' name='ajaxData'>
    <textarea rows='20' cols='40'></textarea>
    <input type='submit' value='Submit'>
  </form>`

  $(ajaxForm).appendTo('body')

  $('#ajaxData').submit((event) => {
    event.preventDefault();
    $.ajax({
      url: '/ajax_upload_json',
      method: 'POST',
      data: {ajaxData: $('textarea').val()},
      success: (data) => {
        $('textarea').val('');
        $('</br> <a href=#>Download</a>').appendTo('body');
        $('a').click((event) => {
          event.preventDefault();
          $('<p>' + data + '</p>').appendTo('body');
        })
      }
    })
  })
})