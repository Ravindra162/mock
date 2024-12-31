import React, { useState } from 'react';
import { BookOpen, User, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">EduAssess</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLinks />
            <SignInButton />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLinks mobile />
            <div className="pt-2">
              <SignInButton mobile />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const baseClasses = mobile
    ? "block px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md w-full text-left"
    : "px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900";

  return (
    <>
      <button className={baseClasses}>Practice</button>
      <button className={baseClasses}>Assessments</button>
    </>
  );
}

function SignInButton({ mobile = false }: { mobile?: boolean }) {
  const baseClasses = mobile
    ? "w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
    : "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700";

  return (
    <button className={baseClasses}>
      <User className="h-4 w-4 mr-2" />
      Sign In
    </button>
  );
}