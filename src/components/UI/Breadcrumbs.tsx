import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "motion/react";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (location.pathname === "/") return null;

  return (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-xs font-bold text-zinc-400 hover:text-blue-600 dark:text-zinc-500 dark:hover:text-white transition-colors uppercase tracking-widest"
          >
            <Home className="w-3 h-3 mr-2" />
            Accueil
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          return (
            <motion.li 
              key={to}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center"
            >
              <ChevronRight className="w-4 h-4 text-zinc-300 dark:text-zinc-700" />
              <Link
                to={to}
                className={`ml-1 text-xs font-bold uppercase tracking-widest transition-colors ${
                  last
                    ? "text-blue-600 cursor-default"
                    : "text-zinc-400 hover:text-blue-600 dark:text-zinc-500 dark:hover:text-white"
                }`}
                aria-current={last ? "page" : undefined}
                onClick={(e) => last && e.preventDefault()}
              >
                {value.replace(/-/g, " ")}
              </Link>
            </motion.li>
          );
        })}
      </ol>
    </nav>
  );
}
