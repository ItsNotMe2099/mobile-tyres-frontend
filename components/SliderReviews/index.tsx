import styles from './index.module.scss'
import Slider from "react-slick";
import Slide from './Slide';
import SliderControl from 'components/ui/SliderControl';


interface Props {

}

export default function SliderReviews(props: Props) {

  const reviews = [
  {avatar: '/img/test/avatar.png', name: 'Иван Ерохин', rating: 4, 
  text: 'Позитивный, улыбчивый, альтруистичный мастер - быстро приехал, забрав шины из магазина, на мобильном шиномонтаже, быстро, чисто и качественно выполнил работу. Настоящий профессионал! Рекомендую!'},
  {avatar: '/img/test/avatar.png', name: 'Слава Сычев', rating: 4, 
  text: 'Ехал на шиномонтаж , пока ехал с машиной случился казус 🤣🤣🤣 Такое бывает техника же. Ребята выручили , сделали всё взяли адекватных денег .'},
  {avatar: '/img/test/avatar.png', name: 'Екатерина Енотова', rating: 4, 
  text: 'У Никиты хороший инструмент , что немало важно для шиномонтажа, были сложности с парой гаек, но Никита быстро все решил!'},
  {avatar: '/img/test/avatar.png', name: 'Екатерина Енотова', rating: 4, 
  text: 'Работы по шиномонтажу выполнены оперативно, сотрудники доброжелательны и вежливы. Все понравилось, удобно.'
  },
  {avatar: '/img/test/avatar.png', name: 'Екатерина Енотова', rating: 4, 
  text: 'Вполне себе хороший гаражный сервис. Цены на шиномонтаж на 30% ниже остальных. Сделал сезонную смену колёс. Остался доволен.'
  },
  {avatar: '/img/test/avatar.png', name: 'Екатерина Енотова', rating: 4, 
  text: 'Требовался срочный выездной шиномонтаж: ребята откликнулись сразу, приехали быстро. Всё сноровисто сделали – я доволен! На дальние расстояния ещё не ездил, но по работе видно профессионалов и есть уверенность. Спасибо.'
  },
  {avatar: '/img/test/avatar.png', name: 'Екатерина Енотова', rating: 4, 
  text: 'Збс сервис!'
  },
  ]

  const settings = {
    dots: true,
    arrows:true,
    nextArrow: <SliderControl direction="next"/>,
    prevArrow: <SliderControl direction="prev"/>,
    infinite: true,
    speed: 500,
    slidesToShow: reviews.length <= 6 ? reviews.length : 6,
    slidesToScroll: 1,
    variableWidth: false,
    adaptiveHeight: false,
    dotsClass: `${styles.dots}`,
    responsive: [
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
  };

  return (
    <body className={styles.green}>
    <div className={styles.root}>
      <div className={styles.title}>
        Последние отзывы
      </div>
      {reviews.length &&
      <Slider {...settings}>
        {reviews.map(item => <Slide item={item}/>)}
      </Slider>}
    </div>
    </body>
  )
}
