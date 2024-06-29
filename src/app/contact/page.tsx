import Link from 'next/link';
import ContactCard from '@/components/Cards/ContactCard';
import BlueButton from '@/components/Buttons/BlueButton';

const ContactPage = () => {
  return (
    <div className="flex flex-col justify-center items-center my-5 space-y-6">
      <h1 className="text-3xl lg:text-5xl">Contact Us Now!</h1>
      <ContactCard />
      <BlueButton
        title="Book Online Now"
        href="https://book.housecallpro.com/book/Jenkins-Electric/797e158df4664699a9b36fc2548b2cb2?v2=true"
        target="_blank"
      />
      <div className="text-2xl space-y-2 w-[90%] lg:w-auto">
        <p>
          Phone Number:{' '}
          <Link
            className="text-jellcblue hover:underline underline-offset-2"
            href="tel:7317276578"
          >
            (731) 727-6578
          </Link>
        </p>
        <p>
          Email:{' '}
          <Link
            className="text-jellcblue hover:underline underline-offset-2"
            href="mailto:jenkinselectric96@gmail.com"
          >
            jenkinselectric96@gmail.com
          </Link>
        </p>
        <p>
          Address:{' '}
          <Link
            className="text-jellcblue hover:underline underline-offset-2"
            href={'https://maps.app.goo.gl/dUynoe9JCxRqiF5i6'}
          >
            357 W Main St, Adamsville, TN 38310
          </Link>
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.934441422707!2d-88.3993759241365!3d35.23300197273523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887c4c9c0a9a3a6d%3A0x9670eb45a4f8f0f9!2s357%20W%20Main%20St%2C%20Adamsville%2C%20TN%2038310!5e0!3m2!1sen!2sus!4v1719333952388!5m2!1sen!2sus"
        loading="lazy"
        className=" w-[90vw] lg:w-[70vw] h-[50vh] lg:h-[70vh]"
      ></iframe>
    </div>
  );
};

export default ContactPage;
