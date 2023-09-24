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

// Assignments
const assignments = [
    { module: "CS4023", name: "Lab work", dueDate: new Date(2023, 9, 25), repeatWeekly: true , percentageOfGrade: 5 },
    { module: "MS4021", name: "Tutorial work", dueDate: new Date(2023, 9, 18), repeatWeekly: true , percentageOfGrade: 2 },
    { module: "CS4013", name: "C++ assingment ", dueDate: new Date(2023, 8, 20), percentageOfGrade: 20 },
    { module: "PCS4096", name: "Software aretefact demo", dueDate: new Date(2023, 11, 5), percentageOfGrade: 50 },
    { module: "CS4096", name: "Software artefact report", dueDate: new Date(2023, 11, 10) , percentageOfGrade: 50}
];

// Generate the list of assignments to be displayed, considering repeated assignments
let displayedAssignments = [];
assignments.forEach(assignment => {
    if (assignment.repeatWeekly) {
        let dueDate = new Date(assignment.dueDate);
        while (displayedAssignments.length + 1 <= 8) {
            displayedAssignments.push({ ...assignment, dueDate: new Date(dueDate) });
            dueDate.setDate(dueDate.getDate() + 7); // next Friday
        }
    } else {
        displayedAssignments.push(assignment);
    }
});

// Sort by dueDate and limit to 8 assignments
displayedAssignments.sort((a, b) => a.dueDate - b.dueDate);
displayedAssignments = displayedAssignments.slice(0, 8);

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

// Generate exams/quizzes table
let examsTable = `
<h2>Exams/Quizzes:</h2>
<table border="1">
    <thead>
        <tr>
            <th>Module</th>
            <th>Name</th>
            <th>Time</th>
            <th>% of Grade</th>
            <th>Due</th>
        </tr>
    </thead>
    <tbody>
`;

exams.forEach(exam => {
    const daysUntilExam = Math.ceil((exam.date - currentDateTime) / (1000 * 60 * 60 * 24));
    let rowColor = "green";
    if (exam.percentageOfGrade >= 25) {
        rowColor = "red";
    } else if (exam.percentageOfGrade >= 5) {
        rowColor = "orange";
    }
    
    examsTable += `
        <tr style="background-color:${rowColor}">
            <td>${exam.module}</td>
            <td>${exam.name}</td>
            <td>${exam.time}</td>
            <td>${exam.percentageOfGrade}%</td>
            <td>${daysUntilExam} days</td>
        </tr>
    `;
});

examsTable += `
    </tbody>
</table>
`;
  

document.addEventListener('DOMContentLoaded', function() {
    const WAPI_KEY = "b4b8c89061780bcc1092be3d8d658f67";
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
