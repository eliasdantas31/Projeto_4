document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    // const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(btn){
            const tabTarget = btn.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);

            hiddeTabs();
            tab.classList.add('shows__list--active');
            
            removeActiveClass();
            btn.target.classList.add('shows__tabs__button--active');
        })
    }
})

function hiddeTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--active');
    }
}

function removeActiveClass() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--active');
    }
}