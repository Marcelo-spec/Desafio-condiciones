const ingresar = () => {
    const select1 = document.querySelector('#selectUno').value;
    const select2 = document.querySelector('#selectDos').value;
    const select3 = document.querySelector('#selectTres').value;
    const pass = (select1) + (select2) + (select3);
    const txt = document.querySelector('#txt');
    if (pass === "911") {
        txt.innerHTML = 'Tú contraseña es correcta';
    }
    else if (pass === "711") {
        txt.innerHTML = 'Tú contraseña es correcta';
    } else {
        txt.innerHTML = 'Tú contraseña es incorrecta';
    }
}

