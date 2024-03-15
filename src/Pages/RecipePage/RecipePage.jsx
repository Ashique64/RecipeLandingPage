import React from "react";
import BannerImage from "../../Components/BannerImage/BannerImage";
import "./RecipePage.scss"
import Recipe from "../../Components/Recipe/Recipe";
import Ingredients from "../../Components/Ingredients/Ingredients";
import Instructions from "../../Components/Instructions/Instructions";
import Nutrition from "../../Components/Nutrition/Nutrition";

const RecipePage = () => {
    return (
        <div className="main">
            <div className="child-1">
                <BannerImage />
                <Recipe/>
                <Ingredients/>
                <Instructions/>
                <Nutrition/>
            </div>
        </div>
    );
};

export default RecipePage;
