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
        let totalCash = 0;
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

const paybtn = document.getElementsByClassName('js-pay-btn')[0];
