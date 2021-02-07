import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Picker.css';
import Champion from '../Champion/Champion';

function Picker(props) {
  const [champions, setChampions] = useState([]);
  const chooseChampion = (e) => {
    console.log(e);
    console.log(e.target);
  };
  const getChampions = () =>
    axios
      .get(
        'http://ddragon.leagueoflegends.com/cdn/11.3.1/data/en_US/champion.json'
      )
      .then(({ data: { data } }) => {
        return Object.entries(
          data
        ).map(([key, { id, name, title, image, tags, blurb }]) => (
          <Champion
            id={id}
            name={name}
            title={title}
            image={image.full}
            tags={tags}
            blurb={blurb}
            key={id}
          />
        ));
        // return map player props itemss
      });

  useEffect(
    () =>
      getChampions().then((res) => {
        setChampions(res);
      }),
    []
  );
  return (
    <div className="champion-picker__mid-section--picker picker">
      {champions}
    </div>
  );
}

export default Picker;
