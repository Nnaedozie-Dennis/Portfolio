export function Footer() {
const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-900 text-center">
      <p>
        Nnaedozie Chukwuneta Dennis © {currentYear}. All rights reserved.
      </p>
    </footer>
  );
}

