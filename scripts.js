// Robux miktarını güncelleme işlevi
function updateRobuxValue() {
    const robuxValue = document.getElementById("robuxAmount").value;
    document.getElementById("robuxValue").textContent = robuxValue;
}

// Satın alma işlemi için onaylama işlevi
function confirmPurchase() {
    const username = document.getElementById("username").value;
    const robuxAmount = document.getElementById("robuxAmount").value;
    const confirmMessage = document.getElementById("confirmMessage");

    if (username === "") {
        document.getElementById("message").textContent = "Lütfen önce Roblox hesap adınızı girin.";
        return;
    }

    confirmMessage.textContent = `${username} hesabı için ${robuxAmount} Robux satın almak istediğinizden emin misiniz?`;
    document.getElementById("confirmModal").style.display = "block";
}

// Satın alma işlemini tamamlama işlevi ve bekleme çubuğu
function completePurchase() {
    const username = document.getElementById("username").value;
    const robuxAmount = document.getElementById("robuxAmount").value;
    const message = document.getElementById("message");
    const progressBarContainer = document.getElementById("progressBarContainer");
    const progressBar = document.getElementById("progressBar");
    const alertBox = document.getElementById("alertBox");
    let width = 0;

    document.getElementById("confirmModal").style.display = "none";
    progressBarContainer.style.display = "block"; // Çubuğu görünür yap
    message.textContent = `${username} için ${robuxAmount} Robux satın alma işleminiz gerçekleştiriliyor, lütfen bekleyin...`;

    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            message.textContent = `Tebrikler, ${username}! ${robuxAmount} Robux satın alma işleminiz tamamlandı!`;
            progressBarContainer.style.display = "none"; // İşlem tamamlandığında çubuğu gizle
            
            // İşlem tamamlandığında uyarı kutusunu göster
            alertBox.textContent = `Tebrikler ${username}! ${robuxAmount} Robux başarıyla satın alındı.`;
            alertBox.style.display = "block";

            // Uyarı kutusunu 5 saniye sonra gizle
            setTimeout(() => {
                alertBox.style.display = "none";
            }, 5000);
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }, 30); // Çubuğun dolma süresi, 30 milisaniyede bir %1 artacak şekilde ayarlandı
}

// Onay modalını kapatma işlevi
function closeModal() {
    document.getElementById("confirmModal").style.display = "none";
}

// Tema değiştirme işlevi
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    const themeToggle = document.querySelector(".theme-toggle");
    if (body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
}
