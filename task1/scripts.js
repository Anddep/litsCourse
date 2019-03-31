(function() {
  const year = document.getElementById('year');
  const button = document.getElementById('openModal');
  const modal = document.getElementById('modal');
  const close = document.getElementById('close');


  year.innerHTML = new Date().getFullYear();

  button.addEventListener('click', function() {
    modal.show();
  });


  close.addEventListener('click', function() {
    modal.close();
  });


})
();
