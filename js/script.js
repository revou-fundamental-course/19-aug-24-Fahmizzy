function formValidation() {
    //DOM
    let name = document.getElementById('name').value;
    //Kondisi Pemisah
    if (name == '') {
        alert('Nama tidak boleh kosong!')
    //Kondisi Form Kosong    
        document.getElementById('result').innerHTML = '-';
    } else {
        //Kondisi Form Terisi
        document.getElementById('result').innerText = name;
    }
    console.log(name);
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
        listImage [index].style.display = 'none';
        index++;
    }

    listImage[indexSlide-1]
    console.log(listImage);
}