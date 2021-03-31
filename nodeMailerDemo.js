var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pratik.kale@walchandsangli.ac.in',
    pass: 'Pratik@2001'
  }
});

var mailOptions = {
  from: 'pratik.kale@walchandsangli.ac.in',
  to: 'siddharth.tandale@walchandsangli.ac.in',
  subject: 'Sending Email using Node.js',
  text: 'Hi i am pratik  and this is a test email so dont worry' 
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});