import {ReactComponent as StarIcon} from '../images/icon-star.svg'
import { useState } from 'react'
import styled from "styled-components"


function Rating({rating, setRating, setSubmit}){
    const numbers = [1, 2, 3, 4, 5]
    const [Error, setError] = useState(false)
    return(
        <div className=
        'bg-[#232A34] max-w-[327px] mobile:max-w-[412px] pt-6 pb-8 px-6 mobile:p-8 rounded-[30px] absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col gap-6'>
        
          <div className=
            'w-10 h-10 mobile:w-12 mobile:h-12 rounded-[50%] bg-[#262E38] flex justify-center items-center '>
              <StarIcon className='w-[14px] mobile:w-[17px]' />
          </div>
          <div className='flex flex-col gap-2.5 mobile:gap-[7px] mt-[-8px]'>
            <h1 className='text-white font-[700] text-[24px] mobile:text-[28px] leading-[37px] mobile:leading-[43px] '>
              How did we do?</h1>
            <p className='text-[#969FAD] font-[400] text-sm mobile:text-[15px] leading-[22px] mobile:leading-6 '>
              Please let us know how we did with your support request. 
              All feedback is appreciated to help us improve our offering!
            </p>
          </div>
          <div className='flex gap-[17px] mobile:gap-[21px] '>
            {numbers.map((number) => {
                return (
                    <RatingButton onClick={() =>{
                        setRating(number);
                        console.log(rating)
                    }}
                    key={number}
                    isActive={number === rating}
                     className='group w-[42px] h-[42px] mobile:w-[51px] mobile:h-[51px] rounded-[50%] bg-[#262E38] '>
                        <p className='font-[400] text-sm mobile:text-lg leading group-hover:text-white'>{number}</p>
                    </RatingButton>
                )
            })}
          </div>
          <button
          onClick={() =>{
            if(rating){
                setSubmit(true)
            } else {
                setError(true)
            }
          }}
          className='mobile:mt-2 w-full bg-[#FC7614] rounded-[22.5px] p-[11px] text-[14px] mobile:text-[15px] font-[700] leading-[23px] tracking-[2px] hover:bg-white hover:text-[#FC7614] '>
            SUBMIT
          </button>
        </div>
    )
}
export default Rating

const RatingButton = styled.button`
    background: ${(props) => (props.isActive ? "#FC7614" : "#262e38")};
    &:hover {
        background: ${(props) => (props.isActive ? "" : "#7C8798")}
    };
    color: ${(props) => (props.isActive ? "#FFFFFF" : "#7C8798")};

`


