import { useState, useEffect } from "react";
import * as Styled from "./styles";

import AudioButton from "../../sound/button.wav";
import { useQuery } from "react-query";
import axios from "axios";
import { Pokemons, PokemonAbility, Types } from "./types";

export const Pokedex = () => {
  const [audio] = useState(new Audio(AudioButton));
  const [index, setIndex] = useState(0);
  const [attributes, setAttributes] = useState<PokemonAbility>();

  const { data } = useQuery<Pokemons[] | null>("repos", async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=800"
    );
    const data = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${response.data.results[0].name}`
    );

    setAttributes(data.data);
    return response.data.results;
  });

  async function getPokemon() {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${data && data[index].name}`
    );

    setAttributes(response.data);
  }

  useEffect(() => {
    getPokemon();
  }, [index]);

  console.log(attributes);

  return (
    <Styled.Container>
      <Styled.Pokedex>
        <div id="left">
          <div id="logo" />
          <div id="bg_curve1_left" />
          <div id="bg_curve2_left" />
          <div id="curve1_left">
            <div id="buttonGlass">
              <div id="reflect"> </div>
            </div>
            <Styled.ButtonGlass
              color1="#490000"
              color2="#fb7b7b"
              color3="#fb0505"
            />
            <Styled.ButtonGlass
              color1="#490000"
              color2="#fbfb9b"
              color3="#fbfb05"
            />
            <Styled.ButtonGlass
              color1="#490000"
              color2="#b0fb7b"
              color3="#50fb05"
            />
          </div>
          <div id="curve2_left">
            <div id="junction">
              <div id="junction1"></div>
              <div id="junction2"></div>
            </div>
            <div id="screen">
              <div id="picture">
                <img
                  src={`https://img.pokemondb.net/artwork/large/${
                    data && data[index]?.name
                  }.jpg`}
                  alt="psykokwak"
                  height="170"
                />
              </div>
              <div id="buttonbottomPicture"></div>
              <div id="speakers">
                <div className="sp"></div>
                <div className="sp"></div>
                <div className="sp"></div>
                <div className="sp"></div>
              </div>
            </div>
            <Styled.Cross id="cross">
              <button
                onClick={() => {
                  audio.play();
                  if (index > 0) {
                    setIndex((i) => i - 1);
                  }
                }}
                id="leftcross"
              >
                <div id="leftT"></div>
              </button>
              <button
                onClick={() => {
                  audio.play();
                  if (index <= 800) {
                    setIndex((i) => i + 1);
                  }
                }}
                id="topcross"
              >
                <div id="upT"></div>
              </button>
              <button
                onClick={() => {
                  audio.play();
                  if (index <= 800) {
                    setIndex((i) => i + 1);
                  }
                }}
                id="rightcross"
              >
                <div id="rightT"></div>
              </button>
              <button id="midcross">
                <div id="midCircle"></div>
              </button>
              <button
                onClick={() => {
                  audio.play();
                  if (index > 0) {
                    setIndex((i) => i - 1);
                  }
                }}
                id="botcross"
              >
                <div id="downT"></div>
              </button>
            </Styled.Cross>
          </div>
        </div>
        <div id="right">
          <div id="stats">
            <div id="row">
              <strong>Name:</strong> {data && data[index]?.name}
            </div>
            <div id="row">
              <strong>Type:</strong>{" "}
              {attributes?.types.map((t: Types) => `${t.type.name},`)}
            </div>
            <div id="row">
              <strong>Height:</strong> {attributes?.height}
            </div>
            <div id="row">
              <strong>Weight:</strong> {attributes?.weight}
            </div>
          </div>
          <div id="blueButtons1">
            <div className="blueButton"></div>
            <div className="blueButton"></div>
            <div className="blueButton"></div>
            <div className="blueButton"></div>
            <div className="blueButton"></div>
          </div>
          <div id="blueButtons2">
            <div className="blueButton"></div>
            <div className="blueButton"></div>
            <div className="blueButton"></div>
            <div className="blueButton"></div>
            <div className="blueButton"></div>
          </div>
          <div id="miniButtonGlass4"></div>
          <div id="miniButtonGlass5"></div>
          <div id="barbutton3"></div>
          <div id="barbutton4"></div>
          <div id="yellowBox1"></div>
          <div id="yellowBox2"></div>
          <div id="bg_curve1_right"></div>
          <div id="bg_curve2_right"></div>
          <div id="curve1_right"></div>
          <div id="curve2_right"></div>
        </div>
      </Styled.Pokedex>
    </Styled.Container>
  );
};
