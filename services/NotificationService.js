const nodemailer = require('nodemailer')

const sendEmailNotification = async (email, subject, message) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })
    
    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: subject,
        text: message
    }

    await transporter.sendMail(mailOptions)
}

const sendMobileNotification = async (mobile, message) => {
    // mobile notification code comes here
}

module.exports = {
    sendEmailNotification,
    sendMobileNotification
}