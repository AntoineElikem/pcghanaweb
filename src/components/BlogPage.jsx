import blogFeatured from "../assets/blog_featured.png";
import articleImage1 from "../assets/articleimage1.png";
import articleImage2 from "../assets/articleimage2.png";
import articleImage3 from "../assets/articleimage3.png";
import articleImage4 from "../assets/articleimage4.png";
import articleImage5 from "../assets/articleimage5.png";
import articleImage6 from "../assets/articleimage6.png";
import articleImage7 from "../assets/articleimage7.png";
import articleImage8 from "../assets/articleimage8.png";
import articleImage9 from "../assets/articleimage9.png";
import Footer from "./Footer";

const BlogPage = () => {
  const articleImages = [
    articleImage1,
    articleImage2,
    articleImage3,
    articleImage4,
    articleImage5,
    articleImage6,
    articleImage7,
    articleImage8,
    articleImage9,
  ];

  const articleTitles = [
    "The Future of E-Pharmacy",
    "Breaking News in Pharmacy",
    "Understanding Pharmacy Regulations",
    "Innovations in E-Pharmacy",
    "Latest Trends in General News",
    "Pharmacy Practice Insights",
    "E-Pharmacy: What You Need to Know",
    "General News: Health Updates",
    "Uncategorized: Miscellaneous Topics",
  ];

  const articleHeadlines = [
    "How technology is transforming the pharmacy industry",
    "New policies affecting the pharmacy sector",
    "A deep dive into pharmacy regulations",
    "Cutting-edge innovations in e-pharmacy",
    "Top news stories in the pharmacy world",
    "Expert insights into pharmacy practice",
    "Essential information about e-pharmacy",
    "Health updates you need to know",
    "Various topics in the pharmacy field",
  ];

  return (
    <>
      <div className="bg-[#112C50] min-h-screen md:p-8 mx-auto">
        {/* Header */}
        <header className="mb-8 max-w-[80%] mx-auto ">
          <h1 className="text-4xl text-white font-bold">Our Blog</h1>
        </header>

        {/* Featured Article */}
        <section className="mb-8 p-4 bg-white rounded-lg shadow-lg grid md:grid-cols-2 gap-4 max-w-[80%] mx-auto">
          <div className="flex flex-col justify-center p-10">
            <span className="text-sm font-bold text-blue-600">Featured:</span>
            <h2 className="text-2xl font-bold mb-2">
              Learn more about the policies set by the Council
            </h2>
            <p className="text-gray-700 mb-4">
              The Pharmacy Council, as part of its mandate, sets and enforces
              policies and standards for all aspects of Pharmacy Practice in
              Ghana.
            </p>
            <button className="bg-[#112C50] text-white py-2 px-4 rounded-xl hover:bg-gray-800">
              Read Now
            </button>
          </div>
          <div>
            <img
              className="rounded-lg object-cover"
              src={blogFeatured}
              alt="Featured Article"
            />
          </div>
        </section>

        {/* Categories */}
        <nav className="mb-8 max-w-[80%] mx-auto">
          <ul className="flex space-x-1">
            <li className="text-white font-bold cursor-pointer">
              All articles
            </li>
            <li className="text-white/70 cursor-pointer">E-Pharm</li>
            <li className="text-white/70 cursor-pointer">News</li>
            <li className="text-white/70 cursor-pointer">Uncategorized</li>
          </ul>
        </nav>

        {/* Articles Grid */}
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-[80%] mx-auto mb-20">
          {articleImages.map((image, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-lg">
              <img
                className="rounded-lg object-cover mb-4"
                src={image}
                alt={`Article ${i + 1}`}
              />
              <h3 className="text-lg font-bold mb-2">
                {["E-Pharmacy", "General News", "Uncategorized"][i % 3]}
              </h3>
              <h2 className="text-xl font-semibold mb-2">
                {articleTitles[i % articleTitles.length]} –{" "}
                {articleHeadlines[i % articleHeadlines.length]}
              </h2>
              <button className="text-blue-500 font-bold">Read Now</button>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
