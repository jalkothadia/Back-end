import React from 'react'

export async function Getdoctor(id: string){
    const res = await fetch(`https://689b39f5e727e9657f6440f9.mockapi.io/doctor/${id}`,{
        cache: 'no-store'
    });
    return res.json()
}

export  async function Getbyid({ params }: { params: Promise<{ id : string}>}) {
    const { id } = await params;
    const docdata = await Getdoctor(id)
  return (
    <div>
      <h1>Get all doctors</h1>
      <ul>
        {docdata.id} - {docdata.name}
      </ul>
    </div>
  )
}

export  async function Getbyidanddelete({ params }: { params: Promise<{ id : string}>}) {
    const { id } = await params;
    await fetch(`https://689b39f5e727e9657f6440f9.mockapi.io/doctor/${id}`,{
      method : "DELETE",
      cache : 'no-store'
    })
  return (
    <div>
      <h1>Get all doctors</h1>
      <ul>
        <li><p>Doctor deleted</p></li>
        <li></li>
      </ul>
    </div>
  )
}

