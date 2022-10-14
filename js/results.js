function theresults(event) {
 alert('Results have been taken.')
 event.preventDefault();
}

var r = document.getElementById('results');
r.addEventListener('submit', theresults);