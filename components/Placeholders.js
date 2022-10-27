import styles from '../styles/Placeholders.module.css'


export default function Placeholders({
  number
}) {
  const rows = []
  for (let i = 0; i < number; i ++) {
    rows.push(
      <div
        className={styles.grayLoadingStyle}
        key={i}
      />
    )
  }
  return rows
}