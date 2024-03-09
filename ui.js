// ui.js
const catContainer = document.getElementById('cat-container');

export const displayCatImage = (catImageURL) => {
    const imgElement = document.createElement('img');
    imgElement.src = catImageURL;
    catContainer.innerHTML = '';
    catContainer.appendChild(imgElement);
};
