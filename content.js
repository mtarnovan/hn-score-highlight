(function() {
    const scores = [...document.querySelectorAll('.score')];

    if (scores.length === 0) {
        console.warn('No scores found on the page.');
        return;
    }

    const points = scores.map(score => parseInt(score.textContent) || 0);
    const maxScore = Math.max(...points);
    const minScore = Math.min(...points);

    scores.forEach(score => {
        const point = parseInt(score.textContent) || 0;
        const ratio = (point - minScore) / (maxScore - minScore || 1); // Normalize between 0 and 1

        // Interpolating from Red (high scores) to Light Blue (low scores)
        const red = Math.round(173 + ratio * (255 - 173));  // From 173 (light blue) to 255 (red)
        const green = Math.round(216 - ratio * 216);        // From 216 to 0
        const blue = Math.round(230 - ratio * 230);        // From 230 to 0

        score.style.backgroundColor = `rgb(${red},${green},${blue})`;
        score.style.padding = '2px 4px';
        score.style.borderRadius = '3px';
        score.style.color = '#fff';
    });
})();
