import React from 'react'
import "./Nutrition.scss"

const Nutrition = () => {
  return (
    <div className='nutrition'>
        <h3>Nutrition</h3>
        <p>The table below shows nutritional values per serving without the additional fillings.</p>
        <div className='nutrition-child'>
            <div className='nutrition-child-item-1'>Colories</div>
            <div className='nutrition-child-item-2'>277kcal</div>
        </div>
        <div className='nutrition-child'>
            <div className='nutrition-child-item-1'>Carbs</div>
            <div className='nutrition-child-item-2'>0g</div>
        </div>
        <div className='nutrition-child'>
            <div className='nutrition-child-item-1'>Protien</div>
            <div className='nutrition-child-item-2'>20g</div>
        </div>
        <div className='nutrition-child'>
            <div className='nutrition-child-item-1'>Fat</div>
            <div className='nutrition-child-item-2'>20g</div>
        </div>
    </div>
  )
}

export default Nutrition