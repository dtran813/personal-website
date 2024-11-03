import Link from "next/link";
import { navLinks } from "@/utils/constant";

const Header = () => (
  <nav className="p-4">
    <div className="container mx-auto flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold text-white">
        Hoa Tran
      </Link>
      <div className="space-x-8 text-lg lg:space-x-12">
        {navLinks.map(({ id, title }) => (
          <Link key={id} href={`#${id}`} className="text-white">
            {title}
          </Link>
        ))}
      </div>
    </div>
  </nav>
);

export default Header;
