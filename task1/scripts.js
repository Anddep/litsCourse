(function() {
  const year = document.getElementById('year');
  const button = document.getElementById('openModal');
  const modal = document.getElementById('modal');
  const close = document.getElementById('close');
  const selectAnimal = document.getElementById('favAnimal');


  year.innerHTML = new Date().getFullYear();

  button.addEventListener('click', function() {
    modal.show();
    selectAnimal.focus();
  });


  close.addEventListener('click', function() {
    modal.close();
  });


})
();
