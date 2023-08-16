import styles from './index.module.scss';

function Loader({active}) {
  if (!active) return null;
  return (
    <div className={styles.loader} />
  )
}

export default Loader