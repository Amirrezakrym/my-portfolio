import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'

const ServiceCard = ({ index, title, icon, label }) => (
  <Tilt className="flex min-w-[250px] max-w-[250px] transition-all ease-linear">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      whileInView="show"
      initial="hidden"
      viewport={{ once: true, amount: 0.3 }}
      className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary p-5"
      >
        <img src={icon} alt="web-development" className="mx-auto h-16 w-16 object-contain" />
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-sm font-bold text-white">{label}</h3>
          {label === 'GitHub' ? (
            <a target="_blank" href="https://github.com/Amirrezakrym" className="text-sm font-bold text-[#ccc]">
              {title}
            </a>
          ) : label === 'LinkedIn' ? (
            <a target="_blank" href="https://www.linkedin.com/in/amirreza-karim-modini" className="text-sm font-bold text-[#ccc]">
              {title}
            </a>
          ) : (
            <p className="text-xs font-bold text-[#ccc]">{title}</p>
          )}
        </div>
      </div>
    </motion.div>
  </Tilt>
)

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} whileInView="show" initial="hidden" viewport={{ once: true, amount: 0.3 }}>
        <p className={styles.sectionSubText}>About me and contact me</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} whileInView="show" initial="hidden" viewport={{ once: true, amount: 0.3 }} className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary">
        I'm a passionate software developer with a strong focus on Next.js, React, and TypeScript. I specialize in building intuitive, responsive web applications and enjoy collaborating with clients
        to create scalable, efficient solutions that make a real impact. I'm always excited to learn new technologies and take on new challenges. Let's work together to bring your vision to life!
      </motion.p>

      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10 lg:flex-nowrap">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
