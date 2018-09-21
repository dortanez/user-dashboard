  var user = {
        name: "Danisa Ortanez",
        image: "img/danisa.png",
        progress: 0.66
    }

    var courseArr = [{
            title: "Readings in World Literature",
            subject: "Social Studies"
        }, {
            title: "Theory of Numbers",
            subject: "Mathematics"
        }, {
            title: "Farsi 301",
            subject: "Languages"
        }];

    var activityArr = [{
            title: "Completed SOSC 503 Module 7 Quiz",
            subject: "Submitted for review 6/11/18 at 10:39PM"
        }, {
            title: "Commented in MATH104 Tuesday Discussion Group",
            subject: "Lorem ipsum dolores sit..."
        }, {
            title: "Enrolled in FARS301",
            subject: "Cohort begins 9/08/18"
        }];

    var accountArr = [{
            title: "Enrolled since: ",
            subject: "9/06/2017"
        }, {
            title: "Enrollment Status: ",
            subject: "Active Student"
        }, {
            title: "Department",
            subject: "Computer Science"
        }];


function setUsers(image,name,id) {

    image.src = user.image;
    name.innerText = user.name;
    id.innerText = "User ID# " + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);

}

setUsers(document.getElementById("userImg"),document.getElementById("username"), document.getElementById("userId"));


function addZero(i) {

    if(i < 10) {

        return "0" + i;

    } else {

       return i;
    }
}


function timeNow() {

    var now = new Date();
    var month = now.getMonth();
    var day = now.getDate();
    var year = now.getFullYear();
    var hours = addZero(now.getHours());
    var minutes = addZero(now.getMinutes());
    var seconds = addZero(now.getSeconds());

    var currentDate = month + "/" + day + "/" + year + "  " + hours + ":" + minutes + ":" + seconds;

    document.getElementById("date").innerText = currentDate;

    setTimeout(function() {

        timeNow()
    }, 1000)
}

timeNow();


function setActive(arr,title,list) {

    title.innerText = arr.title;
    list.innerText = arr.subject;

}

setActive(courseArr, document.getElementById("title"), document.getElementById("list"));

