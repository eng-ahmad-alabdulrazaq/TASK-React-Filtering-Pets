//\\ بسم الله الرحمن الرحيم //\\

// In PetItem.js, create a state for the pet image with an inital value of pet.image.
// Pass it to the image's src tag.
// Add an onClick to the button that changes the state from "pet.image to "pet.image2"
// Test your code, the button should change the image to a gif!

import React, { useState } from "react";

function PetItem({ pet }) {
  // mywork
  const [petImage, setPetImage] = useState(pet.image);
  const changePetImage = () => {
    setPetImage(pet.image2);
  };

  // mywork

  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={petImage} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button
            type="button"
            className="btn btn-info"
            onClick={changePetImage}
          >
            Pet
          </button>
          <button type="button" class="btn btn-info  m-2">
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
