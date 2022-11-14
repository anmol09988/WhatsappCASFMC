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


    // const requestBody = req.body.inArguments[0];

    // const SubscriberKey = requestBody.SubscriberKey;
    // const EmailAddress = requestBody.EmailAddress;
    // const eventDefinationKey = requestBody.body;

    // var accessTokenRequest = require('request');
    // var accessTokenGetBody = {
    //     "grant_type": "client_credentials",
    //     "client_id": "ewozgxquu4nriupcx2tylyfl",
    //     "client_secret": "d3BNHjIK6RAZQi7VgbXVYnWw",
    //     "account_id": "526000739"
    // };
    // accessTokenRequest({
    //     url: "https://mch4s3mv5j6r7tyf5xqf8s0-y2wm.auth.marketingcloudapis.com/v2/token",
    //     method: "POST",
    //     json: true,
    //     body: accessTokenGetBody
    // }, function (error, response, body) {
    //     statusCode = response.statusCode;

    //     if (statusCode === 200) {
    //         var authorizationtoken = JSON.parse(JSON.stringify(response.body))['access_token'];
    //         journeyTrigger(authorizationtoken, eventDefinationKey);
    //     }
    // });

    // function journeyTrigger(authorizationtoken, eventDefinationKey) {

    //     var journyTrigger = require('request');
    //     var bearerToken = 'Bearer ' + authorizationtoken;
    //     var eventKey = eventDefinationKey;

    //     var journeyBody = {
    //         "definitionKey": eventKey,
    //         "recipients":
    //             [
    //                 {
    //                     "contactKey": SubscriberKey,
    //                     "to": EmailAddress
    //                 }
    //             ]
    //     };

    //     journyTrigger({
    //         headers: {
    //             'Authorization': bearerToken,
    //             'Content-Type': 'application/json'
    //         },
    //         url: "https://mch4s3mv5j6r7tyf5xqf8s0-y2wm.rest.marketingcloudapis.com/messaging/v1/email/messages",
    //         method: "POST",
    //         json: true,
    //         body: journeyBody
    //     }, function (error, res, body) {

    //     });
    // };

    res.send(200, 'Execute');
};

exports.publish = function (req, res) {

    res.send(200, 'Publish');
};

exports.validate = function (req, res) {
    console.log('INVALIDATFUNCTION');

    const axios = require('axios');

    var authorizationtoken = 'EAAFoGCDT8BIBABbdcRbsDgm33KJBWHPZCuk0aSx90NEXIvfFwWgu2JMzuhQUSxTrfvWtXnUZCw3vwQA3fadgnZCCEd31K87yZBreZCpZCxftZCEmBW09rh8UwgyhnXD0mHj7k1ELfV7CGkpFJaTg5LfMkw0nwGG94AnHlzSw6LQ523eLimx73FBVo40gCzpDEJYSRPtkmRoWHIGukQMOg09';

    // var journyTrigger = require('request');
    var bearerToken = 'Bearer ' + authorizationtoken;
    
   // var data = '{\r\n    "messaging_product": "whatsapp",\r\n    "to": "00000000000",\r\n    "type": "template",\r\n    "template": {\r\n        "name": "hello_world",\r\n        "language": {\r\n            "code": "en_US"\r\n        }\r\n    },\r\n}';

   var data = {
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

    var config = {
        method: 'post',
        url: 'https://graph.facebook.com/v15.0/107909608687000/messages',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearerToken
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

    // var journeyBody = {
    //     "messaging_product": "whatsapp",
    //     "to": "919294641435",
    //     "type": "template",
    //     "template": {
    //         "name": "hello_world",
    //         "language": {
    //             "code": "en_US"
    //         }
    //     }
    // };

    // journyTrigger({
    //     headers: {
    //         'Authorization': bearerToken,
    //         'Content-Type': 'application/json'
    //     },
    //     url: " https://graph.facebook.com/v15.0/107909608687000/messages",
    //     method: "POST",
    //     json: true,
    //     body: journeyBody
    // }, function (error, res, body) {
    //     // statusCode = res;
    //     var auth = JSON.parse(JSON.stringify(res.body))
    //     console.log(auth);

    // });

    logData(req);
    res.send(200, 'Validate');
};
