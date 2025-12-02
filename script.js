document.querySelectorAll('.studio-card').forEach(card => {
    const tooltip = card.querySelector('.tooltip');
    card.addEventListener('mouseenter', () => {
        tooltip.style.opacity = '1'; // Show tooltip on hover
        tooltip.style.visibility = 'visible'; // Ensure tooltip is visible
    });
    card.addEventListener('mousemove', e => {
        // Adjust offsets to be more to the left and above the cursor
        tooltip.style.top = `${e.clientY - 20}px`; // Move tooltip above the cursor
        tooltip.style.left = `${e.clientX - 45}px`; // Move tooltip to the left of the cursor
    });
    card.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0'; // Hide tooltip when cursor leaves
        tooltip.style.visibility = 'hidden'; // Ensure tooltip is hidden
    });
});

// Load header
const headerPlaceholder = document.getElementById('header-placeholder');
if (headerPlaceholder) {
    const isCreepMedia = window.location.pathname.includes('CreepMedia');
    const isCreepMusikStudios = window.location.pathname.includes('CreepMusikStudios');
    const isSubPage = isCreepMedia || isCreepMusikStudios;
    const headerPath = isSubPage ? '../header.html' : 'header.html';
    fetch(headerPath)
        .then(response => response.text())
        .then(html => {
            let adjustedHtml = html;
            if (isSubPage) {
                // Adjust paths
                adjustedHtml = adjustedHtml.replace(/src="resources\//g, 'src="../resources/');
                adjustedHtml = adjustedHtml.replace(/href="\/CreepMedia"/g, 'href="/creepmedia"');
            }
            headerPlaceholder.innerHTML = adjustedHtml;
            if (isCreepMedia) {
                const langButton = headerPlaceholder.querySelector('.buttons-hollow');
                if (langButton) {
                    langButton.style.borderColor = '#6453ff';
                    langButton.classList.add('buttons-hollow-lila');
                    const icons = langButton.querySelectorAll('.material-icons-round');
                    icons.forEach(icon => icon.style.color = '#6453ff');
                }
                const dropdownContent = headerPlaceholder.querySelector('.dropdown-content');
                if (dropdownContent) {
                    dropdownContent.style.borderColor = '#6453ff';
                }
            } else if (isCreepMusikStudios) {
                const langButton = headerPlaceholder.querySelector('.buttons-hollow');
                if (langButton) {
                    langButton.style.borderColor = '#D4AF37';
                    langButton.classList.add('buttons-hollow-gold');
                    const icons = langButton.querySelectorAll('.material-icons-round');
                    icons.forEach(icon => icon.style.color = '#D4AF37');
                }
                const dropdownContent = headerPlaceholder.querySelector('.dropdown-content');
                if (dropdownContent) {
                    dropdownContent.style.borderColor = '#D4AF37';
                }
            }
        })
        .catch(error => console.error('Error loading header:', error));
}
