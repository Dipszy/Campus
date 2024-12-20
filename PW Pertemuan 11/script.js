// buat fungsi

// nilai username

//nilai password

//cel username dan password

//benar beri alert berhasil login

//username dan password kosong di berikan alert

// username dan password salah makan akan diberi alert lagi untuk username dan password salah

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == 'admin' && password == '1234'){
        alert('berhasil login');
        window.location = "index.html"
        return false
    }
    else if (username == '' && password == '') {
        alert('username dan password kosong');
    } else (
        alert('username dan password salah')
    )
}