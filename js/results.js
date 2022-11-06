function required() {
 if(document.getElementById('first').value == "" || document.getElementById('last').value == "" || document.getElementById('input-email').value == ""){
  alert('Please enter your information');
  document.getElementById('first'.style.borderColor = "yellow");
  document.getElementById('last'.style.borderColor = "yellow");
  document.getElementById('input-email'.style.borderColor = "yellow");
  return false;
 }
 else if(document.getElementById('first').value == ""){
  alert('Please enter your First name');
  document.getElementById('first'.style.borderColor = "yellow");
  return false;
 }
 else if(document.getElementById('last').value == ""){
  alert('Please enter your Last name');
  document.getElementById('last'.style.borderColor = "yellow");
  return false;
 }
 else if(document.getElementById('input-email').value == ""){
  alert('Please enter your email');
  document.getElementById('input-email'.style.borderColor = "yellow");
  return false;
 }
}