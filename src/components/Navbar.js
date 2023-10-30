import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 font-semibold text-lg min-w-screen">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <ul className="flex flex-wrap md:flex-nowrap justify-center space-x-4">
            <li>
              <Link href="/" className="text-white">Home</Link>
            </li>
            <li>
              <Link href="/latestmovies" className="text-white">Latest Movies</Link>
            </li>
            <li>
              <Link href="/collection" className="text-white">Collection</Link>
            </li>
            <li>
              <Link href="/filtermovies" className="text-white">Find your Movies</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
