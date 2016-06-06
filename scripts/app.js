var classInfo;
var studentNum = 0;
$(document).ready(function() {
  $('#getAjax' ).click( function(){
    console.log( 'button clicked' );
     $.ajax({
       url: 'https://raw.githubusercontent.com/devjanaprime/2.4-jQueryAjaxJSON/master/students.json',
       dataType: 'json',
       success: function( data ){
          console.log( 'in ajax success' );
          console.log( data );
          classInfo = data;
          showStudents();
         }, // end success
       statusCode: {
          404: function(){
             alert( 'error connecting to server' );
          } // end 404
         } // end statusCode
       }); // end ajax  object
});

}); // end click getJSONAjax button

var showStudents = function(){
  var student = classInfo.students[studentNum];
  $('#display').html('<h1>The Nu Cohort</h1><p> First Name: '+ student.first_name + '<br /> Last Name: ' + student.last_name +
  '<br /> City: ' + student.city  + '<br /> Shout Out: ' + student.shoutout + '</p>').css({"padding":"5px","border":"1px solid black","width":"400px","text-align":"left",
  "background-repeat":"no-repeat","background-position":"right","background-image": "url(img/" + studentNum + ".jpg)"});
  $('#display').append((studentNum+1) + ' of 20');
  var viewDiv = document.createElement('div');
  viewDiv.textContent = '';
  viewDiv.className = 'new';
  document.getElementById('display').appendChild(viewDiv);
  var prevButton = document.createElement('button');
  prevButton.textContent = 'Previous Student';
  prevButton.className = 'prev';
  viewDiv.appendChild(prevButton);
  var nextButton = document.createElement('button');
  nextButton.textContent = 'Next Student';
  nextButton.className = 'next';
  viewDiv.appendChild(nextButton);
  $('.prev').click(function() {
      if (studentNum === 0) {
        studentNum = 20;
      }
      $('#new').empty();
      studentNum--;
      showStudents();
    });

    $('.next').click(function() {
      if (studentNum == classInfo.students.length-1) {
          studentNum = -1;
        }
      $('#new').empty();
      studentNum++;
      showStudents();
    });
};
