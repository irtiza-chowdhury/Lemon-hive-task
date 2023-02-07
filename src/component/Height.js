import React from 'react'

export default function Height(basic) {
  return (
    <>
    {basic?.map((item)=>(
    <div className="singlePage-card-value" key={item.id}>
        {item.height} 2&apos;04&quot;
    </div>

    ))}
    </>
  )
}
