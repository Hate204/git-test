let input = document.querySelectorAll('input') ;
let container = document.querySelector('.containert'); 

input[1].addEventListener('click' , function () 
{
   container.innerHTML += "<div class=\"open\">"+"<p  class=\"openp\"> " +input[0].value+"</p>"+"<button>"+"supprimer"+"</button>"+"</div>"; 

})  

 