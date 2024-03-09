// api.js

export const searchCatByBreed = async (breed) => {
    const searchApiUrl = `https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`;
    try {
        const response = await fetch(searchApiUrl);
        const data = await response.json();
        if (data && data.length > 0) {
            return data[0].url;
        } else {
            return null;
        }
    } catch (error) {
        throw new Error('Error searching for cat:', error);
    }
};

export const postUserFeedback = async (feedback) => {
    const feedbackApiUrl = 'https://api.example.com/feedback'; // Replace with your actual feedback API endpoint
    try {
        const response = await fetch(feedbackApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ feedback }),
        });
        if (!response.ok) {
            throw new Error('Feedback submission failed.');
        }
    } catch (error) {
        throw new Error('Error submitting feedback:', error);
    }
};
