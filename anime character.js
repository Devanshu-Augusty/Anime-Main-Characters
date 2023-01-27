const searchanimemc = () =>{
    let inp = document.getElementById('inp1').value.toUpperCase();
    // console.log(inp);
    // let ul = document.getElementById('animemc');
    // list.value.toUpperCase();
    let a =document.getElementsByClassName('mc');
    for(let i=0;i<a.length;i++) {
        if (a[i].textContent.toUpperCase().indexOf(inp) > -1 ) {
            a[i].style.display = '';
        }
        else {
            a[i].style.display = 'none'
        }

    }
    
}
