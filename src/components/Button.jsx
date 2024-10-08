import React from 'react'

export default function Button({flexStyle,text,normalStyle,Portal,img}) {
  return (
   
    <button onClick={Portal} className={normalStyle}>{img}{text}</button>

  )
}
