import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    flip: false,
  };

  flippingImage = () => {
    if (!this.state.flip) {
      return <img src={this.props.pokemon.sprites.front} alt="oh no!" />;
    } else {
      return <img src={this.props.pokemon.sprites.back} alt="oh no!" />;
    }
  };

  setFlip = () => {
    this.setState({ flip: !this.state.flip });
  };

  render() {
    return (
      <Card>
        <div>
          <div
            onClick={() => {
              this.setFlip();
            }}
            className="image"
          >
            {this.flippingImage()}
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
