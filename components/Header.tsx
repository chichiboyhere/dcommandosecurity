"use client";

import { useState } from "react";

import { X, Menu } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/theme/theme-toggle";
import Image from "next/image";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const containerVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    exit: { y: "-100%", opacity: 0, transition: { duration: 0.4 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15 },
    }),
  };

  return (
    <header className="fixed top-0 w-full bg-white text-blue-900 z-55 shadow dark:bg-[#191919]  dark:text-[#ffffffcf]">
      <div className="flex justify-between items-center md:p-4  p-2">
        <Link
          href="/"
          className="bg-transparent dark:bg-gray-300 py-2 px-5 rounded-4xl"
        >
          <Image
            src="/images/brand/dcommando4.png"
            alt="brand logo"
            width={100}
            height={100}
            className="w-48 h-8"
          />
        </Link>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button onClick={() => setMenuOpen(true)}>
            <Menu className="text-blue-900 w-6 h-6 dark:text-[#ffffffcf]" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
            className="fixed inset-0 z-50 bg-white dark:bg-gray-800 backdrop-blur-lg p-8 flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4"
            >
              <X className="w-6 h-6 text-blue-900 dark:text-white" />
            </button>

            <motion.nav
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="w-full max-w-md"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  custom={index}
                  variants={itemVariants}
                  className="text-blue-900 dark:text-[#ffffffcf] text-xl font-semibold text-center py-4 border-b border-blue-300 transition-colors duration-300 hover:text-blue-600 cursor-pointer"
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    data-aos="fade-up"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
