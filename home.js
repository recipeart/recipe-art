setInterval(displayclock, 500);
function displayclock (){
   var time = new Date();
   var hrs = time.getHours();
   var min = time.getMinutes();
   var sec = time.getSeconds();
   var day = time.getDate();
   var month = time.getMonth();
   var year = time.getFullYear();
   var date = time.getDay();
   var time1 = new Date();
   var hrs1 = time1.getHours();
   var min1 = time1.getMinutes();
   var sec1 = time1.getSeconds();
   var day1 = time1.getDate();
   var month1 = time1.getMonth();
   var year1 = time1.getFullYear();
   var date1 = time1.getDay();
   

   if(hrs > 12){
       hrs = hrs - 12;

   }
   if(hrs === 0){
       hrs = 12;
   }
   if(month == 0){
    month = 'January';

   }else if(month == 1){
    month = 'February';

   }else if(month == 2){
    month = 'March';

   }else if(month == 3){
    month = 'April';

   }else if(month == 4){
    month = 'May';

   }else if(month == 5){
    month = 'June';

   }else if(month == 6){
    month = 'July';

   }else if(month == 7){
    month = 'August';

   }else if(month == 8){
    month = 'September';

   }else if(month == 9){
    month = 'October';

   }else if(month == 10){
    month = 'November';

   }else if(month == 11){
    month = 'December';

   }else{
       month = time.getMonth();
   }
   if(date == 0){
      date = 'Sunday';
   }else if(date == 1){
    date = 'Monday';
 }else if(date == 2){
    date = 'Tuesday';
 }else if(date == 3){
    date = 'Wednesday';
 }else if(date == 4){
    date = 'Thursday';
 }else if(date == 5){
    date = 'Friday';
 }else if(date == 6){
    date = 'Saturday';
 }



   
   document.getElementById('clock').innerHTML = 'Time: '+' '+hrs + ':'+min+':'+sec+'&nbsp &nbsp'+date+' '+'<br>'+day+'th '+' '+month+' '+year;
   if(min < 10){
    document.getElementById('clock').innerHTML = 'Time: '+' '+hrs + ':'+'0'+min+':'+sec+'&nbsp &nbsp'+date+' '+'<br>'+day+'th '+month+' '+year+' ';
   }
   if(sec < 10){
    document.getElementById('clock').innerHTML = 'Time: '+' '+hrs + ':'+min+':'+'0'+sec+'&nbsp &nbsp'+date+' '+'<br>'+day+'th '+month+' '+year+' ';

   }else if(sec < 10 && min < 10){
    document.getElementById('clock').innerHTML = 'Time: '+' '+hrs + ':'+'0'+min+':'+'0'+sec+'&nbsp &nbsp'+date+' '+'<br>'+day+'th '+month+' '+year+' ';
   }
if(time = null){
    document.getElementById('clock').innerHTML = 'Recipe.com';
}
}
function btn1 (){
    $('.pasta').slideUp(0);
    $('.pasta1').slideDown(0);
}
function btn (){
    $('.pasta1').slideUp(0);
    $('.pasta').slideDown(0)
}
$('.chola').mouseover(function(){
    $('.pasta').css('box-shadow','7px 7px 14px blue');
    $('.chola').css('box-shadow','7px 7px 14px red')
})
$('.chola').mouseout(function(){
    $('.pasta').css('box-shadow','7px 7px 14px red')
    $('.chola').css('box-shadow','7px 7px 14px blue')
})

$('.pasta').mouseover(function(){
    $('.chola').css('box-shadow','7px 7px 14px red')
    $('.pasta').css('box-shadow','7px 7px 14px blue')
})
$('.pasta').mouseout(function(){
    $('.pasta').css('box-shadow','7px 7px 14px red')
    $('.chola').css('box-shadow','7px 7px 14px blue')
})
$("#av").click(function(){
    $("#about").css('border',"3px solid yellow");
  });
  $("#about").mouseout(function(){
    $("#about").css('border',"none");
  });
  $("#about").mouseover(function(){
    $("#about").css('border',"none");
  });