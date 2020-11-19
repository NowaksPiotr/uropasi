let watched = document.querySelector('.reveal');
let tasks = document.querySelector('.wrapper');
let button = document.querySelector('.butSub');
let inputs = document.querySelectorAll('.checkem');
let win = document.querySelector('.win');
/*************************************************/
watched.addEventListener('click', reveal);
button.addEventListener('click', nextLev);

function reveal(){
    tasks.classList.add('wrapper-rev');
    tasks.scrollIntoView({
        behavior: 'smooth',
    });
}

function nextLev(){
    if(inputs[0].value == 4 && inputs[1].value == 2 && inputs[2].value == 1 && inputs[3].value == 9){
        let p = document.createElement('p');
        p.classList.add('p-text');
        p.innerHTML = 'Gratuluję! A teraz kliknij <a href="level3.html">tu</a> żeby przejść dalej...';
        win.append(p);
        tasks.style.display = 'none';
    }else{
        alert('Kod dostępu nieprawidłowy.');
    }
}