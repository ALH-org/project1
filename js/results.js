function required() {
 if(document.getElementById('first').value == "" || document.getElementById('last').value == "" || document.getElementById('input-email').value == ""){
  alert('Please enter your information');
  document.getElementById('first'.style.borderColor = "yellow");
  document.getElementById('last'.style.borderColor = "yellow");
  document.getElementById('input-email'.style.borderColor = "yellow");
  return false;
 }
}