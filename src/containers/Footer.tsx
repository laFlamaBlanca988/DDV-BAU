export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="/privacy" className="text-white hover:underline mr-4">
              Privacy Policy
            </a>
            <a href="/terms" className="text-white hover:underline">
              Terms of Service
            </a>
          </div>
          <p className="text-center">
            &copy; {new Date().getFullYear()} ddv-bau.de All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
