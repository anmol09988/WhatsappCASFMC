'use strict';
var util = require('util');

const Path = require('path');
const JWT = require(Path.join(__dirname, '..', 'lib', 'jwtDecoder.js'));
var http = require('https');
const { rejects, ifError } = require('assert');
const { get } = require('http');
const { Console } = require('console');
const { rootCertificates } = require('tls');
const { Http2ServerRequest } = require('http2');
const { threadId } = require('worker_threads');

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

    console.log('INVALIDATEFUNCTION');

    var journyTrigger = require('request');
    var authorizationtoken = 'EAAFoGCDT8BIBABEpZAaujP4y5epytjwZCT5qzGF6NDrHTRQgLO4BsmibruycZA2uieiZBVqnMYVtPZAbX9ymmL3SQJjCFhUgMufwoYtcx1NljWZAGpmlc6XKrcywBIz4tqRZBZBIxStKH1iViAZBYKURQyRmO5ru01T5PMZB8zqwzx2jZBIfmPbmZA95xpLk4kq6px5QfsS2ZAGZAMLOvUSNti8p13';
    var bearerToken = 'Bearer ' + authorizationtoken;
  
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
    }

    journyTrigger({
        headers: {
            'Authorization': bearerToken,
            'Content-Type': 'application/json'
        },
        url: "https://graph.facebook.com/v13.0/107909608687000/messages",
        method: "POST",
        json: true,
        body: journeyBody
    }, function (error, res, body) {
        statusCode = res.statusCode;
        var authorizationtokensss = JSON.stringify(res.body);
        console.log('statusCode'+statusCode);
        console.log('authorizationtokensss'+authorizationtokensss);
    });
    logData(req);
    res.send(200, 'Validate');
};