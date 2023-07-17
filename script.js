


let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');

}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let preveiwContainer = document.querySelector('.books-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.books-container .books').forEach(books =>{
  books.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = books.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});
