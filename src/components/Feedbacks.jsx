import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'

const FeedbackCard = ({ index, testimonial, name, designation, company, image, link }) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    whileInView="show"
    initial="hidden"
    viewport={{ once: true, amount: 0.3 }}
    className="flex w-full flex-col justify-between rounded-3xl bg-black-200 p-10 xs:w-[320px]"
  >
    <div>
      <p className="text-[48px] font-black text-white">"</p>
      <p className="self-start text-[18px] tracking-wider text-white">{testimonial}</p>
    </div>

    <div className="mt-1">
      <div className="mt-7 flex items-center justify-between gap-1">
        <div className="flex flex-1 flex-col">
          <a href={link} target="_blank" className="text-[16px] font-medium text-white transition-all hover:text-blue-300">
            <span className="blue-text-gradient">@</span> {name}
          </a>
          <p className="mt-1 text-[12px] text-secondary">
            {designation} of {company}
          </p>
        </div>

        <img src={image} alt={`feedback_by-${name}`} className="h-10 w-10 rounded-full object-cover" />
      </div>
    </div>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className={`mt-12 rounded-[20px] bg-black-100`}>
      <div className={`rounded-2xl bg-tertiary ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()} whileInView="show" initial="hidden" viewport={{ once: true, amount: 0.3 }}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, 'feedback')
