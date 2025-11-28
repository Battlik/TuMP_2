document.addEventListener('DOMContentLoaded', function () {
    // ===== Мобильное меню (бургер) =====
    const navToggle = document.querySelector('.nav-toggle');
    const menu = document.getElementById('menu');

    if (navToggle && menu) {
        navToggle.addEventListener('click', function () {
            menu.classList.toggle('active');
        });
    }

    // ===== Модальное окно для "Подробнее" =====
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const modalClose = document.querySelector('.modal-close');

    // Кнопки "Подробнее"
    const moreButtons = document.querySelectorAll('.more-btn');

    moreButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const post = btn.closest('.post');
            if (!post) return;

            const title = post.getAttribute('data-title') || post.querySelector('.post-title')?.textContent || '';
            const info = post.getAttribute('data-info') || '';

            modalTitle.textContent = title;
            modalText.textContent = info;

            modal.classList.add('active');
        });
    });

    // Закрытие модального окна
    function closeModal() {
        modal.classList.remove('active');
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Закрытие по клику на фон
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Закрытие по Esc
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});
