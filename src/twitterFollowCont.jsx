import { useState } from "react";

export function TwFollowCont({ name, username, inicialState }) {
  const [isFollow, setFollow] = useState(inicialState);
  const Click = () => {
    setFollow(!isFollow);
  };
  const text = isFollow ? "Siguiendo" : "Seguir";
  const estilo = isFollow ? "button-style-follow" : "button-style";
  return (
    <article className="followCard">
      <header className="followCard-header">
        <img src={`https://unavatar.io/${username}`} />
        <div>
          <a href="">{name}</a>
          <img
            src="https://www.pngmart.com/files/12/Twitter-Verified-Badge-Transparent-Background.png"
            alt=""
          />
          <span className="followCard-header-span">@{username}</span>
        </div>
      </header>
      <aside className="followCard-aside">
        <button className={estilo} onClick={Click}>
          {text}
        </button>
      </aside>
    </article>
  );
}