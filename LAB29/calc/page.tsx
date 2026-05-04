"use client"

import { useState } from "react";

export default function Page(){
    const [a,setA] = useState(0)
    const [b,setB] = useState(0)
    const [result,setResult] = useState(0)

    return(
        <div style={{textAlign:'center'}}>
            <h2>Basic Calculator</h2>

            <input style={{border:'2px solid black',borderRadius:'5px'}} type="number" placeholder="num 1" onChange={(e)=>setA(Number(e.target.value))} />
            &nbsp;
            <input style={{border:'2px solid black',borderRadius:'5px'}} type="number" placeholder="num 3" onChange={(e)=>setB(Number(e.target.value))} />

            <div className="my-3">
            <button onClick={()=>setResult(a + b)} className="btn btn-dark">
                Add
            </button>
            &nbsp;
            <button onClick={()=>setResult(a-b)} className="btn btn-dark">
                Subtract
            </button>
            &nbsp;
            <button onClick={()=>setResult(a * b)} className="btn btn-dark">
                product
            </button>
            &nbsp;
            <button onClick={()=>setResult(a/b)} className="btn btn-dark">
                Divide
            </button>
            </div>

            <div style={{textAlign:"center"}}>
                <h2>Result : {result}</h2>
            </div>
        </div>
    )
}