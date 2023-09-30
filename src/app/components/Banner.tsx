import bannerImage from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bannerImage.src})`,
        }}
        className="md:h-72 h-48 bg-center bg-cover bg-no-repeat bg-blend-normal	 block mx-auto"
      >
        <div className="flex md:h-72 h-48 bg-black-600/30 backdrop-brightness-50">
          <h1 className=" text-center px-2 font-Playfair-Display mx-auto my-auto text-offWhite text-md md:text-2xl lg:text-3xl">
            Easy delicious Malaysian recipes by Nik Noriah
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Banner;
