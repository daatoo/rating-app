import {ReactComponent as Illustration} from '../images/illustration-thank-you.svg'
import { useState } from 'react'
import styled from "styled-components"

function Thank({number, rating}) {
    return (
        <div 
        className='flex flex-col gap-6 mobile:gap-8 items-center px-6 mobile:px-8
         pt-[34px] pb-[37px] mobile:py-[45px] bg-[#232A34] rounded-[30px] w-[327px] mobile:w-[412px]
          absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] '>
            <Illustration className='h-[96px] w-[140px] mobile:w-[162px] mobile:h-[108px]' />
            <h2 className='px-5 py-1 bg-[#262E38] rounded-[22.5px] text-[#FC7614] font-[400] 
            text-sm mobile:text-[15px] leading-6 '>
                You selected {rating} out of 5
            </h2>
        <div className='flex flex-col gap-2.5 mobile:gap-[7px] w-full'>
            <h1 className='text-white text-[28px] font-[700] leading-[37px] mobile:leading-[43px] text-center'>
                Thank you!
            </h1>
            <p className='text-[#969FAD] font-[400] text-sm modile:text-[15px] leading-[22px] mobile:leading-6 '>
            We appreciate you taking the time to give a rating. 
            If you ever need more support, don’t hesitate to get in touch!
            </p>
        </div>
        </div>
    )
}
export default Thank