// Copy-to-clipboard functionality for press kit
document.addEventListener('DOMContentLoaded', function() {
  var copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var targetId = this.getAttribute('data-copy-target');
      var targetElement = document.getElementById(targetId);

      if (targetElement && navigator.clipboard) {
        var textToCopy = targetElement.textContent;

        navigator.clipboard.writeText(textToCopy).then(function() {
          // Visual feedback
          button.textContent = 'Copied!';
          button.classList.add('copied');

          // Reset after 2 seconds
          setTimeout(function() {
            button.textContent = 'Copy';
            button.classList.remove('copied');
          }, 2000);
        }).catch(function(err) {
          console.error('Failed to copy: ', err);
          button.textContent = 'Error';
        });
      }
    });
  });
});
