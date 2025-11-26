document.addEventListener('DOMContentLoaded', function() {
  // Toggle navigation menu on mobile
  var navToggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('menu');
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  }

  // Modal functionality
  var modal = document.getElementById('modal');
  var modalTitle = document.getElementById('modal-title');
  var modalText = document.getElementById('modal-text');
  var modalClose = document.querySelector('.modal-close');

  // Open modal on "Подробнее" click
  var moreButtons = document.querySelectorAll('.more-btn');
  moreButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var post = btn.closest('.post');
      var title = post.getAttribute('data-title');
      var info = post.getAttribute('data-info');
      modalTitle.textContent = title;
      modalText.textContent = info;
      modal.classList.add('active');
    });
  });

  // Close modal when clicking close button
  if (modalClose) {
    modalClose.addEventListener('click', function() {
      modal.classList.remove('active');
    });
  }

  // Close modal when clicking outside the modal content
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }
});