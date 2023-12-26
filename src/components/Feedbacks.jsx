import {motion} from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant} from '../utils/motion'
import { testimonials  } from '../constants'
import { useState } from 'react'

const FeedbacksCard = ({index, testimonial,name, designation, company, image}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'>
      <p className='text-white font-black text-[48px]'>"</p>
      <div className='mt-1'>
        <p className={`text-white tracking-wider text-[10px] ${expanded ? 'overflow-visible' : 'overflow-hidden h-20'}`}>
          {testimonial}
        </p>
        {testimonial.length > 20 && (
          <button
            onClick={toggleExpanded}
            className='text-blue-500 text-xs cursor-pointer focus:outline-none '>
            {expanded ? 'Read Less' : 'Read More'}
          </button>
        )}
        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[16px]'>
              <span className='blue-text-gradient'>@</span>
              {name}
            </p>
            <p className='mt-1 text-secondary text-[12px]'>{designation} at {company}</p>
          </div>
          <img
            src={image}
            alt={`Feedback by ${name}`}
            className='w-10 h-10 rounded-full object-cover'
          />
        </div>
      </div>
    </motion.div>
  )
}


const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
    <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]` }>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What Other Say</p>
      <h2 className={styles.sectionHeadText}>Testimonials.</h2>
      </motion.div>


    </div>
    <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
      {testimonials.map((testimonial,index) => ( 
        <FeedbacksCard key={testimonial.name} index={index} {...testimonial}/>
      ) )}
    </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "")