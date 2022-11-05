function required() {
 if(document.getElementById('first').value == "" || document.getElementById('last').value == "" || document.getElementById('input-email').value == ""){
  alert('Please enter your information');
  return false;
 }
}