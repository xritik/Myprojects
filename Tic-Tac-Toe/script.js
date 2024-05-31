let i = 0;
        const mybox = document.querySelectorAll(".boxs");
        for (let j = 0; j < mybox.length; j++) {
            mybox[j].addEventListener("click", function handleClick(e) {
                i++;
                let boxx = e.target;
                if(i%2 == 0){
                    boxx.classList.add("bx", "bx-circle", "mycircle");
                    boxx.setAttribute("id", "circle");
                }else{
                    boxx.classList.add("bx", "bx-x", "mycircle");
                    boxx.setAttribute("id", "cross");
                }
                // console.log(boxx);
                console.log(j)
                // console.log(i);
    
                // Remove the event listener after the first click
                boxx.removeEventListener("click", handleClick);
                console.log(mybox[j].getAttribute('id'))
                if ((mybox[0].getAttribute('id') === 'circle' && mybox[1].getAttribute('id') === 'circle' && mybox[2].getAttribute('id') === 'circle') ||
                    (mybox[3].getAttribute('id') === 'circle' && mybox[4].getAttribute('id') === 'circle' && mybox[5].getAttribute('id') === 'circle') ||
                    (mybox[6].getAttribute('id') === 'circle' && mybox[7].getAttribute('id') === 'circle' && mybox[8].getAttribute('id') === 'circle') ||
                    (mybox[0].getAttribute('id') === 'circle' && mybox[3].getAttribute('id') === 'circle' && mybox[6].getAttribute('id') === 'circle') ||
                    (mybox[1].getAttribute('id') === 'circle' && mybox[4].getAttribute('id') === 'circle' && mybox[7].getAttribute('id') === 'circle') ||
                    (mybox[2].getAttribute('id') === 'circle' && mybox[5].getAttribute('id') === 'circle' && mybox[8].getAttribute('id') === 'circle') ||
                    (mybox[0].getAttribute('id') === 'circle' && mybox[4].getAttribute('id') === 'circle' && mybox[8].getAttribute('id') === 'circle') ||
                    (mybox[2].getAttribute('id') === 'circle' && mybox[4].getAttribute('id') === 'circle' && mybox[6].getAttribute('id') === 'circle')){
                    console.log('2nd won');
                    alert('2nd won')
                }else if((mybox[0].getAttribute('id') === 'cross' && mybox[1].getAttribute('id') === 'cross' && mybox[2].getAttribute('id') === 'cross') ||
                        (mybox[3].getAttribute('id') === 'cross' && mybox[4].getAttribute('id') === 'cross' && mybox[5].getAttribute('id') === 'cross') ||
                        (mybox[6].getAttribute('id') === 'cross' && mybox[7].getAttribute('id') === 'cross' && mybox[8].getAttribute('id') === 'cross') ||
                        (mybox[0].getAttribute('id') === 'cross' && mybox[3].getAttribute('id') === 'cross' && mybox[6].getAttribute('id') === 'cross') ||
                        (mybox[1].getAttribute('id') === 'cross' && mybox[4].getAttribute('id') === 'cross' && mybox[7].getAttribute('id') === 'cross') ||
                        (mybox[2].getAttribute('id') === 'cross' && mybox[5].getAttribute('id') === 'cross' && mybox[8].getAttribute('id') === 'cross') ||
                        (mybox[0].getAttribute('id') === 'cross' && mybox[4].getAttribute('id') === 'cross' && mybox[8].getAttribute('id') === 'cross') ||
                        (mybox[2].getAttribute('id') === 'cross' && mybox[4].getAttribute('id') === 'cross' && mybox[6].getAttribute('id') === 'cross')){
                        console.log('1nd won');
                        alert('1st won')
                        }
            });

        }






        

    function playernaming() {
    let player1st = document.getElementById("1stplayername").value;
    let player2nd = document.getElementById("2ndplayername").value;
    
    document.getElementById("player1").innerHTML = `<h3>${player1st}- X</h3>`
    document.getElementById("player2").innerHTML = `<h3>${player2nd}- O</h3>`
    }











        document.addEventListener("DOMContentLoaded", function() {
      var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
      myModal.show();
    });