// Display current time
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


const timetable = {
    Monday : [
        {
          "moduleTitle": "MS4131",
          "moduleName": "LEC",
          "startTime": "11:00",
          "endTime": "12:00",
          "location": "FG042"
        },
        {
          "moduleTitle": "CS4023",
          "moduleName": "LEC",
          "startTime": "13:00",
          "endTime": "14:00",
          "location": "B1023"
        },
        {
          "moduleTitle": "CS4013",
          "moduleName": "TUT",
          "startTime": "15:00",
          "endTime": "16:00",
          "location": "SG15"
        },
        {
          "moduleTitle": "MS4021",
          "moduleName": "LEC",
          "startTime": "17:00",
          "endTime": "18:00",
          "location": "GEMS0016"
        }
      ] ,
      Tuesday : [
        {
          "moduleTitle": "CS4023",
          "moduleName": "LEC",
          "startTime": "11:00",
          "endTime": "12:00",
          "location": "ANO10ECE"
        },
        {
          "moduleTitle": "CS4096",
          "moduleName": "LEC",
          "startTime": "12:00",
          "endTime": "14:00",
          "location": "S205"
        },
        {
          "moduleTitle": "MS4021",
          "moduleName": "LEC",
          "startTime": "17:00",
          "endTime": "18:00",
          "location": "GEMS0016"
        }
      ],
      Wednesday : [
        {
          "moduleTitle": "CS4416",
          "moduleName": "TUT",
          "startTime": "09:00",
          "endTime": "10:00",
          "location": "S115"
        },
        {
          "moduleTitle": "CS4013",
          "moduleName": "LEC",
          "startTime": "11:00",
          "endTime": "12:00",
          "location": "P1033"
        },
        {
          "moduleTitle": "MS4021",
          "moduleName": "LEC",
          "startTime": "11:00",
          "endTime": "12:00",
          "location": "HSG037"
        },
        {
          "moduleTitle": "CS4096",
          "moduleName": "TUT",
          "startTime": "13:00",
          "endTime": "14:00",
          "location": "SG19"
        },
        {
          "moduleTitle": "MS4131",
          "moduleName": "TUT",
          "startTime": "14:00",
          "endTime": "15:00",
          "location": "SR3006"
        },
        {
          "moduleTitle": "MS4613",
          "moduleName": "LEC",
          "startTime": "16:00",
          "endTime": "17:00",
          "location": "SR3008"
        },
      ],
      Thursday : [
        {
          "moduleTitle": "MS4613",
          "moduleName": "TUT",
          "startTime": "09:00",
          "endTime": "10:00",
          "location": "SR3008"
        },
        {
          "moduleTitle": "CS4023",
          "moduleName": "LAB",
          "startTime": "10:00",
          "endTime": "11:00",
          "location": "CS3004B"
        },
        {
          "moduleTitle": "MS4021",
          "moduleName": "LEC",
          "startTime": "12:00",
          "endTime": "13:00",
          "location": "HSG037"
        },
        {
          "moduleTitle": "MS4131",
          "moduleName": "LEC",
          "startTime": "14:00",
          "endTime": "15:00",
          "location": "FG042"
        },
        {
          "moduleTitle": "CS4023",
          "moduleName": "LEC",
          "startTime": "15:00",
          "endTime": "16:00",
          "location": "FG042"
        },
        {
          "moduleTitle": "CS4416",
          "moduleName": "LAB",
          "startTime": "16:00",
          "endTime": "17:00",
          "location": "CS3004B"
        }
      ],
      Friday : [
        {
          "moduleTitle": "MS4613",
          "moduleName": "LEC",
          "startTime": "09:00",
          "endTime": "10:00",
          "location": "S206"
        },
        {
          "moduleTitle": "CS4416",
          "moduleName": "LEC",
          "startTime": "10:00",
          "endTime": "11:00",
          "location": "FB028"
        },
        {
          "moduleTitle": "CS4004",
          "moduleName": "TUT",
          "startTime": "11:00",
          "endTime": "12:00",
          "location": "S116"
        } ,
        {
            "moduleTitle": "CS4013",
            "moduleName": "LAB",
            "startTime": "16:00",
            "endTime": "18:00",
            "location": "CS2044"
          }
      ]
};

