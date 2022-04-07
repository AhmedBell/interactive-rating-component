
const ratingCard = document.getElementById('ratingCard')
const thankYou = document.getElementById('thankYou')
const submitBtn = document.getElementById('subtn')
const ratingBtn = document.getElementsByClassName('ratingB')
const ratingValue = document.getElementById('value');
let arr=[]

for ( i=0 ; i<ratingBtn.length ; i++) {
arr.push(ratingBtn[i])
}

submitBtn.addEventListener('click', isclicked)

arr.forEach(button => {
    button.addEventListener('click' , ()=> 
    
    ratingValue.innerHTML = button.textContent
    
    )
});





function isclicked (){
    ratingCard.classList.add('hide')
    thankYou.classList.remove('hide')
}
