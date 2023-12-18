var selectedItem;
var lastSelectedItem;
$("i").mouseover(function () {
  $(this).addClass('hover');
  selectedItem = $(this);
  console.log('aaa');
})
$("i").mouseleave(function () {
  $(this).removeClass('hover');
  selectedItem = null;
  lastSelectedItem = $(this);
})