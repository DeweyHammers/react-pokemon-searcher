import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
  };

  componentDidMount() {
    this.fetchPokemon();
  }

  fetchPokemon = () => {
    fetch("http://localhost:3000/pokemon")
      .then((resp) => resp.json())
      .then((json) => this.setState({ pokemon: json }));
  };

  searchSubmit = (event) => {
    if (event.key === "Enter") {
      const result = this.state.pokemon.filter(
        (p) => p.name === event.target.value
      );
      if (result.length > 0) {
        this.setState({ pokemon: result });
      } else {
        this.fetchPokemon();
      }
    }
  };

  addPokemon = (newPokemon) => {
    this.setState({ pokemon: [...this.state.pokemon, newPokemon] });
  };

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search searchSubmit={this.searchSubmit} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon} />
      </Container>
    );
  }
}

export default PokemonPage;
