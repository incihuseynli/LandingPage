import { motion } from "framer-motion";
import RevealAnimation from "../components/RevealAnimation";
const PageNotFound = () => {
  return (
    <motion.main
      className="px-4 md:px-8 lg:px-16 py-8 flex flex-col gap-8 items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <RevealAnimation>
        <h4 className="text-3xl font-medium text-primary-blue-400 tracking-wider">
          Axtardığınız səhifə tapılmadı.
        </h4>
      </RevealAnimation>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center place-items-center">
        <div className="flex flex-col gap-4">
          <RevealAnimation>
            <h6 className="text-lg uppercase font-bold text-primary-blue-800 tracking-wide">
              Mümkün problemlər :
            </h6>
          </RevealAnimation>
          <ul className="list-disc list-inside text-base font-medium tracking-wider text-primary-blue-800 flex flex-col gap-2">
            <RevealAnimation>
              <li>Səhifə silinib,</li>
            </RevealAnimation>
            <RevealAnimation>
              <li>Dəyişdirilib</li>
            </RevealAnimation>
            <RevealAnimation>
              <li>Və ya mövcud deyildir.</li>
            </RevealAnimation>
          </ul>
          <RevealAnimation>
            <p className="text-sm font-semibold text-secondary-red-500 italic">
              Saytdan keyfiyyətli faydalanmaq üçün menudan istifadə edin.
            </p>
          </RevealAnimation>
        </div>

        <RevealAnimation>
          <img src="./404Gif.gif" alt="404 error gif" className="w-full h-96" />
        </RevealAnimation>
      </div>
    </motion.main>
  );
};

export default PageNotFound;
