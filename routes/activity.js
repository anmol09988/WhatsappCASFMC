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

    var authorizationtoken = 'EAAFoGCDT8BIBAErDSafZAv4mc74gwU4ZCrfJ86DXpVMebXcJB7ZBN84ZBdWc1KPG9Tc4HjKUlj6I5jbLuaiZC506ZCI685W11QXNdlvunDMSCe8D93l39PiUjwSt7jBYTTYWLN11hjpm2y1xTm1XNkOOIPRNLp5yvOOBZCycUDXEYLgujTl5T76fSdU562XHth0eTRn4LTa8zq4gMyA6YaA';

    var journyTrigger = require('request');
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
    };

    journyTrigger({
        headers: {
            'Authorization': bearerToken,
            'Content-Type': 'application/json'
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
function check () {
    get.property('getfunction_realey');
    get.function('Inner_caller_function');
    get.function('toloadfunction');
    get.retry('property');

}