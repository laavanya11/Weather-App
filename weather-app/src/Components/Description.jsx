import React from 'react';
import { FaArrowDown } from "react-icons/fa";
import "./Description.css";

const Description = () => {
  return (
    <div className="section section_description">
        <div className="card">
            <div className="description_card_icon">
                <FaArrowDown />
                <small>min</small>
            </div>
            <h2>22°C</h2>
        </div>

        <div className="card">
            <div className="description_card_icon">
                <FaArrowDown />
                <small>min</small>
            </div>
            <h2>22°C</h2>
        </div>

        <div className="card">
            <div className="description_card_icon">
                <FaArrowDown />
                <small>min</small>
            </div>
            <h2>22°C</h2>
        </div>

        <div className="card">
            <div className="description_card_icon">
                <FaArrowDown />
                <small>min</small>
            </div>
            <h2>22°C</h2>
        </div>

        <div className="card">
            <div className="description_card_icon">
                <FaArrowDown />
                <small>min</small>
            </div>
            <h2>22°C</h2>
        </div>

    </div>
    
  )
}

export default Description
