"use strict";

// Storing the class and id inside variable:

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
    
    errorMsg = classes("error"),
    successIcon= classes("success-icon"),
    failureIcon = classes("failure-icon");

// Target our form and add a submit event listener
// Inside added after next step
form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(username, 0, "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "Password cannot be blank");
});

//Create a function named engine which will do all sorts of form validation work for us. It will have three arguments.

/*
The arguments represent the following:
- id will target our id
- serial will target our classes[error class, success and failure icons]
- message will print a message inside our .error class
*/
// the id.value.trim() will remove all the extra white spaces from the value which the user inputs. 

// Objectives:
// We want the JavaScript to print a message inside the error class whenever the user submits a blank form. At the same time , we want the failure icons to highlight as well.
// But, if the user fills in all the inputs and submits it, we want the success icon to ve visible

let engine = (id, serial, message) => {
    if(id.value.trim()=== "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

            //icons

        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";    
    }
    
    else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        //icons

        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
}
// Time to implement out newly created function.

