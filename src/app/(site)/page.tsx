export default function LandingPage() {
  return (
    <main>
      <section className="relative bg-gradient-to-r from-green-100 to-green-300 py-20">
        <div className="absolute inset-0 bg-opacity-25">
          <img
            src="https://images.unsplash.com/photo-1442291928580-fb5d0856a8f1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHBldHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto text-center px-6 relative">
          <h2 className="text-5xl font-bold mb-6">
            Adoptiere Dein neues Haustier
          </h2>
          <p className="text-lg mb-8">
            Verbinde Dich mit Tierheimen und finde Dein perfektes Haustier mit
            einem Wisch.
          </p>
          <a
            href="/pets"
            className="bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-700"
          >
            Loslegen
          </a>
        </div>
      </section>
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-semibold mb-12 text-center">
            Warum unsere Plattform?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <img
                src="https://plus.unsplash.com/premium_photo-1705554333571-5ee62b5c5244?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBldHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Haustiere finden"
                className="w-full rounded-md mb-4"
              />
              <h4 className="text-2xl font-bold mb-2">Finde Tiere</h4>
              <p>
                Entdecke Tierheime und Züchter in Deiner Nähe mit einem
                einfachen Wischsystem.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <img
                src="https://plus.unsplash.com/premium_photo-1700403547168-0e36e48255f3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHBldHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Direkt spenden"
                className="w-full rounded-md mb-4"
              />
              <h4 className="text-2xl font-bold mb-2">Direkt helfen</h4>
              <p>
                Kaufe oder spende Futter und Spielzeuge direkt an Tierheime.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <img
                src="https://images.unsplash.com/photo-1522008693277-086ad6075b78?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBldHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Premium Optionen"
                className="w-full rounded-md mb-4"
              />
              <h4 className="text-2xl font-bold mb-2">Premium Vorteile</h4>
              <p>
                Nutze Premiumfunktionen ab nur 4,99 € monatlich für noch mehr
                Möglichkeiten.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-green-50 py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-semibold mb-12 text-center">
            Erfolgsgeschichten
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <img
                src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBldHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Happy Dog"
                className="w-full rounded-md mb-4"
              />
              <blockquote>
                <p className="text-lg italic">
                  „Dank dieser Plattform habe ich meinen besten Freund gefunden!
                  Vielen Dank für die tolle Erfahrung.“
                </p>
                <footer className="mt-4 text-sm font-bold">
                  — Anna aus München
                </footer>
              </blockquote>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <img
                src="https://images.unsplash.com/photo-1482434368596-fbd06cae4f89?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGV0fGVufDB8fDB8fHww"
                alt="Cat Adoption"
                className="w-full rounded-md mb-4"
              />
              <blockquote>
                <p className="text-lg italic">
                  „Die App ist einfach und benutzerfreundlich. Wir haben ein
                  liebevolles Zuhause für unsere Katzen gefunden!“
                </p>
                <footer className="mt-4 text-sm font-bold">
                  — Martin aus Hamburg
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="bg-green-100 py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-semibold mb-12 text-center">
            Preisgestaltung
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-8 text-center">
              <h4 className="text-2xl font-bold mb-4">Kostenlos</h4>
              <p>Nutze die Basisfunktionen mit Werbung.</p>
              <p className="text-3xl font-bold mb-4">0 €</p>
              <a
                href="#"
                className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700"
              >
                Kostenlos starten
              </a>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 text-center border-2 border-green-600">
              <h4 className="text-2xl font-bold mb-4">Premium</h4>
              <p>Mehr Funktionen, keine Werbung.</p>
              <p className="text-3xl font-bold mb-4">4,99 €/Monat</p>
              <a
                href="#"
                className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700"
              >
                Upgrade
              </a>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 text-center">
              <h4 className="text-2xl font-bold mb-4">Adoptionsgebühr</h4>
              <p>Maximal 50 € pro erfolgreicher Adoption.</p>
              <p className="text-3xl font-bold mb-4">Bis zu 50 €</p>
              <a
                href="#"
                className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700"
              >
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-green-200 py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-4">
            Bereit, Dein neues Haustier zu finden?
          </h3>
          <p className="text-lg mb-8">
            Starte jetzt und entdecke Dein perfektes Haustier mit Leichtigkeit.
          </p>
          <a
            href="#"
            className="bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-700"
          >
            Jetzt anmelden
          </a>
        </div>
      </section>
    </main>
  );
}
