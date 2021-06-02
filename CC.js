
document.getElementById("open").addEventListener('click',openside);
var tog = document.querySelector('.hamburger') ;


function openside() {

  tog.style.display = 'none' ;
    // tog.style.display = 'block' ;
   if (tog.style.display === 'none' ) {
    tog.style.display = 'block' ;
   }

   document.getElementById("open").addEventListener('click',closeside);
}

function closeside() {
  tog.style.display = 'none' ;
  document.getElementById("open").addEventListener('click',openside);

}
