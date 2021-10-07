function extract(content) {
    const text = document.getElementById(content).textContent;
    let result = '';

    const regEx = /\((.+?)\)/g;

    let match = regEx.exec(text);

    while (match != null) {
        result += match[1];
        result += '; ';

        match = regEx.exec(text);
    }

    return result;
}