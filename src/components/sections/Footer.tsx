export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center gap-4 text-sm md:flex-row md:justify-between">
          <p>&copy; {new Date().getFullYear()} Wild Raven Homestead</p>
          <nav aria-label="Footer">
            <ul className="flex items-center gap-6">
              <li><a className="hover:text-[--color-goldenrod]" href="#about">About</a></li>
              <li><a className="hover:text-[--color-goldenrod]" href="#products">Products</a></li>
              <li><a className="hover:text-[--color-goldenrod]" href="#social">Social</a></li>
              <li><a className="hover:text-[--color-goldenrod]" href="#cta">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
