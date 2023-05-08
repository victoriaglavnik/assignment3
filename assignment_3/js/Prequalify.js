function validateForm(e) {
   'use strict';

   if (typeof e == 'underfined') e = window.event;

   var email = U.$('email');
   var remail = U.$('remail');
   var fname = U.$('fname');
   var lname = U.$('lname');
   var city = U.$('city');
   var state = U.$('state');
   var zip = U.$('zip');
   var income = U.$('income');
   var ssn = U.$('ssn');

   var error = false;




var $ = function(id) {
   return document.getElementById(id);
};

//validate name
if (/^[A-Z \.\-']{2,20}$/i.test(fname.value)) {
   removeErrorMessage('fname');
} else {
   addErrorMessgae('fname', 'Please enter your first name.');
   error = true;
}

//validate email address
if (/^[w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email.value)) {
   removeErrorMessage('email');
} else {
   addErrorMessage('email', 'Please enter your email address.');
   error = true;
}


if (email == " ") {
   $("email_error").firstChild.nodeValue =
   "This field is required.";
   error = true;
} else {
   $("email_error").firstChild.nodeValue = " ";
}


if (remail == " ") {
   $("remail_error").firstChild.nodeValue =
   "This field is required.";
   error = true;
} else if (email != remail) {
   $("remail_error").firstChild.nodeValue = 
   alert("This entry must equal first entry.");
   error = true;
} else {
   $("remail_error").firstChild.nodeValue = " ";

}


//gorss income

function gross_income(){
   if (income > 45,000) {
      alert("Congratulations, Your are prequalified for a loan. A representative will contact you soon.")
   }
   else {
      alert("We're sorry, you do not qualify for a loan at this time.")
   }
}

function createTable()
{
rn = window.prompt("Input number of rows", 1);
cn = window.prompt("Input number of columns",1);
  
 for(var r=0;r<parseInt(rn,10);r++)
  {
   var x=document.getElementById('myTable').insertRow(r);
   for(var c=0;c<parseInt(cn,10);c++)  
    {
     var y=  x.insertCell(c);
     y.innerHTML="Row-"+r+" Column-"+c; 
    }
   }
}

}
window.onload = function () {
   $("apply_form").onclick = apply_form;
   $("email").focus();
};