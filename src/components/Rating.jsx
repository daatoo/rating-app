import {ReactComponent as StarIcon} from '../images/icon-star.svg'
import { useState } from 'react'
import styled from "styled-components"


function Rating({rating, setRating, setSubmit}){
    const numbers = [1, 2, 3, 4, 5]
    const [Error, setError] = useState(false)
    return(
        <div className=
        'app bg-[#232A34] max-w-[412px] p-8 rounded-[30px] absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col gap-6'>
        
          <div className=
            'w-12 h-12 rounded-[50%] bg-[#262E38] flex justify-center items-center '>
              <StarIcon />
          </div>
          <div className='flex flex-col gap-[7px] mt-1.5'>
            <h1 className='text-white font-[700] text-[28px] leading-[43px] '>
              How did we do?</h1>
            <p className='text-[#969FAD] font-[400] text-[15px] leading-6 '>
              Please let us know how we did with your support request. 
              All feedback is appreciated to help us improve our offering!
            </p>
          </div>
          <div className='flex gap-[21px] '>
            {numbers.map((number) => {
                return (
                    <RatingButton onClick={() =>{
                        setRating(number);
                        console.log(rating)
                    }}
                    key={number}
                    isActive={number === rating}
                     className='group w-[51px] h-[51px] rounded-[50%] bg-[#262E38] '>
                        <p className='font-[400] text-lg leading group-hover:text-white'>{number}</p>
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
          className='mt-2 w-full bg-[#FC7614] rounded-[22.5px] p-[11px] text-[15px] font-[700] leading-[23px] tracking-[2px] hover:bg-white hover:text-[#FC7614] '>
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


