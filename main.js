// confirm load all dom elements 
$(document).ready(function () {

  //  get and set for  text and html 
  $('#change').click(function () {
    let text, html;

    text = $("#heading").text();
    console.log(`this is the text ${text}`);

    html = $("#heading").html();
    console.log(`this is the html ${html}`);

    $('#heading').text('New Heading (Text)');
    $('#heading2').html('New <em>Heading</em> (HTML)');
  });






  // Add using append and before
  $('#add').click(function () {
    $('#content').append('<p class="Main-p">Appended Main-p</p>');
    $('#content').before('<div>Before the Content Div</div>');
  });

  // 03 - Remove Elements 
  $('#remove').click(function () {
    $('.Main-p').remove();

  });

  //   Add and toggle class
  $('#toggleClass').click(function () {
    $('#heading').toggleClass('highlight');
  });

  //  select all elements
  $('#selectParents').click(function () {
    $('#heading').parents().css('border', '2px dashed green');
  });

  //   Traversing  with find()
  $('#traverseDown').click(function () {
    $('#container').find('span').css({
      'color': 'orangered',
      'font-size': '30px',
      'font-weight': 'bold'
    });
  });
});