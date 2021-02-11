import React from 'react';
import axios from 'axios';
import './Picker.css';
import Champion from '../Champion/Champion';
var _ = require('lodash');

class Picker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { champions: [] };
    this.onUpdate = this.onUpdate.bind(this);
  }

  getChampions() {
    const { chosen, locked, setChosen } = this.props;
    return axios
      .get(
        'http://ddragon.leagueoflegends.com/cdn/11.3.1/data/en_US/champion.json'
      )
      .then(({ data: { data } }) =>
        _.flatMap(data).map(({ id, name, title, image, tags, blurb }) => (
          <Champion
            id={id}
            name={name}
            title={title}
            image={image.full}
            tags={tags}
            blurb={blurb}
            key={id}
            chosen={chosen}
            locked={locked}
            setChosen={setChosen}
            onUpdate={this.onUpdate}
          />
        ))
      );
  }

  componentDidMount() {
    this.getChampions().then((champions) => {
      this.setState({ champions });
    });
  }

  onUpdate() {
    this.getChampions().then((champions) => {
      this.setState({ champions });
    });
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