const tableBody = document.getElementById('tableBody');

// Find the maximum number of rows needed
const maxRows = Math.max(
    timetable.Monday.length,
    timetable.Tuesday.length,
    timetable.Wednesday.length,
    timetable.Thursday.length,
    timetable.Friday.length
);

// Loop through each row
for (let i = 0; i < maxRows; i++) {
    const row = document.createElement('tr');

    // Loop through each day of the week
    for (const day of ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']) {
        const cell = document.createElement('td');

        const entry = timetable[day][i];
        if (entry) {
            cell.innerHTML = `
                <strong>${entry.moduleTitle} - ${entry.moduleName}</strong><br>
                Time: ${entry.startTime} - ${entry.endTime}<br>
                Location: ${entry.location}
            `;
        } else {
            cell.innerHTML = '---';
        }

        row.appendChild(cell);
    }

    tableBody.appendChild(row);
}

// Updated Assignments
const assignments = [
    // For CS4096
    { module: "CS4096", name: "Software artefact", dueDate: new Date(2023, 11, 1), percentageOfGrade: 50 },
    { module: "CS4096", name: "Software artefact report", dueDate: new Date(2023, 11, 1), percentageOfGrade: 50 },
    
    // For MS4131
    { module: "MS4131", name: "Assignment", dueDate: new Date(2023, 10, 13), repeatWeekly: false, percentageOfGrade: 7.5 },
    { module: "MS4131", name: "Assignment", dueDate: new Date(2023, 11, 24), repeatWeekly: false, percentageOfGrade: 7.5 },
    
    // For MS4021
    { module: "MS4021", name: "Mid term", dueDate: new Date(2023, 9, 17), percentageOfGrade: 30 },
    
    // For CS4416
    { module: "CS4416", name: "MCQ", dueDate: new Date(2023, 10, 20), percentageOfGrade: 15 },
    { module: "CS4416", name: "Group project", dueDate: new Date(2023, 11, 29), percentageOfGrade: 20 },
    
    // For CS4178
    { module: "CS4178", name: "Group project 1", dueDate: new Date(2023, 10, 1), percentageOfGrade: 20 },
    { module: "CS4178", name: "Group project 2", dueDate: new Date(2023, 10, 23), percentageOfGrade: 20 },
    { module: "CS4178", name: "Group project 3", dueDate: new Date(2023, 11, 29), percentageOfGrade: 40 },
    
    // For CS4013
    { module: "CS4013", name: "Lab", dueDate: new Date(2023, 9, 30), repeatWeekly: true, percentageOfGrade: 2 },
    { module: "CS4013", name: "MCQ", dueDate: new Date(2023, 10, 20), percentageOfGrade: 10 },
    // Group project dueDate is unknown so I'm not adding it
    
    // For CS4023 (with specific weeks mentioned)
    { module: "CS4023", name: "Lab work", dueDate: new Date(2023, 9, 25), repeatWeekly: false, percentageOfGrade: 5 },
    { module: "CS4023", name: "Lab work", dueDate: new Date(2023, 10, 2), repeatWeekly: false, percentageOfGrade: 5 },
    { module: "CS4023", name: "Lab work", dueDate: new Date(2023, 10, 16), repeatWeekly: false, percentageOfGrade: 5 },
    { module: "CS4023", name: "Lab work", dueDate: new Date(2023, 10, 30), repeatWeekly: false, percentageOfGrade: 5 },
    { module: "CS4023", name: "Lab work", dueDate: new Date(2023, 11, 6), repeatWeekly: false, percentageOfGrade: 5 },
    { module: "CS4023", name: "Lab work", dueDate: new Date(2023, 11, 13), repeatWeekly: false, percentageOfGrade: 5 },
    { module: "CS4023", name: "Mid term", dueDate: new Date(2023, 10, 30), percentageOfGrade: 30 },
    
    // For MS4613
    { module: "MS4613", name: "Mid Term", dueDate: new Date(2023, 10, 20), percentageOfGrade: 10 }
];


