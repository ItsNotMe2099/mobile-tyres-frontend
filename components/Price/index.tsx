import styles from './index.module.scss'


interface Props {
  id?: string
}

export default function Price(props: Props) {

  /*const options = [{label: 'Стоимость 1км выезда', price: '350 руб.'}, {label: 'Ремонт дисков', price: '3 000 руб.'},
  {label: 'Срочный ремонт', price: '5 350 руб.'}, {label: 'Ремонт за пределами Москвы', price: '2 250 руб.'},
  {label: 'Переобувка', price: '850 руб.'}, {label: 'Хранение шин', price: '6 550 руб.'},
  {label: 'Выезд в ночное время', price: '750 руб.'}, {label: 'Ремонт шин', price: '1 500 руб.'},
  {label: 'Ремон в пределах Москвы', price: '2 000 руб.'}]*/

  const options = [
    {label: 'Выезд в дневное время', price: 'от 600 руб.'}, {label: 'Выезд в ночное время', price: '750 руб.'}, 
    {label: 'Ремонт прокола', price: 'от 1500 руб.'}, {label: 'Ремонт пореза', price: 'от 1 800 руб.'},
    {label: 'Замена шин', price: 'от 2 000 руб.'}, {label: 'Выезд за МКАД', price: 'от 900 руб + 20 руб. за 1км'},
  ]

  return (
    <div className={styles.root} id={props.id}>
      <div className={styles.title}>
        Средняя стоимость услуг
      </div>
      <div className={styles.prices}>
        {options.map(item =>
          <div className={styles.option}>
            <div className={styles.label}>
              {item.label}
            </div>
            <div className={styles.price}>
              {item.price}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
