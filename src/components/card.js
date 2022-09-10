import React from 'react'


export default function Card(props){
    return (
        <card className='card'>
            <img src={props.img} alt="" className='card--image'/>
            <div className='card--div'>
                <img src={props.star} alt='' className='card--star'/>
                <span>{props.rate}</span>
                <span className='gray'>{props.location}</span>

            </div>
            
            <p className='card--p'>{props.para}</p>
            <p >{props.para1} <span className='card--p2'>{props.para2}</span></p> 
           
            
            
            
        </card>
    )
}