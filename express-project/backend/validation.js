const emailTemplate = /^(([^<>()[\]\.,;:\s@\"\']+(\.[^<>()[\]\.,;:\s@\"\']+)*))@(([^<>()[\]\.,;:\s@\"\']+\.)+[^<>()[\]\.,;:\s@\"\']{2,3})$/i;
const numberTemplate = /^[^s\^\?]([0-9]{1,3})|[7-9]\d{7}$/;
const passwordTemplate = /^[^<>()[\]\.,;:\s@\"\']$/

const validateEmail = (email) => {
  return email.match(emailTemplate);
};

const validateNumber = (num) => {
  return num.match(numberTemplate);
};

const validatePassword = (pass) => {
  return pass.match(passwordTemplate);
};

console.log(validateEmail("test.hhh@test.com"));
console.log(validateNumber("+97688112233"));
console.log(validatePassword("+97688112233"));

