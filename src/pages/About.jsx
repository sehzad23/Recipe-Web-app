import Footer from "../componants/Footer";

const About = () => {
  return (

<>

    <div className="min-mb min-h-screen bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="lg:text-5xl text-4xl font-extrabold text-center text-orange-600 mb-12">
          About <span className="text-gray-800">Cook..</span>
        </h1>

        {/* Section Card */}
        <div className="bg-yellow-100 p-6 rounded-2xl shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-orange-500 mb-3">Welcome!</h2>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold">Cook..</span> is a simple, clean, and fun app for storing and managing your recipes.
            Whether you’re cooking at home or sharing recipes with friends, this app is built to make your experience smooth and enjoyable.
          </p>
        </div>

        {/* Features */}
        <div className="bg-yellow-100 p-6 rounded-2xl shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-orange-500 mb-3">✨ Key Features</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Create and save your own recipes</li>
            <li>Upload images to visualize your dish</li>
            <li>Edit and update anytime</li>
            <li>Delete recipes in one click</li>
            <li>Responsive design for mobile and desktop</li>
          </ul>
        </div>

        {/* Developer Info */}
        <div className="bg-yellow-100 p-6 rounded-2xl shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-orange-500 mb-3">👨‍💻 About the Developer</h2>
          <ul className="text-gray-700 space-y-2">
            <li><strong>Name:</strong> Ansari MOHD Sehzad</li>
            <li><strong>Email:</strong> sehaans87@gmail.com</li>
            <li><strong>Qualification:</strong> BCA (2025), Veer Narmad South Gujarat University</li>
            <li><strong>Skills:</strong> HTML, CSS, JavaScript, React.js, Tailwind CSS, Git & GitHub</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="bg-yellow-100 p-6 rounded-2xl shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-orange-500 mb-3">🛠 Tech Stack</h2>
          <div className="flex flex-wrap gap-4 text-gray-700">
            <span className="bg-orange-100 px-3 py-1 rounded-full shadow">React.js</span>
            <span className="bg-orange-100 px-3 py-1 rounded-full shadow">Tailwind CSS</span>
            <span className="bg-orange-100 px-3 py-1 rounded-full shadow">React Hook Form</span>
            <span className="bg-orange-100 px-3 py-1 rounded-full shadow">Context API</span>
            <span className="bg-orange-100 px-3 py-1 rounded-full shadow">nanoid</span>
            <span className="bg-orange-100 px-3 py-1 rounded-full shadow">React Toastify</span>
          </div>
        </div>

        {/* Future Goals */}
        <div className="bg-yellow-100 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-orange-500 mb-3">🚀 Future Goals</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Login/signup system</li>
            <li>Favorites & bookmarks</li>
            <li>Ratings and comments on recipes</li>
            <li>Public recipe sharing</li>
          </ul>
        </div>
      </div>

    </div>

    <Footer />
</>

  );
};

export default About;
