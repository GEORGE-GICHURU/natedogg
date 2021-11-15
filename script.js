function fn(){
    var d = new Date();

    var date = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value)  -1;
    var year = parseInt(document.getElementById("year").value);
//validating day
    if (day < 0 || day > 31) {
        document.getElementsByClassName("dayerror").innerHtml = "Enter valid date";
        return false;
    } else if (date == "") {
        document.getElementsByClassName("dayerror").innerHtml = "This field cannot be empty;"
        return false;
    } else {
        d.setDate(date);
    }
} 
//validating month
if (month < 0 || day > 12){
    document.getElementsByClassName("montherror").innerHtml = "Enter valid month";
    return false;
} else if (month == "") {
    document.getElementsByClassName("montherror").innerHtml = "This field cannot be empty";
    return false;
} else {
    d.setMonth(month);
}
//validating year
if (month < 0 || day > 12){
    document.getElementsByClassName("yearerror").innerHtml = "Enter valid year";
    return false;
} else if (month == "") {
    document.getElementsByClassName("yearerror").innerHtml = "This field cannot be empty";
    return false;
} else {
    d.setYear(year);
}

var day = d.getDay();
var days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "saturday"]
var male = [ "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var female = [ "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];





// calculating function
function getAkan() {
    var ismale = document.getElementById['male'].checked;
    var isfemale = document.getElementById['female'].checked;
    if (ismake == true && isfemale == false) {
        if (day == 0) {
            // return male[0];
            alert("your name is " + male[0]);
        }
        else if (day == 1) {
            alert("your name is " + male[1]);
        }
        else if (day == 2) {
            alert("your name is " + male[2]);
        }
        else if (day == 3) {
            alert("your name is " + male[3]);
        }
        else if (day == 4) {
            alert("your name is " + male[4]);
        }
        else if (day == 5) {
            alert("your name is " + male[5]);
        }
        else if (day == 6) {
            alert("your name is " + male[6]);
        }
    }
} else if (ismale == false && isfemale == true) {
    if (day == 0) {
        // return male[0];
        alert("your name is " + female[0]);
    }
    else if (day == 1) {
        alert("your name is " + female[1]);
    }
    else if (day == 2) {
        alert("your name is " + female[2]);
    }
    else if (day == 3) {
        alert("your name is " + female[3]);
    }
    else if (day == 4) {
        alert("your name is " + female[4]);
    }
    else if (day == 5) {
        alert("your name is " + female[5]);
    }
    else if (day == 6) {
        alert("your name is " + female[6]);
    }
}

