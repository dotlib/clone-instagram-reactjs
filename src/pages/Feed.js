import React, { Component } from "react";

// Assets
import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";

// Styles
import "./Feed.css";

export default class Feed extends Component {
  state = {
    feed: []
  };

  render() {
    return (
      <section id="post-list">
        {this.state.feed.map(post => (
          <article key={post._id}>
            <header>
              <div className="user-info">
                <span>{post.author}</span>
                <span className="place">{post.place}</span>
              </div>

              <img src={more} alt="Mais" title="Mais" />
            </header>

            <img
              src={`http://localhost:3333/files/${post.image}`}
              alt=""
              title=""
            />

            <footer>
              <div className="actions">
                <button type="button" onClick={() => {}}>
                  <img src={like} alt="" title="" />
                </button>
                <img src={comment} alt="" title="" />
                <img src={send} alt="" title="" />
              </div>

              <strong>{post.likes} curtidas</strong>

              <p>
                {post.description}
                <span>{post.hashtags}</span>
              </p>
            </footer>
          </article>
        ))}
      </section>
    );
  }
}
