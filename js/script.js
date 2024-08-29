function replaceName () {
    let name = prompt ("Halo, Siapa nama anda?", "")
    document.getElementById("name").innerHTML = name
    }

replaceName ();

function formValidation() {
    // DOM Elements
    let name = document.getElementById('name').value;
    let tanggalLahir = document.getElementById('tanggallahir').value;
    let jenisKelamin = document.querySelector('input[name="jeniskelamin"]:checked');
    let pesan = document.getElementById('pesan').value;

    // Validasi Nama
    if (name === '') {
        alert('Nama tidak boleh kosong!');
        return; 
    }

    // Validasi Tanggal Lahir
    if (tanggalLahir === '') {
        alert('Tanggal Lahir tidak boleh kosong!');
        return;
    }

    // Validasi Jenis Kelamin
    if (jenisKelamin === null) {
        alert('Jenis Kelamin harus dipilih!');
        return;
    }

    // Validasi Pesan (Minimal 3 kata)
    let wordCount = pesan.trim().split(/\s+/).length;
    if (pesan.trim() === '' || wordCount < 3) {
        alert('Pesan harus berisi minimal 3 kata!');
        return;
    }

    // Menyimpan data baru dalam format string
    let resultHTML = `
        <div><strong>Nama:</strong> ${name}</div>
        <div><strong>Tanggal Lahir:</strong> ${tanggalLahir}</div>
        <div><strong>Jenis Kelamin:</strong> ${jenisKelamin.value}</div>
        <div><strong>Pesan:</strong> ${pesan}</div>
        <hr>
    `;
    
    // Menambahkan hasil baru ke div result-container
    let resultDiv = document.getElementById('result-container');
    resultDiv.insertAdjacentHTML('beforeend', resultHTML);

    // Clear the form fields
    document.querySelector('.form-container').reset();

    console.log(`Nama: ${name}, Tanggal Lahir: ${tanggalLahir}, Jenis Kelamin: ${jenisKelamin.value}, Pesan: ${pesan}`);
}


let indexSlide = 1;
showBanner(1);

function nextSlide(n) {
    showBanner(indexSlide += n);
}

function showBanner(indexBanner) {
    let listImage = document.getElementsByClassName('banner-img');
    console.log('indexBanner:' + indexBanner);
    console.log('listImage:' + listImage.length);
    if (indexBanner > listImage.length) indexSlide = 1;

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    listImage[indexSlide - 1].style.display = 'block';
    console.log(listImage);
}