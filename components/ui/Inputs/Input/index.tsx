import ErrorInput from '../components/ErrorInput'
import styles from './index.module.scss'
import {FieldConfig, useField} from 'formik'
import cx from 'classnames';
import BaseInput from 'components/ui/Inputs/BaseInput'
import Label from 'components/ui/Inputs/Label'
import {ReactElement} from 'react'
interface Props {
  label?: string,
  placeholder?: string
  disabled?: boolean
  className?: string
  inputClassName?: string
  icon?: ReactElement
}

export default function Input(props: Props & FieldConfig) {
  const {label, placeholder, className, inputClassName, icon} = props;
  const [field, meta] = useField(props)
  const hasError = !!meta.error && meta.touched;
  return (
    <div className={cx(styles.root, className, {[styles.hasError]: !!meta.error && meta.touched})}>
      <Label label={label} hasError={hasError}/>
      <BaseInput {...field} icon={icon} className={inputClassName} disabled={props.disabled} placeholder={placeholder} hasError={hasError}/>
      <ErrorInput {...meta}/>
    </div>
  )
}
