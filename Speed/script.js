let modal = document.getElementById("form");
let btn = document.getElementById("openBtn");
let span = document.getElementsByClassName("close")[0];


btn.addEventListener('click', function() {
    modal.style.display = 'block';
});


span.addEventListener('click', function() {
    modal.style.display = 'none';
});


window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});


document.getElementById('speedForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let licenseNumber = document.getElementById('licenseNumber').value;
    let speed = Number(document.getElementById('speed').value);

    
    let exceed = function max() {
        const speedExceed = 5;
        const recommendedSpeed = 70;
        const maxPoints = 12;
        const speedDifference = speed - recommendedSpeed;
        const pointsLost = Math.floor(speedDifference / speedExceed);

        if (speed <= recommendedSpeed) {
            alert(`License number ${licenseNumber} is good to go`);
        } else if (pointsLost >= maxPoints) {
            alert(`License number ${licenseNumber} is suspended`);
        } else {
            alert(`Deduct ${pointsLost} points from license number ${licenseNumber}\nRemainder points: ${maxPoints - pointsLost}`);
        }
    }
    exceed();
});

