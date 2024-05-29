function numFromTo(initial, end) {
    let current = initial;
    let timerId = setInterval(function () {
        console.log(current);
        if (current == end) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

numFromTo(5, 15);
