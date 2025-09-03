import SectionTitle from "../component/SectionTitle";
import ContactImage from '../../src/assets/contact.svg'
import { contactDetails } from "../contens";
import ContactDetailedCard from "../component/ContactDetailedCard";

const Contact = () => {
    return (
      <div className="px-4 py-16 lg:py-20" id="contact">
        <SectionTitle title="Contact Me" />
        <div className="container mt-10 flex flex-col gap-10 rounded-2xl border-2 border-white/10 bg-white/5 md:flex-row hover:shadow-lg hover:shadow-purple-300 hover:duration-[300ms] hover:ease-in-out">
          <div className="flex flex-1 items-center justify-center">
            <img src={ContactImage} alt="Contact image" className="h-40" />
          </div>
          <div className="flex flex-1 flex-col items-center gap-5">
            <h1 className="font-serif text-2xl font-bold text-white/70">
              Get in Touch
            </h1>
            <p className="text-white/60">
              Thank you for checking out my profile! If you're looking for a
              reliable, skilled .NET Core developer for your team or project,
              let’s connect. I’m open to exciting opportunities and would be
              happy to chat further.
            </p>
            <div className="flex flex-col items-start justify-start gap-4">
              {contactDetails.map((contact, index) => (
                <div key={index}>
                  <ContactDetailedCard contact={contact} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );    
}
export default Contact;
