// app.js

import * as api from './api.js';
import * as ui from './ui.js';

const submitFeedbackBtn = document.getElementById('submit-feedback-btn');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

const searchForCat = async () => {
    const breed = searchInput.value.trim();
    if (breed) {
        try {
            const catImageURL = await api.searchCatByBreed(breed);
            if (catImageURL) {
                ui.displayCatImage(catImageURL);
            } else {
                alert(`No cats found for the breed: ${breed}`);
            }
        } catch (error) {
            console.error(error.message);
        }
    } else {
        alert('Please enter a breed to search for cats.');
    }
};

submitFeedbackBtn.addEventListener('click', () => {
    const feedback = prompt('Enter your feedback:');
    if (feedback) {
        try {
            api.postUserFeedback(feedback);
            alert('Feedback submitted successfully!');
        } catch (error) {
            console.error('Error submitting feedback:', error.message);
        }
    }
});

searchBtn.addEventListener('click', searchForCat);

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        searchForCat();
    }
});
