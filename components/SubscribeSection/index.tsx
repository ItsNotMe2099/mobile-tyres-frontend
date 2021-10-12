import styles from './index.module.scss'
import Button from "components/ui/Button"
import {Form, Formik} from 'formik'
import Input from 'components/ui/Inputs/Input'
import {email, required} from 'utils/validations'
import FormError from 'components/ui/Form/FormError'
import {useState} from 'react'

interface Props {

}


export default function SubscribeSection(props: Props) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = async (data) => {

  }
  return (
      <div className={styles.root}>
        {isSuccess && <div className={styles.success}>
            Спасибо! Вы подписались.
        </div>}
        {!isSuccess &&  <Formik
          initialValues={{
            email: null
          }}

          onSubmit={handleSubmit}
        >

          {(formik) =>
            <Form {...formik} className={styles.form}>
              <Input className={styles.inputField} icon={<img src={'/img/icons/emailInput.svg'}/>} inputClassName={styles.input} name={'email'} validate={(value) => required(value) || email(value)} placeholder={'Ваш email'}/>
              <FormError error={error}/>
              <Button type={'submit'} className={styles.button} disabled={isLoading} color='blue' variant="outlined">ПОДПИСАТЬСЯ</Button>
            </Form>}
        </Formik>}

      </div>
  )
}
