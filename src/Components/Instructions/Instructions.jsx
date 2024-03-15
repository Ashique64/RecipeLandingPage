import React from "react";
import "./Instructions.scss";

const Instructions = () => {
    return (
        <div className="instructions">
            <h3>Instructions</h3>
            <ol>
                <li>
                    <strong style={{color:'black'}}>Beats the eggs:</strong> In a bowl, beat the egg with a pinch of salt and pepper until they are
                    well mixed. You can add a tablespoon water or milk for a fluffier texture.
                </li>
                <li>
                    <strong style={{color:'black'}}>Heat the pan: </strong> Placa a non-stick frying pan over meduim heat and add butter or oil.
                </li>
                <li>
                    <strong style={{color:'black'}}>Cook the omelette: </strong>Once the butter sis melted and bubbling, pour the eggs. Tilt the pan
                    to ensure the eggs evenly coat the surface.
                </li>
                <li>
                    <strong style={{color:'black'}}>Add filling(optional): </strong>When the egg begin to set at the edges but are still slightly
                    runny in the middle, sprinkle your chosen filling over one half of the omelette.
                </li>
                <li>
                    <strong style={{color:'black'}}>Fold and serve: </strong>As the omelette continues to cook, carefully lift one edge and fold it
                    over the fillings. Let it cook another minute, and slide it onto a plate.
                </li>
                <li>
                    <strong style={{color:'black'}}>Enjoy: </strong>Serve hot, with additional salt and pepper if needed.
                </li>
            </ol>
        </div>
    );
};

export default Instructions;
