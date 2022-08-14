let employee = function (employeeID, fName, department, level, imageUrl) {

    this.employeeID = employeeID;
    this.fName = fName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
  
    this.salary = function () {
        if (this.level == "Junior") {
            min = Math.ceil(500);
            max = Math.floor(1000);
        }
        else if (this.level == "Senior") {
            min = Math.ceil(1500);
            max = Math.floor(2000);
        }
        else if (this.level == "Mid-Senior") {
            min = Math.ceil(100);
            max = Math.floor(1500);
        }
        return Math.floor(Math.random() * (max - min) + min);
    };
    console.log(employeeID, fName, department, level, imageUrl, this.salary());
    return 0;
};
function render(){
    let person1 = employee("1000", "ghazi", "administration", "Senior", "");
    let person2 = employee("1001", "lana", "Finance", "Senior", "");
    let person3 = employee("1002", "tamara", "Markting", "Senior", "");
    let person4 = employee("1003", "Saif", "administration", "Mid-Senior", "");
    let person5 = employee("1004", "Omar", "Development", "Senior", "");
    let person6 = employee("1005", "Rana", "Development", "Junior", "");
    let person7 = employee("1006", "Hadi", "Finance", "Mid-Senior", "");
    return "";
}
console.log(render());



