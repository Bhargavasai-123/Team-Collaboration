export default function Footer() {
  return (
    <footer className="bg-[#024242] text-white py-4 text-center text-sm">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()} ReCirqularity. All rights reserved.</p>
      </div>
    </footer>
  );
}
