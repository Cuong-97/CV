const modalOpen = document.querySelector('.js_open_file');
const modal = document.querySelector('.js_modal');
const modalClose = document.querySelector('.js_modal_close');
const modalContainer = document.querySelector('.js_modal_container');

// click vào file để mở modal
modalOpen.addEventListener('click', function(){
    modal.classList.remove('close');
});

// click vào dấu X để đóng
modalClose.addEventListener('click', function(){
    modal.classList.add('close');
});

// click bên ngoài modal vẫn có thể đóng
modal.addEventListener('click', function(){
    modal.classList.add('close');
});

// ngăn nổi bọt. Nếu không làm thì khi click vào chính thẻ con của modal sẽ đóng modal
modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
});


// slide img
const modal_container = document.querySelector('.modal_container');
const modal_body = document.querySelector('.modal_body');
const listBox = document.querySelectorAll('.box');
const btnLeft = document.querySelector('.btnLeft');
const btnRight = document.querySelector('.btnRight');

modalOpen.addEventListener('click', function () {
    make_slide(1);
});

function make_slide(slide_quantity) {

    let width_box = modal_container.offsetWidth / slide_quantity;
    let width_all_box = width_box * listBox.length;
    modal_body.style.width = `${width_all_box}px`;

    listBox.forEach( function(set_width_box){
        set_width_box.style.width = `${width_box}px`;
    });

    // handle slide
    let count = 0;
    let remain = width_all_box - width_box * slide_quantity;

    btnRight.addEventListener('click', function () {
        count += width_box;
        if (count > remain) {
            count = 0;
        }
        modal_body.style.transform = `translateX(${-count}px)`;
    });

    btnLeft.addEventListener('click', function () {
        count -= width_box;
        if (count < 0) {
            count = remain;
        }
        modal_body.style.transform = `translateX(${-count}px)`;
    });
}

