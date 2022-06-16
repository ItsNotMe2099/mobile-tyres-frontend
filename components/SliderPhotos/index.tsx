import styles from './index.module.scss'
import Slider from "react-slick";
import Slide from './Slide';
import SliderControlPhotos from 'components/ui/SliderControlPhotos';


interface Props {

}

export default function SliderPhotos(props: Props) {

  const settings = {
    dots: true,
    arrows:true,
    nextArrow: <SliderControlPhotos direction="next"/>,
    prevArrow: <SliderControlPhotos direction="prev"/>,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: false,
    adaptiveHeight: false,
    dotsClass: `${styles.dots}`,
    responsive: [
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
  };

  const photos = [{photo: '/img/photos/Rectangle29.png'}, {photo: '/img/photos/newimage.jpg'},
  {photo: '/img/photos/Rectangle31.png'}, {photo: '/img/photos/Rectangle32.png'}, {photo: '/img/photos/Rectangle33.png'}]

  return (
    <body className={styles.green}>
    <div className={styles.root}>
      <div className={styles.title}>
        Фотографии клиентов
      </div>
      <Slider {...settings}>
        {photos.map(item => <Slide image={item.photo}/>)}
      </Slider>
    </div>
    </body>
  )
}
