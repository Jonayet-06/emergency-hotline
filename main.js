// for adding heart
const hearts = document.getElementsByClassName('heart');
// console.log(hearts);

for(const heart of hearts){
    heart.addEventListener('click', function(){
        const totalHeart = document.getElementById('mainHeart').innerText;
         const mainHeart = parseInt(totalHeart);

         // current heart
         const currentHeart = mainHeart + 1;
         document.getElementById('mainHeart').innerText = currentHeart;
    })
}