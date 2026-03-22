export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-text-muted">
            {currentYear} Owen Bot. All rights reserved.
          </p>
          <p className="text-sm text-text-muted mt-2">
            Made with love by xodobyte
          </p>
        </div>
      </div>
    </footer>
  );
}