// Generate the list of assignments to be displayed, considering repeated assignments
let displayedAssignments = [];

const MAX_REPETITIONS = 12;

assignments.forEach(assignment => {
    if (assignment.repeatWeekly) {
        let dueDate = new Date(assignment.dueDate);
        let repetitions = 0;
        while (repetitions < MAX_REPETITIONS) {
            displayedAssignments.push({ ...assignment, dueDate: new Date(dueDate) });
            dueDate.setDate(dueDate.getDate() + 7); // next week
            repetitions++;
        }
    } else {
        displayedAssignments.push(assignment);
    }
});

// Sort by dueDate and limit to 8 assignments
displayedAssignments.sort((a, b) => a.dueDate - b.dueDate);

// Generate HTML table
let assignmentsTable = `
<table border="1">
    <thead>
        <tr>
            <th>Module</th>
            <th>Name</th>
            <th>Due</th>
            <th>% of grade</th>
        </tr>
    </thead>
    <tbody>
`;

displayedAssignments.forEach(assignment => {
    const daysUntilDue = Math.ceil((assignment.dueDate - currentDateTime) / (1000 * 60 * 60 * 24));
  let rowColor = "green";
    if (assignment.percentageOfGrade >= 25) {
        rowColor = "red";
    } else if (assignment.percentageOfGrade >= 5) {
        rowColor = "orange";
    }
    assignmentsTable += `
        <tr style="background-color:${rowColor}">
            <td>${assignment.module}</td>
            <td>${assignment.name}</td>
            <td> in ${daysUntilDue} days </td>
             <td>${assignment.percentageOfGrade}%</td>
        </tr>
    `;
});

assignmentsTable += `
    </tbody>
</table>
`;

document.getElementById('assignments').innerHTML = assignmentsTable;

// Exams/Quizzes data structure
const exams = [
    { module: "CS101", name: "Midterm", date: new Date(2023, 9, 15), time: "10:00", percentageOfGrade: 50 },
    // ... Other exams/quizzes
];

document.addEventListener('DOMContentLoaded', function() {
    const WAPI_KEY = "b4b8c89061780bcc1092be3d8d658f67"; // Did not retract this as this API is free  
    const lat = "52.679150";
    const lon = "-8.569360";
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,daily&appid=${WAPI_KEY}&units=metric`;

    // Function to convert UNIX timestamp to human-readable hourly time
    const convertUnixToHourlyTime = (unixTimestamp) => {
        const date = new Date(unixTimestamp * 1000);
        return `${date.getHours()}:00`;
    };

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const hourlyData = data.hourly; 

            // Extract only necessary fields and convert 'dt' to hourly time
            const processedData = hourlyData.map((data) => {
                return {
                    "hour": convertUnixToHourlyTime(data.dt),
                    "description": data.weather[0].description,
                    "precipitation": data.precipitation || 0,
                    "temp": data.temp,
                    "feels_like": data.feels_like
                };
            });

            // Update the DOM
            const weatherElement = document.getElementById('weatherData');
            
            // Create table and table header
            const table = document.createElement('table');
            table.innerHTML = `
                <thead>
                    <tr>
                        <th>Hour</th>
                        <th>Description</th>
                        <th>Precipitation</th>
                        <th>Temperature</th>
                        <th>Feels Like</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            `;
            weatherElement.appendChild(table);
            const tbody = table.querySelector('tbody');

            // Populate table with data
            processedData.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.hour}</td>
                    <td>${item.description}</td>
                    <td>${item.precipitation}</td>
                    <td>${item.temp}°C</td>
                    <td>${item.feels_like}°C</td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(error => {
            console.log('Error:', error);
        });
});
