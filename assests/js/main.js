const openReportsBtn = document.getElementById('openModals');
const reportModal = document.getElementById('report-modals'); 
const closeReportsBtn = reportModal?.querySelector('.close-icon'); 

if (openReportsBtn && reportModal && closeReportsBtn) {
    openReportsBtn.addEventListener('click', function() {
        reportModal.style.display = 'block';
    });
    closeReportsBtn.addEventListener('click', function() {
        reportModal.style.display = 'none';
    });
}


