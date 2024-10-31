// script.js
document.addEventListener('DOMContentLoaded', () => {
    const trendItems = document.querySelectorAll('#tendencias li');
    
    trendItems.forEach(item => {
        item.addEventListener('click', () => {
            alert(`Você selecionou: ${item.textContent}`);
        });
    });
});
