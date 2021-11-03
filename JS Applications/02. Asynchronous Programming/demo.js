console.log("Hello.");

setTimeout(function () {
    console.log("Goodbye!");

    setTimeout(function () {
        console.log("Goodbye2!");
    }, 500);
}, 5000);

console.log("Hello again!");
