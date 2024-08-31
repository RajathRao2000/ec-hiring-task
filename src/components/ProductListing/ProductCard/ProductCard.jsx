const ProductCard = ({ id, title, price, thumbnail }) => {
  return (
    <div className="relative p-6 max-w-[375px] shadow rounded-2xl   h-full">
      <div className="relative  overflow-hidden bg-gray-50 ">
        <img
          className=" border-black mx-auto w-full h-full"
          src={thumbnail}
          alt=""
          width={300}
          height={300}
        />
        <div className="absolute bottom-4 -right-24 bg-green-600 text-white -rotate-[45deg] w-64  text-center ">
          $ {price}
        </div>
      </div>
      <div className="text-center p-1 text-xl">{title}</div>
    </div>
  );
};

export default ProductCard;
