"use client"

import { useState } from "react";

export default function Page(){
    const [count,setCount] = useState(0)

    return(
        <div style={{textAlign:'center'}}>
            <h2>Client Component Example</h2>

            <p>Count: {count}</p>

            <button onClick={()=>setCount(count+1)} className="btn btn-primary">
                Increase
            </button>
            &nbsp;
            <button onClick={()=>setCount(count-1)} className="btn btn-danger">
                Decrease
            </button>
        </div>
    )
}