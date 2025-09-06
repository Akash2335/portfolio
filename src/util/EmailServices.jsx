// Import the emailjs library
import emailjs from "@emailjs/browser";
import { emailConfig } from "../contens";

// ✅ Initialize EmailJS once
emailjs.init(emailConfig.PUBLIC_KEY); // Replace with your actual public key

// ✅ Cleaned-up EmailDetails class
class EmailDetails {
  constructor(title, to_email, from_email, name, message) {
    this.title = title;
    this.to_email = to_email;
    this.from_email = from_email;
    this.name = name;
    this.message = message;
  }
}

// ✅ EmailServices class for sending mail
class EmailServices {
  constructor(serviceId, templateId) {
    this.ServiceId = serviceId;
    this.TemplateId = templateId;
  }

  sendMail(formData) {
    return new Promise((res, rej) => {
      emailjs
        .send(this.ServiceId, this.TemplateId, formData)
        .then((rep) => {
          
          res(rep);
        })
        .catch((err) => {

          rej(err);
        });
    });
  }
}

// ✅ Export classes individually
export { EmailServices, EmailDetails };
