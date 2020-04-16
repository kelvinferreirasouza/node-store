'use strict';
const config = require('../config');
const sgMail = require('@sendgrid/mail');


exports.send = async (to, subject, body) => {
    sendgrid.send({
        to: to,
        from: 'kelvinferreirasouza1@gmail.com',
        subject: subject,
        html: body
    });
}