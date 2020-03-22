// Today's Date//
window.onload = function () {
    var today = new Date();
    date = moment().format('LL');
    
    $('#currentDay').html(date);
 }
 var workHours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
  
   $('.saveBtn').click(function () {
    var time = $(this).siblings('div.time').text();
    console.log(time);
    var input = $(this).siblings('div.description').children("textarea").val();
    console.log(input);
    localStorage.setItem(time, input);
 })
// Local Storage///
 $('.time-9AM .input').val(localStorage.getItem('9AM'))
$.each(workHours, function (_index, value) {
    console.log(value)
    $('.time-'+value+' .input').val(localStorage.getItem(value))
 })

 $('.description').each(() => {
    var currentHour = moment().hours();
    var scheduledHour = parseInt($(this).attr('#id'))
   if ( scheduledHour < currentHour ) {
      console.log($(this));
   }}) 
      
  
 
   








//         $("#display").empty();
      
//       $(this).removeClass('gray');
//       $(this).addClass('gray');
//       $(this).addClass('gray')
      
//    }
//  })























 
  

