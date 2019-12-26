import React, { Component } from "react";

// Styles
import "./New.css";

export default class New extends Component {
  state = {
    image: null,
    author: "",
    place: "",
    description: "",
    hashtags: ""
  };

  render() {
    return (
      <form id="new-post" onSubmit={() => {}}>
        <input type="file" onChange={() => {}} />

        <input
          type="text"
          name="author"
          placeholder="Autor do post"
          onChange={() => {}}
          value={this.state.author}
        />

        <input
          type="text"
          name="place"
          placeholder="Local do post"
          onChange={() => {}}
          value={this.state.place}
        />

        <input
          type="text"
          name="description"
          placeholder="Descrição do post"
          onChange={() => {}}
          value={this.state.description}
        />

        <input
          type="text"
          name="hashtags"
          placeholder="Hashtags do post"
          onChange={() => {}}
          value={this.state.hashtags}
        />

        <button type="submit">Enviar</button>
      </form>
    );
  }
}
