
var paginationLinks = document.querySelectorAll('.pagination a');

paginationLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    var pageNumber = parseInt(this.textContent);
    window.location.href = 'page' + pageNumber + '.html';
  });
});
var backButton = document.getElementById('backButton');
backButton.addEventListener('click', function(event) {
  event.preventDefault();
  history.back();
});





