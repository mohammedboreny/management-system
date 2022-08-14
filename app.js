let employee = function (employeeID, fName, department, level, imageUrl) {

    this.employeeID = employeeID;
    this.fName = fName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
  
    this.salary =salary(level)
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
    };
    
};
let render =[
            new employee("1000", "ghazi", "administration", "Senior", ""),
            new employee("1001", "lana", "Finance", "Senior", ""),
            new employee("1002", "tamara", "Markting", "Senior", ""),
            new employee("1003", "Saif", "administration", "Mid-Senior", ""),
            new employee("1004", "Omar", "Development", "Senior", ""),
            new employee("1005", "Rana", "Development", "Junior", ""),
            new employee("1006", "Hadi", "Finance", "Mid-Senior", ""),
]


for (const key of render) {
    console.log(key);
}