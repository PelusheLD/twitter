import React from "react";
import "./twitterFollow.css";
import { TwFollowCont } from "./twitterFollowCont";

export function TwFollow() {
  return (
    <div className="Container">
      <h1>A quien Seguir</h1>
      <section className="twitterFollow">
        <TwFollowCont
          inicialState={true}
          name="Gabriel A. Cichero"
          username="6Cichero6"
        />
        <TwFollowCont name="Cristininiൠ" username="IamCristinini" />
        <TwFollowCont name="Giezy A. Riera" username="PelusheLD" />
      </section>
    </div>
  );
}
