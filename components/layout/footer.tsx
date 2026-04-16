export function Footer() {
  return (
    <footer className="bg-premium text-white">
      <div className="mx-auto grid max-w-container gap-6 px-4 py-14 md:px-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">Harleys Realtor</h3>
          <p className="mt-2 text-sm text-white/80">Premium Nairobi real estate across sales, lettings, management, and consultancy.</p>
        </div>
        <div>
          <p className="text-sm">Phone: +254 700 000 000</p>
          <p className="text-sm">Email: info@harleysrealtor.co.ke</p>
        </div>
        <div>
          <p className="text-sm text-white/80">© {new Date().getFullYear()} Harleys Realtor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
