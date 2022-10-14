function theresults(event) {
 var r = document.getElementById('container')
 r.addEventListener('submit', function(){
  alert("Results have been taken.");
});
 event.preventDefault();
}
