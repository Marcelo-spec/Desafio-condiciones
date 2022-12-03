const clickimg = () => {
    const dsouls = document.querySelector('#imgdsouls');

    if (dsouls.style.border === '2px solid red') {
        dsouls.style.border = '0px';
    } else {
        dsouls.style.border = '2px solid red';
    }
}