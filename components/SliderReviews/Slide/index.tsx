import styles from './index.module.scss'
import StarRatings from 'react-star-ratings'

interface IItem{
  avatar?: string
  name: string
  rating: number
  text: string
}


interface Props {
  item: IItem
}

export default function Slide(props: Props) {

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <div className={styles.avatar}>
          <img src={'/img/photos/avatar.svg'} alt=''/>
        </div>
        <div className={styles.info}>
          <div className={styles.name}>{props.item.name}</div>
          <StarRatings
            rating={props.item.rating}
            starRatedColor="#FFA800"
            starEmptyColor="#636363"
            svgIconPath="M7.5 0L9.66011 4.52686L14.6329 5.18237L10.9951 8.63564L11.9084 13.5676L7.5 11.175L3.09161 13.5676L4.00487 8.63564L0.367076 5.18237L5.33989 4.52686L7.5 0Z"
            svgIconViewBox="0 0 15 14"
            starDimension="15px"
            starSpacing="0"
            numberOfStars={5}
          />
        </div>
      </div>
      <div className={styles.text}>
        {props.item.text}
      </div>
    </div>
  )
}
