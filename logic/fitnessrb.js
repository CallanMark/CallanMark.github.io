// For logging the date of a workout 
let currentDateTime = new Date();
let currentTime = currentDateTime.toLocaleTimeString();
let timeDiv = document.getElementById("timeD");
timeDiv.textContent = `${currentTime} ⏰ `; 

// Display current date
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayOfWeek = days[currentDateTime.getDay()];

const dayOfMonth = currentDateTime.getDate();
let daySuffix;
if (dayOfMonth % 10 === 1 && dayOfMonth !== 11) {
    daySuffix = "st";
} else if (dayOfMonth % 10 === 2 && dayOfMonth !== 12) {
    daySuffix = "nd";
} else if (dayOfMonth % 10 === 3 && dayOfMonth !== 13) {
    daySuffix = "rd";
} else {
    daySuffix = "th";
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthName = months[currentDateTime.getMonth()];
document.getElementById('currentDate').textContent = ` ${dayOfWeek} the ${dayOfMonth}${daySuffix} of ${monthName} 🗓️ `;


const exerciseData = {
    "Push": [
        { "name": "Bench Press", "details": "5 x 10" },
        { "name": "Incline Dumbbell Press", "details": "15 - 12 - 10 - 8" },
        { "name": "Flat Bench Flys", "details": "3 x 15" },
        { "name": "Dumbbell Shoulder Press", "details": "4 x 10" },
        { "name": "Side Lateral Raise", "details": "3 x 12" },
        { "name": "Front Barbell Raise", "details": "15 - 12 - 10 - 8" },
        { "name": "Skull Crusher", "details": "4 x 10" },
        { "name": "Straight Bar Cable Pushdowns", "details": "3 x 10" }
    ],
    "Pull": [
        { "name": "Pull-ups", "details": "3 x Burn Out" },
        { "name": "Reverse Grip Pull Downs", "details": "4 x 12" },
        { "name": "Single Arm Dumbbell Row", "details": "3 x 15" },
        { "name": "Low Cable Row", "details": "3 x 12" },
        { "name": "Rope Straight Arm Pulldown", "details": "3 x 15" },
        { "name": "T-Bar Row", "details": "15 - 12 - 10 - 8" },
        { "name": "Weighted Hyperextension", "details": "4 x 15" },
        { "name": "Barbell Curls", "details": "4 x 10" },
        { "name": "Alternating Bicep Dumbbell Curl", "details": "3 x 12" }
    ],
    "Arms": [
        { "name": "Bench Finger Curls", "details": "3 x 12" },
        { "name": "Palms-Down Bench Dumbbell Wrist Curl", "details": "3 x 12" },
        { "name": "Skull Crusher", "details": "20 - 15 - 12 - 10" },
        { "name": "Seated Overhead Dumbbell Extension", "details": "3 x 10" },
        { "name": "Dumbbell Kick Backs", "details": "4 x 10" },
        { "name": "Barbell Curls", "details": "20 - 15 - 12 - 10" },
        { "name": "Static Hammer Curl", "details": "3 x 12" },
        { "name": "Decline Barbell Curl", "details": "4 x 10" }
    ],
    "Legs": [
        { "name": "Barbell Squats", "details": "4 x 12" },
        { "name": "Walking Dumbbell Lunges", "details": "4 x 20" },
        { "name": "Leg Press", "details": "4 x 20" },
        { "name": "Single Leg Extensions", "details": "4 x 10" },
        { "name": "Leg Curls", "details": "4 x 12" },
        { "name": "Standing Calf Raise", "details": "3 x 12" },
        { "name": "Barbell Front Squats", "details": "3 x 15" },
        { "name": "Bulgarian Split Squat", "details": "4 x 10" },
        { "name": "Good Mornings", "details": "3 x 15" },
        { "name": "Leg Extension", "details": "Not Specified" },
        { "name": "Leg Curl", "details": "3 x 10 x 10 (superset)" }
    ],
    "General": [
        { "name": "Yoga Stretching", "details": "30 minutes" },
        { "name": "Jump Rope", "details": "15 minutes" },
        { "name": "Kettlebell Swings", "details": "4 x 15" },
        { "name": "Circuit Training", "details": "3 circuits of 10 minutes each" },
        { "name": "Pilates", "details": "45 minutes" },
        { "name": "Boxing", "details": "3 x 3-minute rounds" },
        { "name": "Aerobic Cardio", "details": "20 minutes" }
    ]
};

function displayExercises(exercises) {
    const area = document.getElementById("displayArea");
    area.innerHTML = ''; // Clear previous content

    if (!exercises) return; // If no exercises are selected

    exercises.forEach(exercise => {
        const exerciseDiv = document.createElement("div");
        exerciseDiv.innerHTML = `<strong>${exercise.name}</strong>: ${exercise.details}`;
        area.appendChild(exerciseDiv);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById("submitExercise");
    const exerciseMenu = document.getElementById("exerciseMenu");
    const displayArea = document.getElementById("displayArea");
    const confirmButton = document.getElementById("confirmButton");
    const addMealButton = document.getElementById("addMealButton");
    const uploadImageButton = document.getElementById("uploadImageButton");

    if (!submitButton || !exerciseMenu || !displayArea) {
        console.error("Some DOM elements are missing!");
        return;
    }

    submitButton.addEventListener('click', function() {
        const selectedCategory = exerciseMenu.value;
        if (selectedCategory) {
            displayExercises(exerciseData[selectedCategory]);
        } else {
            displayArea.innerHTML = 'Please select a category.';
        }
    });

    uploadImageButton.addEventListener("click",function() {
        console.log("Button clicked [Upload Image]");
    });

    addMealButton.addEventListener("click",function() {
        console.log("Button clicked (Add meal) ");
    });
});



submitButton.addEventListener('click', function() {
    console.log("Button clicked");
    const selectedCategory = exerciseMenu.value;
    console.log("Selected category:", selectedCategory);
    if (selectedCategory) {
        displayExercises(exerciseData[selectedCategory]);
    } else {
        displayArea.innerHTML = 'Please select a category.';
    }
});
confirmButton.addEventListener('click', function() {
    const selectedCategory = exerciseMenu.value;
});