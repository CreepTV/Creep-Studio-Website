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
