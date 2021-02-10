import React from 'react';
import axios from 'axios';
import './Picker.css';
import Champion from '../Champion/Champion';

class Picker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { champions: [], chosen: undefined };
    this.setChosen = this.setChosen.bind(this);
  }

  setChosen(e) {
    this.setState({ chosen: e.target.innerText });
  }

  getChampions() {
    return axios
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
            chosen={this.state.chosen}
            onClick={this.setChosen}
          />
        ));
      });
  }

  componentDidMount() {
    this.getChampions().then((res) => {
      this.setState({ champions: res });
    });
  }

  componentDidUpdate() {
    this.componentDidMount();
  }

  render() {
    return (
      <div className="champion-picker__mid-section--picker picker">
        {this.state.champions}
      </div>
    );
  }
}

export default Picker;
