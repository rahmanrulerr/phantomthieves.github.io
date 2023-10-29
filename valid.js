//validation code for input

var nama = document.forms['form']['nama'];
var nim = document.forms['form']['NIM'];

var nama_salah = document.getElementById('nama_salah');
var NIM_error = document.getElementById('nim_error');

nama.addEventListener('textInput', nama_Verify);
nim.addEventListener('textInput', nim_Verify);

function validated(){
    if (nama.value.length < 4){
        nama.style.border = "1px solid red";
        nama_salah.style.display = "block";
        nama.focus();
        return false;
    }
    if (nim.value.length < 5){
        nim.style.border = "1px solid red";
        NIM_error.style.display = "block";
        nim.focus();
        return false;
    }
}

function nama_Verify(){
    if (nama.value.length >=5){
        nama.style.border = "1px solid silver";
        nama_salah.style.display = "none";
        return true;
    }
}
function nim_Verify(){
    if (nim.value.length >=5){
        nim.style.border = "1px solid silver";
        NIM_error.style.display = "none";
        return true;
    }
}