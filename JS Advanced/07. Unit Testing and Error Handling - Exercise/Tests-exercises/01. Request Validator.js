function validateRequest(obj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriRegEx = /^[\w.]+$/;
    const msgRegEx = /([<>\\&'"])/;

    let invalidPart = '';

    if (!obj.method || !validMethods.includes(obj.method)) {
        invalidPart = 'Method';
    } else if (!obj.uri || !uriRegEx.test(obj.uri)) {
        invalidPart = 'URI';
    } else if (!obj.version || !validVersions.includes(obj.version)) {
        invalidPart = 'Version';
    } else if (obj.message == undefined || msgRegEx.test(obj.message)) {
        invalidPart = 'Message';
    }

    if (invalidPart == '') {
        return obj;
    } else {
        throw Error(`Invalid request header: Invalid ${invalidPart}`);
    }
}

const request1 = {
    method: 'GET',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: ''
};

const request2 = {
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
};

console.log(validateRequest(request1));
console.log(validateRequest(request2));