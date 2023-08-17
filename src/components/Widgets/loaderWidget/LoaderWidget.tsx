import styles from './LoaderWidget.module.scss';

function LoaderWidget({ active }) {
  if (!active) return null;
  return (
    <div className={styles.loader} />
  )
}
export default LoaderWidget;
