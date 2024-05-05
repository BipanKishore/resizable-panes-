
import React from 'react'

export default function Button(props) {
    const { label,
        onClick } = props




    return (


        <button
            type="button"
            onClick={onClick}
            className={`ring-1
ring-cyan-600
rounded-lg 
bg-cyan-200

p-0
text-sm 
text-center 
font-medium 
hover:ring-cyan-800
hover:bg-white
active:ring-cyan-200
`}>

            {label}
        </button>


    )
}