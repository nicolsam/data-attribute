const divs = document.querySelectorAll('[data-height]');

divs.forEach(div => div.addEventListener('click', () => {
    const height = div.dataset.height;

    if(div.style.height != `${height}px`) {
        setHeight(div.id, height);
    } else {
        removeHeight(div.id);
    }
    console.log(`DivID: ${div.id} value: ${height} height: ${div.style.height}`);
}))

function setHeight(div, height) {
    let divSelect = document.querySelector(`#${div}`);
    
    divSelect.style.height = `${height}px`
}

function removeHeight(div) {
    let divSelect = document.querySelector(`#${div}`);

    divSelect.style.height = `50vh`
}



