import styles from './backgroundImage.module.scss'

export default function BackgroundImage() {
  return (
      <div className="flex middle">
          <div className={styles['bg-img'] + ' col col-x2 bg-img'}
              style={{
                  backgroundImage: "url('https://picsum.photos/id/257/1920/1080')",
                }}></div>

          <div className={styles['bg-img'] + ' col col-x2 bg-img'}
          style={{
                  backgroundImage: "url('https://picsum.photos/id/257/1920/1080')",
                }}></div>
      </div>
  )
}