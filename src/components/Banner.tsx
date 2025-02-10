import Link from "next/link";

export default function Banner() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center p-2 bg-gray-100">
        <div className="flex gap-4">
          <Link href="/login" className="hover:text-gray-600">
            Login
          </Link>
          <Link href="/register" className="hover:text-gray-600">
            Register
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href="/wishlist" className="hover:text-gray-600">
            Wishlist
          </Link>
          <Link href="/cart" className="hover:text-gray-600">
            Cart
          </Link>
        </div>
      </div>

      <div className="flex h-32 justify-center items-center">
        <Link href="/">
          <h1 className="scroll-m-20 text-4xl font-black tracking-tight lg:text-5xl lg:font-black">
            E-COMMERCE SITE
          </h1>
        </Link>
      </div>

      <div className="flex justify-center p-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
