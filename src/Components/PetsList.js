//\\ بسم الله الرحمن الرحيم //\\

// In PetsList, create a state called query and a method
// called setQuery.
// In the input tag of SearchBar add an onChange method
// that calls setQuery() and gives it event.target.value as
// an argument.
// At this point, whatever you type in your search bar
// should appear in the query state in React Dev Tools.
// In your PetsList, filter your pets by comparing your
// pet's name with query using includes before you map your
// list so you can deal with plain javascript object.
// At this point, our search bar is case sensitive.
// Fix it so that it becomes case insensitive.

// Filter Pets by specie
// in PetsList, create a state called type and a method called setType.
// In the select tag of PetSelector add an onChange method that calls setType() and gives it event.target.value as an argument.
// At this point, whatever you select in your selector should appear in the type state in React Dev Tools.
// In your PetsList, filter your pets by comparing your pet's type with type using includes.
// Challenge
// Move all your search bar code to it's own component and pass setQuery as a prop to your new component.
// Move all your selector code to it's own component and pass setType as a prop to your new component.

import { useState } from "react";
import pets from "../petsData";
import PetItem from "./PetItem";

function PetsList() {
  // mywork
  const [type, setType] = useState("");
  const select = (e) => {
    setType(e.target.value);
  };
  const [query, setQuery] = useState("");
  const search = (e) => {
    setQuery(e.target.value);
  };

  console.log(query);
  // const changeSetQuery = (e) => {
  //   console.log(e.target.value);
  //   setQuery(e.target.value);
  // };

  // const petList.)includes(query)
  // mywork
  const petList = pets
    .filter((pet) =>
      pet.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    )
    .filter((pet) => pet.type.includes(type))
    .map((pet) => <PetItem pet={pet} key={pet.id} />);
  // mywork

  // mywork
  // const [type, setType] = useState("");
  // const select = (e) => {
  //   setType(e.target.value);
  // };
  // mywork

  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div className="input-group rounded">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  // my work
                  // onChange={(e) => setQuery(e.target.value)}
                  // onChange changeSetQuery(event.target.value)
                  onChange={search}
                  // my work
                />
              </div>
              <br />
              Type:
              <select className="form-select" onChange={select}>
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
