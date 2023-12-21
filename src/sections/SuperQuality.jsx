import { useRef } from "react";
import { shoe8 } from "../assets/images";
import { Button } from "../components";
import { useInView, motion } from 'framer-motion'

const SuperQuality = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { x: 500, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-coral-red to-blue-900'> Super Quality </span>
          Shoes
        </h2>

        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div className='mt-11'>
          <Button label='View details' />
        </div>

      </div>

      <div className='flex-1 flex justify-center items-center' ref={ref}>
        <motion.img
          src={shoe8}
          alt='product detail'
          width={670}
          height={522}
          className='object-contain p-6'
          variants={cardVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
};

export default SuperQuality;
