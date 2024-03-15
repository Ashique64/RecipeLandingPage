import React from "react";
import "./Recipe.scss";

const Recipe = () => {
    return (
        <div className="recipe">
            <div className="recipe-child-1">
                <h3>Simple Omelette Recipe</h3>
                <p>
                    An easy and quick dish,perfect for any meal. This classic omelette combines beaten eggs cooked to
                    perfection, optionally filled with your choice of cheese, vegitables, or meats.
                </p>
            </div>
            <div className="recipe-child-2">
                <h5>Preparation time</h5>
                <ul>
                    <li><strong>Total</strong> Approximately 10 minutes</li>
                    <li><strong>Preparation</strong> 5 minutes</li>
                    <li><strong>Cooking</strong> 5 minutes</li>
                </ul>
            </div>
        </div>
    );
};

export default Recipe;
