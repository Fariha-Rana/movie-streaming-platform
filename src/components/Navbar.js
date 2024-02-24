import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 font-semibold lg:text-lg text-sm gap-2 min-w-screen">
      <div className="container mx-auto">
        <div className="flex  justify-center">
          <ul className="flex flex-wrap md:flex-nowrap text-white justify-center space-x-4">
            <li>
              <Link href="/" className="underline">Home</Link>
            </li>
            <li>
              <Link href="/latestmovies" className="underline">Latest Movies</Link>
            </li>
            <li>
              <Link href="/collection" className="underline">Collection</Link>
            </li>
            <li>
              <Link href="/filtermovies" className="underline">Find your Movies</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
