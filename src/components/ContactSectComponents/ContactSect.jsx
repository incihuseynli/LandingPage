import SectionHead from "../HeaderComponents/SectionHead";
import RevealAnimation from "../RevealAnimation.jsx";
import ContactForm from "./ContactForm.jsx";
const ContactSect = () => {
  return (
    <section
      className="py-24 px-4 md:px-8 lg:px-16
    flex flex-col gap-16
    "
    >
      <div
        className="flex flex-col gap-6 lg:flex-row 
      lg:items-center "
      >
        <div className="flex flex-col gap-4 w-full">
          <SectionHead
            sectName="Bizimlə əlaqə"
            title="Satış Komandamızla əlaqə saxlayın"
          />
          <RevealAnimation>
            <p className="font-poppins text-lg text-primary-blue-900 tracking-wider">
              Agentlərimiz virtual və şəxsi ziyarətlər üçün əlçatandır.
            </p>
          </RevealAnimation>
        </div>
        <div className="font-poppins  text-primary-blue-900 tracking-wider lg:-ml-96">
          <RevealAnimation>
            <span className="text-lg">Mesajınızı birbaşa göndərin</span>
          </RevealAnimation>
          <RevealAnimation>
            <h6 className="text-2xl lg:mt-6 lg:mb-2">Hello@info.com</h6>
          </RevealAnimation>
        </div>
      </div>

      {/* ======================== Grid Form =============================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4 ">
        <ContactForm />
        <img src="./contactImg.png" alt="Bizimlə əlaqə saxlayın" />
      </div>
    </section>
  );
};

export default ContactSect;
