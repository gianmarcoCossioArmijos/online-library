import React from 'react'

import { CgMenuBoxed } from "react-icons/cg";
import { GoHomeFill } from "react-icons/go";
import { GiBookshelf } from "react-icons/gi";

import { Link } from 'react-router-dom';
import { useDispatch, useSelector  } from "react-redux"
import { hidde, show } from '../../store/asideSlice';

const Header = () => {

    const dispatch = useDispatch();
    const aside = useSelector((state) => state.aside);

    const handleClick = () => {

        if (aside === "") {
        
            dispatch(hidde());
        } else {
        
            dispatch(show());
        }
    }

  return (
    <>
        <header className='header-base'>

            <CgMenuBoxed
                    onClick={handleClick}
                    className='logo-base self-center'/>

            <Link to="/" className='flex'>
                <GoHomeFill className='logo-base self-center'/>
            </Link>

            <div className='flex gap-2'>
                <div className='self-center'>
                    <GiBookshelf className='w-[40px] h-[40px] self-center'/>
                </div>

                <div className='flex flex-col self-center'>
                    <span>Oneline</span>
                    <span className='font-bold'>Library</span>
                </div>
            </div>

        </header>
    </>
  )
}

export default Header