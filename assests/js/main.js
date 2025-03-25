const openReportsBtn = document.getElementById('openModals');
const reportModal = document.getElementById('report-modals'); 
const closeReportsBtn = reportModal?.querySelector('.close-icon'); 

if (openReportsBtn && reportModal && closeReportsBtn) {
    openReportsBtn.addEventListener('click', function() {
        reportModal.style.display = 'block';
        $("body").css('overflow', "hidden");
    });
    closeReportsBtn.addEventListener('click', function() {
        reportModal.style.display = 'none';
        $("body").css('overflow', "auto");
    });
}


