import React from "react";
import myImage from "../assets/Nvvr.jpg";
const Portfolio = () => {
  const hobbies = [
    {
      name: "Зураг зурах",
      icon: "🎨",
      description:
        "Төрөл бүрийн аргаар зурж, өөрийн санаагаа илэрхийлэх дуртай.",
    },
    {
      name: "Сагсан бөмбөг",
      icon: "🏀",
      description:
        "Идэвхтэй хөдөлгөөн хийж, багийн хамтын ажиллагааг мэдрэх дуртай.",
    },
    {
      name: "Волейбол",
      icon: "🏐",
      description: "Спортлог байдлыг эрхэмлэдэг, найзуудтайгаа тоглох дуртай.",
    },
    {
      name: "Шатар тоглох",
      icon: "♟️",
      description: "Сэтгэхүй, стратегиа хөгжүүлэх сонирхолтой.",
    },
    {
      name: "Аниме үзэх",
      icon: "🎬",
      description:
        "Соёл, түүх, шинжлэх ухаан зэрэг өргөн хүрээний сэдэвтэй анимег сонирхдог.",
    },
  ];  



  return (
    <div className="min-h-screen bg-blue-600 font-sans">
      <nav className="bg-blue-600 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-black text-3xl font-bold tracking-wider">
            Altan-Ochir
          </h1>
          <ul className="flex space-x-8">
            <li>
              <a
                href="#home"
                className="text-white text-lg hover:text-blue-200 transition duration-300 font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white text-lg hover:text-blue-200 transition duration-300 font-medium"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#hobby"
                className="text-white text-lg hover:text-blue-200 transition duration-300 font-medium"
              >
                Hobby
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section
        id="home"
        className="py-24 md:py-32 bg-white flex items-center justify-center"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-4">
            Сайн уу, Намайг <span className="text-blue-600">Алтан-Oчир</span>{" "}
            Гэдэг
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Би бол Mongolkosen Technology College-ийн 4-р курсийн оюутан, орчин
            үеийн вэб хөгжүүлэлтийн технологи болох
            <span className="font-bold text-blue-700"></span> .
          </p>
          <a
            href="#about"
            className="inline-block bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Илүү ихийг
          </a>
        </div>
      </section>

      <section id="about" className="py-20 md:py-28 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
            Миний тухай
          </h2>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="rounded-full w-64 h-64 bg-gray-300 flex items-center justify-center text-gray-600 text-2xl border-4 border-blue-600 shadow-xl overflow-hidden">
                <img src={myImage} alt="" />
              </div>
            </div>

            <div className="md:w-2/3 p-8 bg-white rounded-2xl shadow-2xl">
              <h3 className="text-3xl font-bold text-blue-600 mb-4">
                Боловсрол & Товч Танилцуулга
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Намайг Алтан-Oчир гэдэг, би 18 настай. Би одоогоор Mongolkosen
                Technology College-ийн 4-р курст Вэб Хөгжүүлэлтийн чиглэлээр
                суралцаж байна. Сургуулийн мэдлэгээ практикт хэрэгжүүлж,
                ирээдүйн технологийн төслүүд дээр ажиллахыг эрмэлздэг.
              </p>

              <ul className="space-y-3 text-lg">
                <li className="text-gray-800">
                  <span className="font-semibold text-blue-700">Нас:</span> 18
                </li>
                <li className="text-gray-800">
                  <span className="font-semibold text-blue-700">Сургууль:</span>{" "}
                  Mongolkosen Technology College (МКТК)
                </li>
                <li className="text-gray-800">
                  <span className="font-semibold text-blue-700">Курс:</span> 4-р
                  курс (Оюутан)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="hobby" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
            Миний Сонирхол & Хобби
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-lg border-t-4 border-blue-500 
                                           hover:shadow-2xl transition duration-500 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 text-center">{hobby.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {hobby.name}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Холбоо барих</h2>
          <p className="mb-8 text-gray-400">
            Миний портфолио вэбсайтаар зочилсонд баярлалаа.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-blue-400 transition">
              Email
            </a>
            <a
              href="https://www.tiktok.com/@ikuyoonest?_r=1&_d=secCgYIASAHKAESPgo8qFlbSwKZdxzIGowtbibZsiOkcQSz%2Fyg6JQ41HCJR%2F3XDL6Ovp1ZmfSO6p8Di5fduB%2BHTJacgTq%2BbcIxxGgA%3D&_svg=1&checksum=2dac726870f056033558db40ed366d8cea483e3408e4f2ac7d233a6d7ee5a911&item_author_type=1&sec_uid=MS4wLjABAAAABOzgDXGVx8zm-FMwMNEdo8ooqQTxIFld88ZPjUgNenn-2JykVw1xMIHK4dcWUmJe&sec_user_id=MS4wLjABAAAABOzgDXGVx8zm-FMwMNEdo8ooqQTxIFld88ZPjUgNenn-2JykVw1xMIHK4dcWUmJe&share_app_id=1233&share_author_id=6674061941181318149&share_link_id=344325CF-4A35-48E5-BB2B-A6A648C176A1&share_region=MN&share_scene=1&sharer_language=en&social_share_type=4&source=h5_m&timestamp=1765436964&tt_from=copy&u_code=d5ce17m944mg99&ug_btm=b0%2Cb0&user_id=6674061941181318149&utm_campaign=client_share&utm_medium=ios&utm_source=copy"
              className="hover:text-blue-400 transition"
            >
              Tiktok
            </a>
            <a
              href="https://www.instagram.com/invites/contact/?igsh=1nidkt9jtqdc1&utm_content=m7cb99y"
              className="hover:text-blue-400 transition"
            >
              Instagram
            </a>
          </div>
          <div className="mt-12 text-sm text-gray-500 border-t border-gray-800 pt-8">
            &copy; 2024 Алтан-Очир. Mongol Kosen College of Technology.
          </div>
        </div>
      </section>
    </div>
  );
};
export default Portfolio;
