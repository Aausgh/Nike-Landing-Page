import { useRef, useState } from "react";

import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { heroShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";
import { useInView, motion } from 'framer-motion'

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(heroShoe1);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: -500, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container' ref={ref}
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer collections
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-pale-blue xl:whitespace-nowrap rounded-3xl relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className=' inline-block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-coral-red to-blue-900'>Nike</span> Shoes
        </h1>

        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label='Shop now' iconURL={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center rounded-b-xl'
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.8 }}
      >
        <img
          src={bigShoeImg}
          alt='shoe colletion'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index} >
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
