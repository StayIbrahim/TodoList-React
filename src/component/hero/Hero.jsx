
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'



function Hero() {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
       <h1 className={styles.title}>Hi, i'm  IbraDev</h1>
       <p className={styles.description}>
        i'm  fullstack developer  with 2 years of experience
        Reach out if you'd like to learn more !
       </p>
       <a href="" className={styles.contactebtn}>contact me</a>
    </div>
    <img src={getImageUrl("hero/image.jpg")} alt="" className={styles.heroimg}/>
     <div className={styles.topblure}/>
    <div className={styles.bottomblure}/>
  </section>

  )
}


export default Hero
