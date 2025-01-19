// components/Impressum.js

import React from "react";

const Impressum = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-4">Impressum</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG:</h2>
        <p>Paul Wenner</p>
        <p>Deutschland</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Kontakt:</h2>
        <p>E-Mail: paul@paulwenner.de</p>
        <p>
          Website:{" "}
          <a href="[URL deiner Website]" className="text-blue-500 underline">
            www.paulwenner.de
          </a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
        </h2>
        <p>Paul Wenner</p>
        <p>Deutschland</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Haftungsausschluss:</h2>
        <h3 className="font-bold">Haftung für Inhalte</h3>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen. ...
        </p>
        <h3 className="font-bold mt-4">Haftung für Links</h3>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. ...
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Urheberrecht:</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. ...
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Streitschlichtung:</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr
          </a>
          .
        </p>
        <p>
          Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht
          bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>
    </div>
  );
};

export default Impressum;
