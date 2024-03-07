import React from "react";
import "./title.css";

const Title = () => {
  return (
    <div className="title">
      <h1>
        <b>Ada Lovelace</b>
      </h1>
      <h2>Vem var Ada Lovelace?</h2>
      <p>
        Augusta Ada Byron föddes i december 1815 i London. Hennes föräldrar var
        Anne Isabella Byron och George Gordon Byron men mest känd som Lord
        Byron. Anne Isabella (kallades Annabella) var en duktig matematiker och
        var redan som barn begåvad. Hennes föräldrar anställde en pensionerad
        professor från Cambridge Universitet och hon fick en utbildning inom
        klassisk litteratur, filosofi, naturvetenskap och matematik. Lord Byron
        var vid Adas födelse en av Englands mest kända poeter och en angängare
        romantiken. Han var en notorisk kvinnotjusare, ständigt i skuld och hade
        ett rykte som "mad, bad and dangerous to know".
      </p>
      <p>
        Giftemålet mellan Annabella och Byron kan tyckas underligt då de var
        väldigt olika men de gifte sig i början 1815. Äkteskapet höll inte länge
        utan en månad efter Adas födelse så separerade de och Byron stack till
        Frankrike och skulle aldrig träffa sin dotter igen.
      </p>
    </div>
  );
};

export default Title;
