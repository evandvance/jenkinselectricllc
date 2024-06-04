import Image from 'next/image';

interface AbouteUsCardProps {
  className?: string;
}

const AboutUsCard = ({ className }: AbouteUsCardProps) => {
  return (
    <div
      data-testid="aboutUsCard-1"
      id="about"
      className={`w-[80vw] h-content m-5 ${className ? className : ''}`}
    >
      <h2 className="text-5xl m-5">About Us</h2>
      <div className="flex flex-col justify-around items-center lg:flex-row">
        <Image
          className="m-5"
          src="/images/owners.jpg"
          alt="Image of the Owners of Jenkins Electric LLC"
          height={500}
          width={500}
        />
        <p className="text-xl lg:text-2xl m-5 lg:w-[50%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          voluptas, nisi tenetur dolorem qui obcaecati nulla perferendis, magnam
          fugiat nemo consectetur quaerat illo neque, tempore eius! Soluta
          adipisci commodi error. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Officiis voluptas, nisi tenetur dolorem qui
          obcaecati nulla perferendis, magnam fugiat nemo consectetur quaerat
          illo neque, tempore eius! Soluta adipisci commodi error. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Officiis voluptas, nisi
          tenetur dolorem qui obcaecati nulla perferendis, magnam fugiat nemo
          consectetur quaerat illo neque, tempore eius! Soluta adipisci commodi
          error. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Officiis voluptas, nisi tenetur dolorem qui obcaecati nulla
          perferendis, magnam fugiat nemo consectetur quaerat illo neque,
          tempore eius! Soluta adipisci commodi error.
        </p>
      </div>
    </div>
  );
};

export default AboutUsCard;
