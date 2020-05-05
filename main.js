const clock = () => {
    let seconds = 0;
    
    const timer = () =>{
        seconds++;
        document.body.textContent = seconds
    }
    return timer
}

const start = clock();

setInterval(start, 1000)