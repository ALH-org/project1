function theresults(event) {
 r.textContent = 'Results have been taken.';
 r.addEventListener('click', function(){
  alert("Results have been taken");
 });
 event.preventDefault();
}

const r = document.getElementById('results');
r.addEventListener('submit', theresults); 