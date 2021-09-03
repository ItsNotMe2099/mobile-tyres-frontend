import styles from './index.module.scss'


interface Props {
  image: string
}

export default function Slide(props: Props) {

  return (
    <div className={styles.root}>
      <img src={props.image} alt=''/>
    </div>
  )
}
