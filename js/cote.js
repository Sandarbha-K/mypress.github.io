const readmorebtn=document.querySelector('.btnn');
const text=document.querySelector('.text');

readmorebtn.addEventListener('click',()=>{
    text.classList.toggle('show-more');

    if(readmorebtn.innerText==='Read More'){
        readmorebtn.innerText='Read Less';
    }else{
        readmorebtn.innerText='Read More';
    }
});