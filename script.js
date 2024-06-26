alert("Welcome Baker!");

function toggleDetails(button) {
    const recipeCard = button.parentElement;
    const recipeDetails = recipeCard.querySelector('.recipe-details');

    if (recipeDetails.style.display === 'block') {
        recipeDetails.style.display = 'none';
        button.textContent = 'Show More';
    } else {
        recipeDetails.style.display = 'block';
        button.textContent = 'Show Less';
    }
}

