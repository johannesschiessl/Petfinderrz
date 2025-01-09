export default function Header() {
  return (
    <header className="bg-green-600 text-white py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Petfinderrz</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#features" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:underline">
                Preise
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
