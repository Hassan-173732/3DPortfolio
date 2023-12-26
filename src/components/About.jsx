import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index,title,icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
      variants={fadeIn("right","spring",0.5 * index,0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div 
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px]
        py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col]'
        >
        <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )

}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText}>Overview.</h2>

    </motion.div>

    <motion.p variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
🚀 Hi there! I'm a passionate full-stack developer with a knack for crafting beautiful websites. My academic background in Computer Science, combined with a strong foundation in science and engineering, brings a unique perspective to my coding endeavors. 🎓 Self-taught and armed with over two years of experience, I specialize in building .NET C# applications. 💻 My skills extend to both SQL and NoSQL databases, and I'm well-versed in cloud technologies, having danced with Azure and AWS. ☁️ Always eager to learn and stay ahead in tech trends, I contribute my skills and enthusiasm to innovative projects, creating digital magic along the way! ✨🚀 Let's build something awesome together! 🚧🛠️</motion.p>
    <div className='mt-6 flex flex-wrap gap-10'>
    {services.map((services,index) =>(
      <ServiceCard key = {services.title} index={index} {...services}/>
    ))}
    </div>
    </>
  )
}

export default SectionWrapper(About,"about")