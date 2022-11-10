'use strict';
var util = require('util');

const Path = require('path');
const JWT = require(Path.join(__dirname, '..', 'lib', 'jwtDecoder.js'));
var http = require('https');
const { rejects } = require('assert');
const { Console } = require('console');
const { STATUS_CODES } = require('http');

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

    var authorizationtoken = 'EAAFoGCDT8BIBABJZCegg3Ae4O6ZCOY7JGKMZBEBcTZBrFzvUtTZBOG8YEqLwOf5netO9pJsHZBN394aFIwpww3hDtFjVvkKAiXTiy0J0Y8muZBSZBp8kmK6b3JPbdxJR58gts2AunxVueEXK3xMZCVCMM6IQ9AkxKd62FeTKyR5YpOPACOwDOiZAY4';

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
            url: " https://graph.facebook.com/v15.0/107909608687000/messages",
            method: "POST",
            json: true,
            body: journeyBody
        }, function (error, res, body) {
             // statusCode = res;
             var auth = JSON.parse(JSON.stringify(res.body))
              console.log(auth);

        });


    logData(req);
    res.send(200, 'Validate');
};
