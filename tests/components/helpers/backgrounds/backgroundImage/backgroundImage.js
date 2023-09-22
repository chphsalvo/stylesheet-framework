import styles from './backgroundImage.module.scss'

export default function BackgroundImage() {
  return (
    <div className="flex middle">
      <div className="col col-x2">
        <div className="bg-img aspect-square" style={{ backgroundImage: "url('https://picsum.photos/id/257/1920/1080')" }}></div>
      </div>
      <div className="col col-x2">
        <div className="bg-img aspect-video" style={{ backgroundImage: "url('https://picsum.photos/id/257/1920/1080')" }}></div>
      </div>
    </div>
  )
}