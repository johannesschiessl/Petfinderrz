export default function Header() {
  return (
    <header className="bg-white border-b-2 border-neutral-200 py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-green-700">Petfinderrz</h1>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <a
                href="#features"
                className="hidden md:flex text-neutral-700 hover:text-neutral-900 font-medium"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="hidden md:flex text-neutral-700 hover:text-neutral-900 font-medium"
              >
                Preise
              </a>
            </li>
            <li>
              <a
                href="/pets"
                className="bg-neutral-900 text-white py-2 px-5 rounded-full hover:bg-neutral-800 transition-colors"
              >
                Loslegen
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
