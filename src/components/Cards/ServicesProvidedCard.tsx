import Image from 'next/image';

interface ServicesProvidedCardProps {
  className?: string;
}

const ServicesProvidedCard = ({ className }: ServicesProvidedCardProps) => {
  const servicesArray = [
    'General Electric Needs',
    'Generator Installation',
    'Generator Maintainence',
    'Service Poles',
    'RV/Electric Car Hookups',
    'Plumbing',
    'Appliance Repair',
    'And More!',
  ];

  return (
    <div className="w-screen bg-white flex justify-center">
      <div
        data-testid="servicesProvidedCard-1"
        id="services"
        className={`w-[80vw] h-content m-5 ${className ? className : ''}`}
      >
        <h2 className="text-5xl m-5">Services Provided</h2>
        <div className="flex flex-col justify-around items-center lg:flex-row">
          <ul className="text-2xl lg:text-4xl my-5 list-disc space-y-1 lg:space-y-2">
            {servicesArray.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
          <Image
            src="/images/vehicles.jpg"
            alt="Image of vehicles parked in front of a garage"
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesProvidedCard;
