import ImageCarousel, { ImageCarouselData } from '../Carousels/ImageCarousel';

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

  const images: ImageCarouselData[] = [
    { image: '/images/generator.jpg', alt: 'Image of a generator' },
    {
      image: '/images/microwaves.jpeg',
      alt: 'Image of a lot of microwaves in a warehouse',
    },
    {
      image: '/images/service_connect.jpeg',
      alt: 'Image of an electrical panel',
    },
    {
      image: '/images/truck_stuck_in_mud.jpeg',
      alt: 'Image of a red truck stuck in the mud',
    },

    {
      image: '/images/pretty_panel.jpg',
      alt: 'Image of a well done electrical panel',
    },
  ];

  return (
    <div
      data-testid="servicesProvidedCard-1"
      id="services"
      className={`w-[80vw] h-content m-5 ${className ? className : ''}`}
    >
      <h2 className="text-5xl m-5">Services Provided</h2>
      <div className="flex flex-col-reverse justify-around items-center lg:flex-row">
        <ul className="text-2xl lg:text-4xl my-5 list-disc space-y-1 lg:space-y-2">
          {servicesArray.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>

        <div className="w-[80vw] lg:w-auto">
          <ImageCarousel images={images} />
        </div>
      </div>
    </div>
  );
};

export default ServicesProvidedCard;
