const datas = ["a", "B", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const datos = [datas[346680/9630] + datas[298235/8521] + datas[200124/7412] + datas[127708/4561] + datas[236628/8764] + datas[230121/8523],datas[783652/783652] + datas[7267482*0] + datas[6057064/465928] + datas[1395573/465191] + datas[52313144/6539143] + datas[1939548/646516]];

document.addEventListener('DOMContentLoaded', function() {document.getElementById('mensaje').innerText = "La WEB se encuentra en mantenimiento ,porfavor vuelva más tarde. Att:JD🏴‍☠️";document.getElementById('user').style.display = 'none';document.getElementById('pass').style.display = 'none';document.getElementById('butt').style.display = 'none';document.getElementById('mensaje').style.color = 'red';});

function login() {
    var x = document.getElementById('pass').value;
    var y = document.getElementById('user').value;
    var S1 = document.getElementById('S1').style;
    var S2 = document.getElementById('S2').style;
    var mensaje = document.getElementById('mensaje');
    
    if (x == datos[654466555*0] && y == datos[65735655/65735655]) {
        S1.display = 'block';
        S2.display = 'block';
        mensaje.textContent = 'Acceso Permitido';
        mensaje.style.color = 'green';
        document.getElementById('form').reset();
        
    } 
    
    else {
        
        mensaje.textContent = 'Acceso Denegado';
        mensaje.style.color = 'red';
        document.getElementById('form').reset();
        
    }
    
}

function view() {
    var x = document.getElementById('user').value;
    var S3 = document.getElementById('S3').style;
    
    if(x == "Console"){
        S3.display = 'block';
        document.getElementById('form').reset();
        
    }
    
}

function execute(command) {
    var x = document.getElementById('command').value;
    this.command = x;
    
    if(this.command == "Stop"){
        document.getElementById('mensaje').innerText = "La WEB se encuentra en mantenimiento ,porfavor vuelva más tarde. Att:JD🏴‍☠️";
        document.getElementById('user').style.display = 'none';
        document.getElementById('pass').style.display = 'none';
        document.getElementById('butt').style.display = 'none';
        
    }
    
    if(this.command == "Start"){
        document.getElementById('mensaje').innerText = "";
        document.getElementById('user').style.display = 'block';
        document.getElementById('pass').style.display = 'block';
        document.getElementById('form').reset();
        document.getElementById('butt').style.display = 'block';
        
    }
    
    if(this.command == "Open"){
        var S1 = document.getElementById('S1').style;
        var S2 = document.getElementById('S2').style;
        S1.display = 'block';
        S2.display = 'block';
        mensaje.textContent = 'Acceso Permitido';
        mensaje.style.color = 'green';
        document.getElementById('form').reset();
        
    }
    
    document.getElementById('f0').reset();
    
}

