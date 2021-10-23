contentprinaj1.onclick = function () {
    document.getElementById('rightbl').style.width = '10%';
    document.getElementById('leftbl').style.width = '90%';
    kot.style.display = "block"
    document.getElementById('kot').style.width = '600px';
    document.getElementById('kot').style.margin = '0';
    document.getElementById('kot').style.padding = '20px';
    pes.style.display = "none"

}
contentprinaj2.onclick = function () {
    document.getElementById('rightbl').style.width = '50%';
    document.getElementById('leftbl').style.width = '50%';
    document.getElementById('pes').style.width = '400px'
    document.getElementById('kot').style.width = '400px';
    kot.style.display = "block"
    pes.style.display = "block"
}
contentprinaj3.onclick = function () {
    document.getElementById('rightbl').style.width = '90%';
    document.getElementById('leftbl').style.width = '10%';
    document.getElementById('pes').style.width = '600px';
    document.getElementById('pes').style.margin = '0';
    document.getElementById('pes').style.padding = '20px';
    kot.style.display = "none"
    pes.style.display = "block"
}