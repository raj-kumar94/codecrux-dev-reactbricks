import Link from 'next/link';
// import CrispScript from './CrispScript';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-12 h-32">
      {/* <CrispScript /> */}
      <div className="max-w-5xl mx-auto flex justify-between">
        <div className="flex items-center space-x-4">
          {/* <img
            src="/react-bricks-icon.svg"
            alt="React Bricks"
            className="w-8"
          /> */}
          <div className="uppercase text-sm tracking-wider">
            <a href="/" className="rounded text-gray-600 font-medium transition duration-200">
              Home
            </a>
          </div>
          
          <div className="uppercase text-sm tracking-wider">
            <a href="/blog" className="rounded text-gray-600 font-medium transition duration-200">
              Blog
            </a>
          </div>

          <div>
              <a href="/privacy-policy" className="px-5 rounded text-gray-600 font-medium transition duration-200">
                Privacy Policy
              </a>
          </div>
        </div>
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()}{' '}
          <a href="/" className="hover:text-pink-600">
            Codecrux Dev
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
