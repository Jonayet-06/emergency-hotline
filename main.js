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

// for calling btn

const calls = document.getElementsByClassName('card-call-btn');

for(const call of calls){
    call.addEventListener('click', function(){

        const productTitle = call.parentNode.parentNode.children[1].children[0].innerText;

        const productSubTitle = call.parentNode.parentNode.children[1].children[2].innerText;

        const remainingCoin = document.getElementById('update-coin-btn').innerText;

        let convertedRemainingCoin = parseInt(remainingCoin);
        if(convertedRemainingCoin){
            alert(`Calling ${productTitle} ${productSubTitle}`);
            document.getElementById('update-coin-btn').innerText = convertedRemainingCoin - 20;

        const cardContainer = document.getElementById("card-container");
        const newCard = document.createElement("div");
        newCard.innerHTML = `
        <div class="bg-[#fafafa] w-[250px] h-[100px] mt-4">
                <div class="flex justify-between">
                    <div>
                    <h1 class="font-bold text-xl mt-4">${productTitle}</h1>
                    <h1 class="text-2xl mt-4 text-[#6d91b1]">${productSubTitle}</h1>
                    </div>
                    <div>
                    <p>${localTime}</p>
                    </div>
                </div>
            </div>
        `;
        cardContainer.append(newCard);
        }
        else{
            alert('You have no enough coin. You need at least 20 coins for calling');
        }
    })
}

// Add copying btn

