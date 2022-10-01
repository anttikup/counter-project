(() => {
    
    let count = 0;

    const value = document.querySelector('#value');
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', e => {
            const classes = e.currentTarget.classList;
            if (classes.contains('decrease')) {
                count--;
            } else if (classes.contains('increase')) {
                count++;
            } else if (classes.contains('reset')) {
                count = 0;
            }

            value.textContent = count;

            if (count > 0) {
                value.style.color = "green";
            } else if (count < 0) {
                value.style.color = "red";
            } else {
                // Use the value defined in css file
                value.style.color = null;
            }
        });
    });

})();

