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
    var scheduledHour = parseInt($(this).attr('id'))
   if ( scheduledHour < currentHour ) {
      console.log($(this));
      
      // $(this).removeClass('gray');
      $(this).addClass('gray')
   }
 })
// function getTime(current) {
//    var date = new Date();
//    var hours = date.getHours();
//    var minutes = date.getMinutes();
   
//    //AM/PM
//    var newformat = hours >= 12 ? 'PM' : 'AM';  
   
//    // Find current hour in AM-PM Format
//    hours = hours % 12;  
   
//    // To display "0" as "12"
//    hours = hours ? hours : 12;  
//    minutes = minutes < 10 ? '0' + minutes : minutes;
//    var currentTime = hours + newformat;
   
//    if(currentTime == current){
     
//       return 'red'
//    }
//    if(hours == 12 && hours > parseInt(current) && current.includes('PM')){
//       return 'green'
//    }
//    if(current.includes('AM') && newformat == 'PM'){

//       return 'gray'
//    } else if(newformat == 'AM' && current.includes('PM')){
//       return 'green'
//    }
   
//    if(current.includes(newformat)){
//       var currentNumber = parseInt(current.replace(newformat, ''))
//       if(currentNumber <= hours){
//          return 'gray'
//       } else if(currentNumber == 12){
//          return 'gray'
//       } else {
//          return 'green'
//       }
//    }
//    console.log(hours + newformat);
//    return ''
// }
  

