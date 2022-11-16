'use strict';
var util = require('util');

const Path = require('path');
const JWT = require(Path.join(__dirname, '..', 'lib', 'jwtDecoder.js'));
var http = require('https');
const { rejects } = require('assert');
const { Console, debug } = require('console');
const { STATUS_CODES } = require('http');
const { get } = require('request');
const { checkPrime, getRandomValues } = require('crypto');
const { PassThrough } = require('stream');
const { BADFLAGS } = require('dns');
const { platform } = require('os');

var authorizationtoken;
var statusCode;

exports.logExecuteData = [];

function logData(req) {
    exports.logExecuteData.push({
        body: req.body,
        headers: req.headers,
        trailers: req.trailers,
        method: req.method,
        url: req.url,
        params: req.params,
        query: req.query,
        route: req.route,
        cookies: req.cookies,
        ip: req.ip,
        path: req.path,
        host: req.host,
        fresh: req.fresh,
        stale: req.stale,
        protocol: req.protocol,
        secure: req.secure,
        originalUrl: req.originalUrl
    });

}

exports.edit = function (req, res) {
    logData(req);
    res.send(200, 'Edit');
};

exports.save = function (req, res) {
    console.log(req.body);
    logData(req);
    res.send(200, 'Save');
};

exports.execute = function (req, res) {



    res.send(200, 'Execute');
};

exports.publish = function (req, res) {

    res.send(200, 'Publish');
};

exports.validate = function (req, res) {
    console.log('INVALIDATFUNCTION');

    var authorizationtoken = 'EAAFoGCDT8BIBAJ5lo4evdwqGFMV5ySfpo1Xgc7bwyQQ78k2RkYRzJ5EtZCG05gFmYjT3z8pJqZA7ZCXQji5PzIiupPNYdE5SWSiCxeYgXG5Yw1Ii6JIZCtvyqZAlRaqQe1HPKaOJ2G6leAuWUccVW5XNZBrxZAyrEJ1e7gGPEOzQAuVLqDEiNDP';

    var journyTrigger = require('request');
    var bearerToken = 'Bearer ' + authorizationtoken;
    console.log('bearerToken' + bearerToken);

    var journeyBody = {
        "messaging_product": "whatsapp",
        "to": "919294641435",
        "type": "template",
        "template": {
            "name": "hello_world",
            "language": {
                "code": "en_US"
            }
        }
    };

    journyTrigger({
        headers: {
            'Authorization : ': bearerToken,
            'Content-Type : ': 'application/json'
        },
        url: "https://graph.facebook.com/v15.0/107909608687000/messages",
        method: "POST",
        json: true,
        body: journeyBody
    }, function (error, res, body) {
        var auth = JSON.parse(JSON.stringify(res.body))
        console.log(auth);
    });

    logData(req);
    res.send(200, 'Validate');
};
