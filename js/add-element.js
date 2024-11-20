/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
$('#four').addClass('hot');
$('.hot').each(tocool);
function tocool(){
  $(this).removeClass('hot');
  $(this).addClass('cool');
}
$('#two').next().next().text('cheese');
$('#two').prev().text('sugar');

$('#todo').append('<li class="cool">meat</li>');
$('#add').click(addElement);

// traverse the elements

// add a new element by clicking the plus sign

// before and after are for siblings
// append and prepend are for parent

function addElement() {
 $('#todo').append('<input type="text" id="new">');
 $('input').blur(convertLi);
 $('#save').text("Need Save to Database");
 $('li').click(changeStyle);


  // add a new element
  // add a input text box
  
  // whenever the user are done add the element
  
}
function convertLi(){
  var userinput = $(this).val();
  console.log(userinput);
  $('#todo').append('<li class="cool">'+userinput+'</li>');
  $('input').remove();
}


// bind click with the event handler

//  click the li element will change the changeStyle
//  three style : complete, cool, hot
$('li').click(changeStyle);
function changeStyle(){
  if ($(this).hasClass('cool')){
 $(this).addClass('complete');
 $(this).removeClass('cool');
 $(this).removeClass('hot');
}else { ($(this).hasClass('complete'))
  $(this).removeClass('complete');
  $(this).addClass('cool');
 }
}


// delete complete element by clicking the trash can
document.getElementById('remove').addEventListener('click', removeElement);

function removeElement() {
  $('li.complete').remove();
  $('#save').text("Need Save to Database");
  // remove the marked elements  -- element with style complete
}
