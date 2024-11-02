import Link from "next/link";
import { navLinks } from "@/utils/constant";

const Header = () => (
  <nav className="p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="text-white font-bold text-2xl">
        Hoa Tran
      </Link>
      <div className="space-x-8 lg:space-x-12 text-lg">
        {
          navLinks.map(({id, title}) => (
            <Link key={id} href={`#{id}`} className="text-white">
            {title}
          </Link>
        ))}
      </div>
    </div>
  </nav>
);

export default Header;
