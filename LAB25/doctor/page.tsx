import React from 'react'

export async function Getdoctor(){
    const res = await fetch("https://689b39f5e727e9657f6440f9.mockapi.io/doctor",{
        cache: 'no-store'
    });
    return res.json()
}

export default async function Getall() {
    const doctors = await Getdoctor()
  return (
    <div>
      <h1>Get all doctors</h1>
      <ul>
        {doctors.map((d:any)=>(
            <li key={d.id}>
                {d.id}. {d.name}
            </li>
        ))}
      </ul>
    </div>
  )
}

