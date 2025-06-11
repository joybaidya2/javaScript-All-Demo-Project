let box = document.querySelector('.box');
function changeColor(color,event){
    box.style.background = color;
    document.querySelectorAll('span').forEach(function(item){
        item.classList.remove('active');
    });
    event.target.classList.add('active');
}