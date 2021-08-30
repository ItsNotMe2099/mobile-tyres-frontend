import ErrorInput from '../components/ErrorInput'
import styles from './index.module.scss'
import {FieldConfig, useField} from 'formik'
import debounce from 'lodash.debounce';
import InputMask from 'react-input-mask'
import cx from 'classnames';
import {ReactElement} from 'react'
interface Props {
  placeholder?: string,
  hasError?: boolean
  value?: any
  onChange: (value) => void
  onBlur: (e) => void
  type?: string
  mask?: string
  disabled?: boolean
  alwaysShowMask?: boolean
  maskChar?: string
  onKeyPress?: (e) => void
  className?: string
  icon?: ReactElement
}

export default function BaseInput(props: Props) {
  const { placeholder, value, onChange, hasError, className, icon} = props;
  const renderInput = (inputProps = {}) => {
    return (<div className={styles.root}>
      <input  {...inputProps} className={cx(styles.input, className, {[styles.error]: hasError, [styles.withIcon]: !!icon})} autoComplete={'off'} autoCorrect="off"  placeholder={placeholder} disabled={props.disabled}/>
      <div className={styles.icon}>{icon}</div>
    </div>)
  }
  return props.mask ? (
    <InputMask mask={props.mask}  disabled={props.disabled} value={props.value} onChange={props.onChange}    maskPlaceholder={null}  alwaysShowMask={props.alwaysShowMask}   maskChar={props.maskChar}>
      {(inputProps) => renderInput(inputProps)}
    </InputMask>
  ) : renderInput(props);


}
