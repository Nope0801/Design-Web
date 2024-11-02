// document.addEventListener('DOMContentLoaded', function() {
//     const seats = document.querySelectorAll('.seat');

//     seats.forEach(seat => {
//         seat.addEventListener('click', function() {
//             seat.classList.toggle('active');
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const seats = document.getElementsByClassName('seat');
//     for (let seat of seats) {
//         seat.addEventListener('click', function() {
//             seat.classList.toggle('active');
//         });
//     }
// });
let totalCash = 0;

document.addEventListener('DOMContentLoaded', function () {
    const seats = document.getElementsByClassName('seat');
    const result = document.getElementsByClassName('cash')[0];
    for (let seat of seats) {
        seat.addEventListener('click', function () {
         //   console.log(seat)
            seat.classList.toggle('active');
            calculateCashs();
        });
    }
    function calculateCashs(){
        totalCash = 0;
        for(let seat of seats){
            if(seat.classList.contains('active')){
                console.log(seat)
                if(seat.classList.contains('vip')){
                    totalCash += 90;
                }
                else{
                    totalCash += 80;
                }
            }
        }
        document.getElementsByClassName('cash')[0].innerHTML = `Tổng tiền: ${totalCash}.000 đ`;
    }
});

const payClose = document.getElementsByClassName('js-pay-close')[0];
const pay = document.getElementsByClassName('js-pay')[0];
const payContainer = document.getElementsByClassName('js-pay-container')[0];
const payBtn = document.getElementsByClassName('js-pay-btn')[0];

const payMoney = document.getElementsByClassName('pay-money')[0];
console.log(payMoney);
function showPay(){
    pay.classList.add('open');
    payMoney.innerHTML = `Tổng tiền: ${totalCash}.000 đ`;
}
function hidePay(){
    pay.classList.remove('open');
}

// payBtn.addEventListener('click', showPay);
payBtn.addEventListener('click', function(){
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if(isLoggedIn === 'true'){
        showPay();
    }
    else{
        showLogin();   
    }
});
payClose.addEventListener('click', hidePay);
pay.addEventListener('click', hidePay);

payContainer.addEventListener('click', function(event){
    event.stopPropagation();
});

