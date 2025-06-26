
// function showDate() {
//     // 1. 获取当前日期
//     const dateToday = new Date();

//     // 2. 定义友好格式的选项
//     const options = {
//         weekday: 'long',   // 星期几（全名，如 "Monday"）
//         year: 'numeric',   // 年份（数字）
//         month: 'long',     // 月份（全名，如 "November"）
//         day: 'numeric'     // 日（数字）
//     };

//     // 3. 格式化日期（示例输出: "Monday, November 20, 2023"）
//     const friendlyDate = dateToday.toLocaleDateString('en-US', options);

//     // 4. 显示到页面（安全用法）
//     document.getElementById("dateToday").textContent = ` ${friendlyDate}`;

//     // 5. 控制台调试输出（可选）
//     console.log("日期已更新:", friendlyDate);
// }

function showDate() {
    const now = new Date();

    // 日期部分
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const friendlyDate = now.toLocaleDateString('en-US', dateOptions);

    // 时间部分（精确到秒）
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const friendlyTime = now.toLocaleTimeString('en-US', timeOptions);

    // 合并显示
    document.getElementById("dateToday").textContent = `🕰️ ${friendlyDate}, ${friendlyTime}`;
}


var instructor = "Teacher Jasmine";
class Course {
    constructor(courseName, instructor) {
        this.courseName = courseName;
        this.instructor = instructor;
    }
    about(){
          return this.courseName + " course is taught by " + this.instructor + ". 😜";
    }
}

function choiceMade (couseChosen) {
    currentCourse = new Course(couseChosen, instructor);
    document.getElementById("courseInfo").innerHTML = currentCourse.about();

}