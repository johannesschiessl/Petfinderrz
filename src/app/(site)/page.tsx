export default function LandingPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="relative bg-green-100 py-24">
        <div className="container mx-auto text-center px-6 relative z-10 max-w-4xl">
          <h2 className="text-5xl font-bold mb-8 tracking-tight">
            Adoptiere Dein neues Haustier
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Verbinde Dich mit Tierheimen und finde Dein perfektes Haustier mit
            einem Wisch.
          </p>
          <a
            href="/pets"
            className="bg-neutral-900 text-white py-4 px-8 rounded-full text-lg font-medium hover:bg-neutral-800 transition-colors"
          >
            Loslegen
          </a>
        </div>
      </section>

      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h3 className="text-4xl font-bold mb-16 text-center tracking-tight">
            Warum unsere Plattform?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="border-2 border-neutral-200 rounded-2xl p-8 bg-white">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://plus.unsplash.com/premium_photo-1705554333571-5ee62b5c5244?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBldHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Haustiere finden"
                  className="w-full h-56 object-cover rounded-xl"
                />
              </div>
              <h4 className="text-2xl font-bold mb-3">Finde Tiere</h4>
              <p className="text-neutral-700">
                Entdecke Tierheime und Züchter in Deiner Nähe mit einem
                einfachen Wischsystem.
              </p>
            </div>
            <div className="border-2 border-neutral-200 rounded-2xl p-8 bg-white">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://plus.unsplash.com/premium_photo-1700403547168-0e36e48255f3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHBldHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Direkt spenden"
                  className="w-full h-56 object-cover rounded-xl"
                />
              </div>
              <h4 className="text-2xl font-bold mb-3">Direkt helfen</h4>
              <p className="text-neutral-700">
                Kaufe oder spende Futter und Spielzeuge direkt an Tierheime.
              </p>
            </div>
            <div className="border-2 border-neutral-200 rounded-2xl p-8 bg-white">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1522008693277-086ad6075b78?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBldHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Premium Optionen"
                  className="w-full h-56 object-cover rounded-xl"
                />
              </div>
              <h4 className="text-2xl font-bold mb-3">Premium Vorteile</h4>
              <p className="text-neutral-700">
                Nutze Premiumfunktionen ab nur 4,99 € monatlich für noch mehr
                Möglichkeiten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-100 py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h3 className="text-4xl font-bold mb-16 text-center tracking-tight">
            Erfolgsgeschichten
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border-2 border-neutral-200 rounded-2xl p-8 bg-white">
              <div className="mb-6">
                <img
                  src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBldHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Happy Dog"
                  className="w-full rounded-xl h-60 object-cover"
                />
              </div>
              <blockquote className="relative">
                <p className="text-xl mb-4 text-neutral-700">
                  &quot;Dank dieser Plattform habe ich meinen besten Freund
                  gefunden! Vielen Dank für die tolle Erfahrung.&quot;
                </p>
                <footer className="font-medium text-neutral-900">
                  — Anna aus München
                </footer>
              </blockquote>
            </div>
            <div className="border-2 border-neutral-200 rounded-2xl p-8 bg-white">
              <div className="mb-6">
                <img
                  src="https://images.unsplash.com/photo-1482434368596-fbd06cae4f89?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGV0fGVufDB8fDB8fHww"
                  alt="Cat Adoption"
                  className="w-full rounded-xl h-60 object-cover"
                />
              </div>
              <blockquote className="relative">
                <p className="text-xl mb-4 text-neutral-700">
                  &quot;Die App ist einfach und benutzerfreundlich. Wir haben
                  ein liebevolles Zuhause für unsere Katzen gefunden!&quot;
                </p>
                <footer className="font-medium text-neutral-900">
                  — Martin aus Hamburg
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h3 className="text-4xl font-bold mb-16 text-center tracking-tight">
            Preisgestaltung
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="border-2 border-neutral-200 rounded-2xl p-8 bg-white text-center">
              <h4 className="text-2xl font-bold mb-3">Kostenlos</h4>
              <p className="text-neutral-700 mb-4">
                Nutze die Basisfunktionen mit Werbung.
              </p>
              <p className="text-4xl font-bold mb-8">0 €</p>
              <a
                href="#"
                className="bg-neutral-900 text-white py-3 px-6 rounded-full inline-block font-medium hover:bg-neutral-800 transition-colors"
              >
                Kostenlos starten
              </a>
            </div>
            <div className="border-2 border-green-500 rounded-2xl p-8 bg-white text-center relative">
              <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-xl text-sm font-medium">
                Beliebt
              </div>
              <h4 className="text-2xl font-bold mb-3">Premium</h4>
              <p className="text-neutral-700 mb-4">
                Mehr Funktionen, keine Werbung.
              </p>
              <p className="text-4xl font-bold mb-8">
                5€
                <span className="text-sm font-normal text-neutral-500">
                  /Monat
                </span>
              </p>
              <a
                href="#"
                className="bg-neutral-900 text-white py-3 px-6 rounded-full inline-block font-medium hover:bg-neutral-800 transition-colors"
              >
                Upgrade
              </a>
            </div>
            <div className="border-2 border-neutral-200 rounded-2xl p-8 bg-white text-center">
              <h4 className="text-2xl font-bold mb-3">Adoptionsgebühr</h4>
              <p className="text-neutral-700 mb-4">
                Maximal 50 € pro erfolgreicher Adoption.
              </p>
              <p className="text-4xl font-bold mb-8">Bis zu 50 €</p>
              <a
                href="#"
                className="bg-neutral-900 text-white py-3 px-6 rounded-full inline-block font-medium hover:bg-neutral-800 transition-colors"
              >
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-purple-100 py-24">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h3 className="text-4xl font-bold mb-6 tracking-tight">
            Bereit, Dein neues Haustier zu finden?
          </h3>
          <p className="text-xl mb-10">
            Starte jetzt und entdecke Dein perfektes Haustier mit Leichtigkeit.
          </p>
          <a
            href="/pets"
            className="bg-neutral-900 text-white py-4 px-8 rounded-full text-lg font-medium hover:bg-neutral-800 transition-colors"
          >
            Jetzt anmelden
          </a>
        </div>
      </section>
    </main>
  );
}
