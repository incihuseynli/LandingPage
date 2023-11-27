import { Helmet } from "react-helmet";
import ContactForm from "../components/ContactSectComponents/ContactForm";
import { motion } from "framer-motion";
import RevealAnimation from "../components/RevealAnimation";
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Əlaqə</title>
        <meta name="description" content="Bizimlə əlaqə qurun" />
      </Helmet>
      <motion.main
        className="pt-6 pb-24 px-4 md:px-8 lg:px-16 flex flex-col items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {/* ===================== PAGE TITLE =========================== */}

        <RevealAnimation>
          <h4 className="text-5xl text-center font-bold text-primary-blue-800 tracking-wider pb-5 max-w-fit mb-14 ">
            Əlaqə
          </h4>
        </RevealAnimation>

        {/* ===================== FORM =========================== */}
        <div className="flex flex-col gap-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4 ">
            <ContactForm />
            <RevealAnimation>
              <img src="./contactImg.png" alt="Bizimlə əlaqə saxlayın" />
            </RevealAnimation>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default Contact;
