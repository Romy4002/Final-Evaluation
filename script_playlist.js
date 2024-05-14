var boot = "https://www.youtube.com/embed/videoseries?si=H6UVNJoW5i6pD029&amp;list=PLdPwRNmUlk0ka9Woqt3Xz4YKr5Fy5wjQT"
var web = "https://www.youtube.com/embed/videoseries?si=v6SLqMDlgLEPf7Jd&amp;list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg"
var python = "https://www.youtube.com/embed/videoseries?si=M2g7NUP4g0WBZm7e&amp;list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg"
var java = "https://www.youtube.com/embed/videoseries?si=xEsw9VdHa7Ie_c_l&amp;list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR"

function coursefunc(course) {
    document.getElementById("myframe").src = course;
}

var btxt = "BOOTSTRAP Course"
var wtxt = "Complete Web-Development Course"
var ptxt = "PYTHON Course"
var jtxt = "JAVASCRIPT Course"

function headsfunc(heads) {
    document.getElementById("allheads").innerHTML = heads
}