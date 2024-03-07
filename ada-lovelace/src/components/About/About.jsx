import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="main">
      <h2>Uppväxt</h2>
      <p>
        Orolig för att Ada skulle få några av hennes fars mer rebelliska drag
        eller intresse för poesi fick Ada en strikt uppväxt som liknande hennes
        mammas i bl.a. matematik och logik. I ett utdrag från hennes guvernants
        dagbok kan vi läsa följande om hennes schema.
      </p>
      <p className="gray">
        "lessons in the morning in arithmetic, grammar, spelling, reading,
        music, each no more than a quarter of an hour long - after dinner,
        geography, drawing, French, music, reading, all performed with alacrity
        and docility." (Hollings C, Martin U, Rice A, s.9)
      </p>
      <p>
        Vid 13 års ålder hade hon bl.a. William Frend som lärare (som hade varit
        hennes mammas privatlärare) och via honom lärde hon känna Mary
        Somerville som var matematiker och populär författare. Genom Mary fick
        Ada en ingång till Londons vetenskapliga och litterära societet och 1833
        träffade hon på Charles Babbage. 1835 gifte hon sig med William King en
        något äldre herre som delade och uppmuntrade Adas intresse för
        matematik. 1838 blev King "Earl of Lovelace" och Ada blev då "Countess
        of Lovelace" och därefter Ada Lovelace. De flyttade ut en bit utanför
        London och fick tre barn. I ett brev till Mary Somerville kan vi läsa
        följande om Adas dedikation till matematiken.
      </p>
      <p className="gray">
        "I now read Mathematics every day & am occupied in Trigonometry & in
        preliminaries to Cubic & Biquadratic Equations. So you see that
        matrimony has by no means lessened my taste for those pursuits, nor my
        determination to carry them on..." (Hollings C, Martin U, Rice A, s.32)
      </p>
      <h2>Charles Babbage</h2>
      <p>
        Charles Babbage började arbeta på sin "The Analytical Engine" i mitten
        1830-talet och han och Ada Lovelace blev goda vänner och hon fungerade
        som ett bollplank och fascinerades av denna maskin och dess möjligheter.
      </p>
      <p>
        1840 blev Babbage inbjuden till Turin för att hålla en föreläsning där
        Luigi Menabrea en ung italiensk ingejör deltog. Han skrev sedan den
        första texten om "The Analytical Engine". 1844 fick Ada förfrågan om att
        översätta denna text till engelska, där hon även utökade en hel del
        bl.a. med den appendix som kallas för "Note G" som innehåller
        instruktioner för hur ett program i "The Analytical Engine" skulle
        fungera. Det är "Note G" som brukar kallas för det första
        datorprogrammet och Ada därför den första programmeraren.
      </p>
      <p>
        Till skillnad från Babbage såg Ada möjligheten att "The Analytical
        Engine" skulle kunna vara mer än bara en maskin som gör matematiska
        beräkningar. Utan den skulle rent teoretiskt kunna skapa musik eller
        konst. Såhär skriver hon i "Note G".
      </p>
      <p className="gray">
        "Supposing that the fundamental relations of pitched sounds in the
        science of harmony and of musical composition were susceptible of such
        expression and adaptations, the engine might compose eloborate and
        scientific pieces of music of any degree of complexity or extent."
        (Hollings C, Martin U, Rice A, s.82)
      </p>
      <p>
        Tyvärr blev aldrig Babbage "The Analytical Engine" byggd då han inte
        fick några pengar för att bygga den.
      </p>
      <p>
        Ada hade kanske en till hennes moders besvikelse en fascination för sin
        far som hon aldrig träffade (han dog 1824). Hon uppskattade poesi och
        funderande på att skriva matematiskt poesi. Hennes synsätt på matematik
        kanske bäst beskrivs i denna mening från ett brev till hennes mamma.
      </p>
      <p className="gray">
        “If you cant give me poetry, cant you give me poetical science?”
      </p>
      <p>
        Det kanske var just Adas intresse att blanda matematik, logik, fantasi
        och poesi som gjorde att hon såg saker på ett annorlunda sätt.
      </p>
      <h2>Källor</h2>
      <p>
        Hollings C, Martin U, Rice A. (2018). Ada Lovelace: The Making of a
        Computer Scientist
      </p>
    </div>
  );
};

export default About;
