function hitungBil() {
    let bil1 = document.getElementById('bil1').value;
    let bil2 = document.getElementById('bil2').value;

    document.getElementById('hasil').value = parseInt(bil1) + parseInt(bil2);
}