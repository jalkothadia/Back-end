import React from 'react'
async function Das({params}:{params: Promise<{id:String}>}) {
    const {id} = await params
  return (
    <div>
      <h2>hello this is DashBoard Page {id}</h2>
    </div>
  )
}

export default Das