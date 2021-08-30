import ErrorInput from '../components/ErrorInput'
import styles from './index.module.scss'
import {FieldConfig, useField} from 'formik'
import cx from 'classnames';
interface Props {
  label?: string
  hasError?: boolean
  style?: 'normal' | 'large'
}

export default function Label(props: Props) {
  const { label, hasError, style } = props;
  if(!label){
    return null;
  }
  return (<div className={cx(styles.root, {
    [styles.error]: hasError,
    [styles.large]: style === 'large'
  })}>{label}</div>)
}
Label.defaultProps = {
  style: 'normal',
}