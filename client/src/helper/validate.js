import toast from 'react-hot-toast';

// Validate login page username

export async function usernameValidate(values) {
    const errors = usernameVerify({}, values);
    return errors
}


/** VAlidate Username */

function usernameVerify(error = {}, values) {
    if (!values.username) {
        error.username = toast.error("Username Required", { duration: 2000 });
    } else if (values.username.includes(" ")) {
        error.username = toast.error("Invalid Username", { duration: 2000 });
    }
    return error;
}



// Validate Password 

export async function passwordVerify(values) {
    const errors = passwordValidate({}, values);
    return errors;
}



//  Validate reset password 

export async function resetPasswordValidate(values) {
  const errors = passwordValidate({}, values);

  
      if (!errors.password && values.password !== values.conf_password) {
        errors.exist = toast.error("Password not matching", { duration: 2000 });
      }
  
  return errors;
}




//  Verify Password    

function passwordValidate(error = {}, values) {
    const specialChars =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])[A-Za-z\d`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{8,}$/;


    if (!values.password) {
      error.password = toast.error("Password Required", { duration: 2000 });
    } else if (values.password.includes(" ")) {
      error.password = toast.error("Password cannot contain spaces", {
        duration: 2000,
      });
    } else if (values.password.length < 8) {
      error.password = toast.error("Password must be more than 8 character", {
        duration: 2000,
        style: { fontSize: "15px" },
      });
    } else if (!specialChars.test(values.password)) {
      error.password = toast.error(
        "Password must have special characters",
        { duration: 2000 }
      );
    }
    
    return error;
}