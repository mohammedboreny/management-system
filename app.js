let employee = function (employeeID, fName, department, level, imageUrl) {

    this.employeeID = employeeID;
    this.fName = fName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = salary(level);
        function salary(level) {
            if (level == "Junior") {
                min = Math.ceil(500);
                max = Math.floor(1000);
                return Math.floor(Math.random() * (max - min) + min);

            }
            else if (level == "Senior") {
                min = Math.ceil(1500);
                max = Math.floor(2000);
                return Math.floor(Math.random() * (max - min) + min);

            }
            else if (level == "Mid-Senior") {
                min = Math.ceil(100);
                max = Math.floor(1500);
                return Math.floor(Math.random() * (max - min) + min);
            
            }
            else {
                return "";
                
            }
    }
    return employeeID, fName, department, level, imageUrl, this.salary;

    };
let render 
    [
        new employee("1000", "ghazi", "administration", "Senior", ""),
        new employee("1001", "lana", "Finance", "Senior", ""),
        new employee("1002", "tamara", "Markting", "Senior", ""),
        new employee("1003", "Saif", "administration", "Mid-Senior", ""),
        new employee("1004", "Omar", "Development", "Senior", ""),
        new employee("1005", "Rana", "Development", "Junior", ""),
        new employee("1006", "Hadi", "Finance", "Mid-Senior", ""),
    ];

for (const k of render) {
    console.log(Object.values(k));
};

var table = document.createElement("table");
document.body.appendChild(table);
var tableHead = document.createElement("thead");
table.append(tableHead);
// //////////////////////
var heading_1 = document.createElement("th");
heading_1.textContent = "employeeID";
tableHead.appendChild(heading_1);

var heading_2 = document.createElement("th");
heading_2.textContent = "fullname";
tableHead.appendChild(heading_2);

var heading_3 = document.createElement("th");
heading_3.textContent = "employeeID";
tableHead.appendChild(heading_3);

var heading_4 = document.createElement("th");
heading_4.textContent = "employeeID";
tableHead.appendChild(heading_4);

var heading_5 = document.createElement("th");
heading_5.textContent = "employeeID";
tableHead.appendChild(heading_5);

var heading_6 = document.createElement("th");
heading_6.textContent = "employeeID";
tableHead.appendChild(heading_6);


var tableBody = document.createElement("tbody");
table.appendChild(tableBody);


function tblBody() {
    for (let i = 0; i < 6; i++) {
        const tr = document.createElement("tr");
        tableBody.appendChild(tr);
        for (let j = 0; j < 5; j++) {
            if (j === 4) {
                continue;
            }
            const td = document.createElement("td");
            let person = Object.values(employee[i]);

            td.textContent = Object.values(person[j]);
            tr.appendChild(td);
        };
        
    };
    
};
tblBody();