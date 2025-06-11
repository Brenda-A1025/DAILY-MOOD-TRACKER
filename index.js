let selectedMood = Null;

const moodButtons = document.querySelectorAll('.mood');
const moodNote = document.getElementById('mood-Note');
const submitButton = document.getElementById('submit-btn');
const moodEntries = document.getElementById('mood-entries');

window.addEventListener('DOMContentLoaded', loadMoodEntries);

moodButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        moodButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedMood = button.textContent;
    });
});

submitButton.addEventListener('click', () => {
    const note = moodNote.value.trim();
})