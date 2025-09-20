const plantStates = {
    1: { emoji: '🌱', message: "It's been 1 days since watering your plant", status: "Your plant is healthy and happy" },
    2: { emoji: '🌱', message: "It's been 2 days since watering your plant", status: "Your plant is healthy and happy" },
    3: { emoji: '🌿💧', message: "It's been 3 days since watering your plant", status: "Your plant needs watering" },
    4: { emoji: '🌿💧', message: "It's been 4 days since watering your plant", status: "Your plant needs watering" },
    5: { emoji: '🌿💧', message: "It's been 5 days since watering your plant", status: "Your plant needs watering" },
    6: { emoji: '🥀', message: "It's been 6 days since watering your plant", status: "Leaves are dropping the color is changing, water soon" },
    7: { emoji: '🥀', message: "It's been 7 days since watering your plant", status: "Leaves are dropping the color is changing, water soon" },
    8: { emoji: '🥀', message: "It's been 8 days since watering your plant", status: "Leaves are dropping the color is changing, water soon" },
    9: { emoji: '🥀', message: "It's been 9 days since watering your plant", status: "Leaves are dropping the color is changing, water soon" },
    10: { emoji: '🪴💀', message: "It's been 10 days since watering your plant", status: "Sorry, your plant is no longer with us" },
    11: { emoji: '🪴💀', message: "It's been 11 days since watering your plant", status: "Sorry, your plant is no longer with us" },
    12: { emoji: '🪴💀', message: "It's been 12 days since watering your plant", status: "Sorry, your plant is no longer with us" }
};

function showExercise(exerciseNum) {
    document.querySelectorAll('.exercise-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById('exercise' + exerciseNum).classList.add('active');
    if (exerciseNum === 2) {
        updateClock();
        setInterval(updateClock, 60000);
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const toggle = document.getElementById('menuToggle');
    
    menu.classList.toggle('show');
    toggle.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    updatePlantStatus(1); 
    updateClock(); 
    setInterval(updateClock, 60000); 
    
    document.querySelectorAll('.nav-btn').forEach(button => {
        button.onclick = (event) => {
            const exerciseNum = event.currentTarget.getAttribute('data-exercise');
            if (exerciseNum) {
                showExercise(parseInt(exerciseNum));
                
                const mobileMenu = document.getElementById('mobileMenu');
                const toggle = document.getElementById('menuToggle');
                if (mobileMenu && mobileMenu.classList.contains('show')) {
                    mobileMenu.classList.remove('show');
                    toggle.classList.remove('active');
                }
            }
        };
    });
    
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.onclick = toggleMobileMenu;
    }
    
    const daysSlider = document.getElementById('daysSlider');
    if (daysSlider) {
        daysSlider.oninput = function() {
        const days = parseInt(this.value);
        const percentage = ((days - 1) / (12 - 1)) * 100;
        this.style.setProperty('--fill', percentage + '%');
        updatePlantStatus(days);
        };
    }
});

function updatePlantStatus(days) {
    const state = plantStates[days];
    const resultDiv = document.getElementById('plantResult');
    
    resultDiv.innerHTML = `
        <div class="plant-image" style="font-size: 4rem;">${state.emoji}</div>
        <div class="plant-message">${state.message}</div>
        <div class="plant-status">${state.status}</div>
    `;
}

function updateSliderFill(value) {
    const slider = document.getElementById('plantRange');
    const percentage = ((value - slider.min) / (slider.max - slider.min)) * 100;
}

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    
    hours = hours % 12;
    hours = hours ? hours : 12; 
    
    const timeString = `${hours}:${minutes} ${ampm}`;
    document.getElementById('digitalClock').textContent = timeString;
}