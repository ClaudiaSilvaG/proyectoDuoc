document.querySelectorAll('.toggle-bar').forEach(function(toggleBar) {
    toggleBar.addEventListener('click', function() {
        var content = this.nextElementSibling;
        var icon = this.querySelector('.toggle-icon');
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            icon.textContent = '-';
        } else {
            content.style.display = 'none';
            icon.textContent = '+';
        }
    });
});