
//Buy tickets logic
const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');

// Hàm hiển thị modal mua vé (thêm class open vào modal)
function showBuyTickets(){
    modal.classList.add('open');
}

//Hàm ẩn modal mua vé ( gỡ bỏ calss open của modal)
function hideBuyTickets(){
    modal.classList.remove('open');
}

// Lặp qua từng thẻ button và nghe hành vi click
for(const buyBtn of buyBtns){
        buyBtn.addEventListener('click',showBuyTickets);
}

// Nghe hành vi click vào button close
modalClose.addEventListener('click', hideBuyTickets);

modal.addEventListener('click', hideBuyTickets);

modalContainer.addEventListener('click', function(event){
    event.stopPropagation();
})

// logic cho header
let header = document.getElementById('header');
let mobileMenu = document.getElementById('mobile-menu');
let headerHeight = header.clientHeight;

// Đóng mở mobile menu
mobileMenu.onclick = () => {
    let isClose = header.clientHeight === headerHeight;
    if(isClose){
        header.style.height = 'auto';
    } else{
        header.style.height = null;
    }
}

// Tự động đóng khi chọn menu
let menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for(let i = 0; i < menuItems.length; i++){
   let menuItem = menuItems[i];
   
   menuItem.onclick = function(event) {
    let isParentMenu = this.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav');
    if(isParentMenu){
        event.preventDefault();
    }
    else{
        header.style.height = null;
    }
   }
}