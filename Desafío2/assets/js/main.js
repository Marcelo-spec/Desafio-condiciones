const verificar = () => {
    const sticker1 = document.querySelector('#primersticker').value;
    const sticker2 = document.querySelector('#segundosticker').value;
    const sticker3 = document.querySelector('#tercersticker').value;
    const result = parseInt(sticker1) + parseInt(sticker2) + parseInt(sticker3);
    const txt = document.querySelector('#txt');
    txt.innerHTML = result;
    if (result <= 10) {
        txt.innerHTML = 'Llevas ' + result + ' stickers';
    } else {
        txt.innerHTML = 'Llevas demasiados stickers';
    }
}