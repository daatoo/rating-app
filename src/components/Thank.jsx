import {ReactComponent as Illustration} from '../images/illustration-thank-you.svg'
import { useState } from 'react'
import styled from "styled-components"

function Thank({number, rating}) {
    return (
        <div 
        className='flex flex-col gap-8 items-center px-8 py-[45px] bg-[#232A34] rounded-[30px] max-w-[412px] absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] '>
            <Illustration />
            <h2 className='px-5 py-[5px] bg-[#262E38] rounded-[22.5px] text-[#FC7614] font-[400] text-[15px] leading-6 '>
                You selected {rating} out of 5
            </h2>
        <div className='flex flex-col gap-[7px]'>
            <h1 className='text-white text-[28px] font-[700] leading-[43px] text-center'>
                Thank you!
            </h1>
            <p className='text-[#969FAD] font-[400] text-[15px] leading-6 text-center'>
            We appreciate you taking the time to give a rating. 
            If you ever need more support, don’t hesitate to get in touch!
            </p>
        </div>
        </div>
    )
}
export default Thank