// (function($){"use strict";$("#contactForm").validator().on("submit",function(event){if(event.isDefaultPrevented()){formError();submitMSG(false,"Did you fill in the form properly?");}else{event.preventDefault();submitForm();}});function submitForm(){var name=$("#name").val();var email=$("#email").val();var msg_subject=$("#msg_subject").val();var message=$("#message").val();$.ajax({type:"POST",url:"assets/php/form-process.php",data:"name="+name+"&email="+email+"&msg_subject="+msg_subject+"&message="+message,success:function(text){if(text=="success"){formSuccess();}else{formError();submitMSG(false,text);}}});}
// function formSuccess(){$("#contactForm")[0].reset();submitMSG(true,"Message Submitted!")}
// function formError(){$("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){$(this).removeClass();});}
// function submitMSG(valid,msg){if(valid){var msgClasses="h4 text-left tada animated text-success";}else{var msgClasses="h4 text-left text-danger";}
// $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);}}(jQuery));

let submitted = false;

function validateName() {
  let name = document.getElementById("c-name").value;
  if (name.length == 0) {
    alert("Name can't be blank");
    return false;
  }
  if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
    alert("Please enter your correct name"); //Validation Message
    return false;
  }
  return true;
}

function validatePhone() {
  let phone = document.getElementById("c-phone").value;
  if (phone.length == 0) {
    alert("Mobile number can't be blank"); //Validation Message
    return false;
  }

  if (!phone.match(/^\d{10}$/)) {
    alert("Please enter a correct Mobile number"); //Validation Message
    return false;
  }

  return true;
}

function validateForm() {
  if (!validateName() || !validatePhone()) {
    alert("Form not submitted"); //Validation Message
    return false;
  } else {
    //submitted = true;
    alert("Form submitted");
    //return true;
  }
}