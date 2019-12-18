import React, { Component } from "react";

// Services
import api from "../services/api";

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

  /**
   * Manipulador do campo de imagem
   */
  handleImageChange = e => {
    this.setState({ image: e.target.files[0] });
  };

  /**
   * Manipulador dos campos de input
   */
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form id="new-post" onSubmit={() => {}}>
        <input type="file" onChange={this.handleImageChange} />

        <input
          type="text"
          name="author"
          placeholder="Autor do post"
          onChange={this.handleChange}
          value={this.state.author}
        />

        <input
          type="text"
          name="place"
          placeholder="Local do post"
          onChange={this.handleChange}
          value={this.state.place}
        />

        <input
          type="text"
          name="description"
          placeholder="Descrição do post"
          onChange={this.handleChange}
          value={this.state.description}
        />

        <input
          type="text"
          name="hashtags"
          placeholder="Hashtags do post"
          onChange={this.handleChange}
          value={this.state.hashtags}
        />

        <button type="submit">Enviar</button>
      </form>
    );
  }
}
