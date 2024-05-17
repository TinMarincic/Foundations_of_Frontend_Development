var icon = document.getElementById("icon");
var isDarkTheme = localStorage.getItem('isDarkTheme');

if (isDarkTheme === 'true') {
    document.body.classList.add("dark-theme");
    icon.src = "moon.png";
} else {
    document.body.classList.remove("dark-theme");
    icon.src = "sun.png";
}

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        localStorage.setItem('isDarkTheme', 'true');
        icon.src = "moon.png";
    } else {
        localStorage.setItem('isDarkTheme', 'false');
        icon.src = "sun.png";
    }
}