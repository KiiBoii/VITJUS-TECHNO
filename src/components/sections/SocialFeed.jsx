import { FaInstagram } from "react-icons/fa";

const IG_HANDLE = "@vitjuspku";
const IG_URL = "https://www.instagram.com/vitjuspku";

const POSTS = [
  {
    id: 1,
    image: "/images/post1.jfif",
    link: "https://www.instagram.com/vitjuspku",
  },
  {
    id: 2,
    image: "/images/post2.jfif",
    link: "https://www.instagram.com/vitjuspku",
  },
  {
    id: 3,
    image: "/images/post3.jfif",
    link: "https://www.instagram.com/vitjuspku",
  },
  {
    id: 4,
    image: "/images/post4.jfif",
    link: "https://www.instagram.com/vitjuspku",
  },
  {
    id: 5,
    image: "/images/post5.jfif",
    link: "https://www.instagram.com/vitjuspku",
  },
  {
    id: 6,
    image: "/images/post6.jfif",
    link: "https://www.instagram.com/vitjuspku",
  },
];

const PostCard = ({ post }) => (
  <a href={post.link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden group">
    {/* Square Image */}
    <div className="aspect-square overflow-hidden bg-[#fafbf7]">
      <img src={post.image} alt="Instagram Post"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
    </div>
  </a>
);

const SocialFeed = () => {
  return (
    <section className="bg-[#91c642] py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#194126] text-[28px] font-bold tracking-[4px] uppercase mb-4">
            Follow Us
          </p>

          <h2
            className="font-black leading-tight"
            style={{
              fontSize: "clamp(42px, 5vw, 68px)",
            }}
          >
            <span className="text-[#fafbf7]">Kita Ada di </span>
            <span className="text-[#fafbf7]">Instagram</span>
          </h2>

          <p className="text-[#194126]/80 text-[18px] mt-5 max-w-[700px] mx-auto leading-relaxed">
            Ikuti perjalanan segar VitJus, tips sehat, menu baru,
            dan promo spesial setiap harinya.
          </p>
        </div>

        {/* Instagram Grid - Square Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14">
          {POSTS.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Follow Button */}
        <div className="text-center">
          <a href={IG_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#f9a519] text-[#194126] font-bold px-9 py-4 rounded-full hover:scale-105 transition-all duration-300 no-underline">
            <FaInstagram className="text-[22px]" />
            Follow {IG_HANDLE}
          </a>
        </div>

      </div>
    </section>
  );
};

export default SocialFeed;