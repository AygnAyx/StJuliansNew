// Ana menüye dönme işlevi
function scrollToTop2() {
    const section = document.getElementById('page-0');
    if (section) {
        isScrolling = true; // Kaydırma işlemi başlıyor
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".floating-button");

    button.addEventListener("click", function () {
        button.classList.add("fly-away");

        // 1 saniye sonra butonu geri getir
        setTimeout(() => {
            button.classList.remove("fly-away");
        }, 2000); // 2 saniye sonra buton tekrar görünecek
    });
}); 

//Menü için Resimler için
document.querySelectorAll(".menu-image img").forEach(img => {
    img.addEventListener("click", function() {
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("modalImg");
        modal.style.display = "flex"; // Modalı aç
        modalImg.src = this.src; // Tıklanan resmin URL'sini modal içine ekle
    });
});

function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');

    // Resmi modal içerisinde göster
    modalImage.src = imageSrc;

    // Modal penceresini görünür yap
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('imageModal');

    // Modal penceresini gizle
    modal.style.display = 'none';
}

