import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

const Title = styled.h1 `
    font-size: 40px;
`

const Select = styled.select`
    width: 200px;
`

const baseURL = "https://pokeapi.co/api/v2"

class PokeChange extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            allPokemons: [],
            selectedPokemonDados: '',
        }
    }

    fetchAllPokemons = async () => {
        const response = await axios.get(`${baseURL}/pokemon?limit=151`)
        this.setState({ allPokemons: response.data.results })
    };

    componentDidMount(){
        this.fetchAllPokemons();
    }
    
    fetchPokemonDetails = async (e) => {
        const pokemonDetailUrl = e.target.value;
        const response = await axios.get(pokemonDetailUrl)
        const photoURL = response.data.sprites.front_default;
        this.setState({ selectedPokemonDados: photoURL})
    }

    render () {
        const isPokemonSelected = this.state.selectedPokemonDados !== '';
        return (
            <div>
                <Title>PokéPedia</Title>
                <Select onChange={this.fetchPokemonDetails}>
                    <option>Selecione um Pokémon</option>
                    {this.state.allPokemons.map((pokemon) => (<option value={pokemon.url}>{pokemon.name}</option>))}
                </Select>
                <hr/>
                { isPokemonSelected && (<img src={this.state.selectedPokemonDados} alt="Foto do Pokémon" />)}
            </div>
        );
    }
}

export default PokeChange;