import Image from 'next/image';
const ComingSoonCard = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <Image
        src={'/assets/comingsoonlogo.jpg'}
        alt="An Image of the JELLC Logo"
        height={500}
        width={500}
      />

      <h1 className="text-4xl lg:text-8xl mt-24 mb-24">Page Coming Soon!</h1>
    </div>
  );
};

export default ComingSoonCard;
