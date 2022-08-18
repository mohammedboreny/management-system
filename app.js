let employee = function (employeeID, fName, department, level, imageUrl) {

    this.employeeID = employeeID;
    this.fName = fName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = salary(level);
        function salary(level) {
<<<<<<< HEAD
            if (level == "Junior") {
                min = Math.ceil(500);
                max = Math.floor(1000);
                return String(Math.floor(Math.random() * (max - min) + min));

            }
            else if (level == "Senior") {
                min = Math.ceil(1500);
                max = Math.floor(2000);
                return String(Math.floor(Math.random() * (max - min) + min));

            }
            else if (level == "Mid-Senior") {
                min = Math.ceil(100);
                max = Math.floor(1500);
                return String( Math.floor(Math.random() * (max - min) + min));
            
            }
            else {
                return "";
                
            }
    }
    return employeeID, fName, department, level, imageUrl, salary();
};
 let render=
    [
        new employee("1000", "ghazi", "administration", "Senior", ""),
        new employee("1001", "lana", "Finance", "Senior", ""),
        new employee("1002", "tamara", "Markting", "Senior", ""),
        new employee("1003", "Saif", "administration", "Mid-Senior", ""),
        new employee("1004", "Omar", "Development", "Senior", ""),
        new employee("1005", "Rana", "Development", "Junior", ""),
        new employee("1006", "Hadi", "Finance", "Mid-Senior", "")
    ];

var arr = [];
for (const k of render) {
    arr.push(Object.values(k));
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
        for (let j = 0; j < 5; j++) {
            const td = document.createElement("td");
            if (j == 4)
                continue;
            let person = (arr[i]);
            td.textContent = (person[j]);
            tr.appendChild(td);
        };
        tableBody.appendChild(tr);
        
    };    
};
tblBody();
=======
            if (level === "Junior") {
                min = Math.ceil(500);
                max = Math.floor(1000);
                return String(Math.floor(Math.random() * (max - min) + min));
            }
            else if (level === "Senior") {
                min = Math.ceil(1500);
                max = Math.floor(2000);
                return String(Math.floor(Math.random() * (max - min) + min));
            }
            else if (level === "Mid-Senior") {
                min = Math.ceil(100);
                max = Math.floor(1500);
                return String( Math.floor(Math.random() * (max - min) + min));           
            }         
    }
    return employeeID, fName, department, level, imageUrl, salary();
};
// let render=
//     [
//         new employee("1000", "ghazi", "administration", "Senior", ""),
//         new employee("1001", "lana", "Finance", "Senior", ""),
//         new employee("1002", "tamara", "Markting", "Senior", ""),
//         new employee("1003", "Saif", "administration", "Mid-Senior", ""),
//         new employee("1004", "Omar", "Development", "Senior", ""),
//         new employee("1005", "Rana", "Development", "Junior", ""),
//         new employee("1006", "Hadi", "Finance", "Mid-Senior", "")
//     ];
// // console.log(new employee("1000", "ghazi", "administration", "Senior", ""));
// // let arr=[]
// // for (const k of render) {
// //     arr.push(Object.values(k));
// //     console.log(Object.values(k));
// // };
// // console.log(arr);

// var table = document.createElement("table");
// document.body.appendChild(table);
// var tableHead = document.createElement("thead");
// table.append(tableHead);
// // //////////////////////
// var heading_1 = document.createElement("th");
// heading_1.textContent = "employeeID";
// tableHead.appendChild(heading_1);
// // /////////////
// var heading_2 = document.createElement("th");
// heading_2.textContent = "fullname";
// tableHead.appendChild(heading_2);
// // //////////////
// var heading_3 = document.createElement("th");
// heading_3.textContent = "department";
// tableHead.appendChild(heading_3);
// // //////////////
// var heading_4 = document.createElement("th");
// heading_4.textContent = "level";
// tableHead.appendChild(heading_4);

// var heading_5 = document.createElement("th");
// heading_5.textContent = "imageUrl";
// tableHead.appendChild(heading_5);

// var heading_6 = document.createElement("th");
// heading_6.textContent = "Salary";
// tableHead.appendChild(heading_6);


// var tableBody = document.createElement("tbody");
// table.appendChild(tableBody);


// function tblBody() {
//     for (let i = 0; i < 5; i++) {
//         const tr = document.createElement("tr");     
//         for (let j = 0; j < 7; j++) {
//             const td = document.createElement("td");
//             let person = arr[i];
//             td.textContent = person[j];
//             tr.appendChild(td);
//         };
//         tableBody.appendChild(tr);
        
//     };    
// };
// tblBody();
>>>>>>> 891ce5d5eb32f4782b8b01eedb00c1f78285c6a2



let form = document.getElementById("form1");
<<<<<<< HEAD
form.addEventListener('submit', trigBtn);


function trigBtn(event){

    let IdName = document.getElementById("IdName").value;
    let Fname = document.getElementById("Fname").value;
=======
console.log(form);


function trigBtn(event){
    let IdName = document.getElementById("IdName").value;
    let Fname = document.getElementById("fName").value;
>>>>>>> 891ce5d5eb32f4782b8b01eedb00c1f78285c6a2
    let Department = document.getElementById("Department").value;
    let Level = document.getElementById("Level").value;
    let ImageUrl = document.getElementById("ImageUrl").value;
    let Form = new employee(IdName, Fname, Department, Level, ImageUrl);
    console.log(Form);
<<<<<<< HEAD
    event.preventDefault();
    localStorage.setItem("employee", JSON.stringify(Form));
};
=======
    createCard(Form);
    event.preventDefault();

    
    localStorage.setItem("FormLocal", JSON.stringify(Form));
};
let main = document.getElementById("main");

form.addEventListener('submit', trigBtn);



function createCard(employee) {
    let div = document.createElement("div");
    div.className = "card";
    div.style.width = "18rem";
    main.append(div);


    let divImg = document.createElement("img");
    divImg.className = "card-img-top";
    divImg.src = String(employee.imageUrl);
    
    // divImg.src ="https://images-ext-2.discordapp.net/external/7Xgz10_Josv7cNONhRddFL7je6rqydyoxdS1bV9LhqE/https/cdn-icons-png.flaticon.com/512/236/236831.png";
    div.append(divImg);


    let divBody = document.createElement("div");
    divBody.className = "card-body";
    div.append(divBody);

    let h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.textContent=`${employee.employeeID}  :  ${employee.fName} `
    divBody.append(h5);
    let p = document.createElement("p")
    p.className = "card-text";
    p.textContent = `${employee.salary} ${employee.level} in ${employee.department}`
    divBody.append(p);


    


}

>>>>>>> 891ce5d5eb32f4782b8b01eedb00c1f78285c6a2
