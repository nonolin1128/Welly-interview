// 導入react中的使用狀態勾子

import { useState } from 'react'

export default function Test05() {
  // 宣告狀態
  // [獲得值的變數, 設定值的函式] = useState(初始值)
  const [total, setTotal] = useState(0)

  return (
    <div>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -
      </button>
    </div>
  )
}
