import styles from './index.module.scss';

export const LoaderWidget =({active})=> {
  if (!active) return null;
  return (
    <div className={styles.loader} />
  )
}
