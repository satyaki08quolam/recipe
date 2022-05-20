import {FaPizzaSlice,FaHamburger} from "react-icons/fa";
import {GiNoodles,GiChopsticks} from "react-icons/gi";
import {NavLink} from 'react-router-dom'





import React from 'react'

const Category = () => {
  return (
    <div className="flex border-solid border-2 border-purple-800">
            <NavLink to='/cuisine/italian' className="border-solid border-4 border-green-400 my-8">
                <FaPizzaSlice />
                <h4>italian</h4>
            </NavLink>
            <NavLink to='/cuisine/American' className="border-solid border-4 border-green-400 my-8">
                <FaHamburger />
                <h4>american</h4>
            </NavLink>
            <NavLink to='/cuisine/Thai' className="border-solid border-4 border-green-400 my-8">
                <GiNoodles />
                <h4>thai</h4>
            </NavLink>
            <NavLink to='/cuisine/japanese' className="border-solid border-4 border-green-400 my-8">
                <GiChopsticks />
                <h4>japanese</h4>
            </NavLink>
    </div>
  )
}

export Category