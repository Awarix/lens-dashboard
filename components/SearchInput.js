import React from 'react'
import styles from '../styles/SearchInput.module.css'

export default function SearchInput({
    placeholder, onChange, value, onKeyDown = null
  }) {

    return (
      <input
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={styles.inputStyle}
        onKeyDown={onKeyDown}
      />
    )
  }