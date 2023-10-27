    // Function to change background color
    function changeBackgroundColor() {
        const randomIndex = Math.floor(Math.random() * colors.length);
        const color = colors[randomIndex];
        document.body.style.backgroundColor = color;
    }

    // Change background color every 5 seconds
    setInterval(changeBackgroundColor,1000);
