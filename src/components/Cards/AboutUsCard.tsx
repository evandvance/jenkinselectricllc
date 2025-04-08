import Image from "next/image";
import ContactClusterCard from "@/components/Cards/ContactClusterCard";

interface AbouteUsCardProps {
  className?: string;
}

const AboutUsCard = ({ className }: AbouteUsCardProps) => {
  return (
    <div
      data-testid="aboutUsCard-1"
      id="about"
      className={`w-[80vw] h-content m-5 ${className ? className : ""}`}
    >
      <h2 className="text-5xl m-5">About Us</h2>
      <div className="flex flex-col justify-around items-center lg:flex-row">
        <Image
          className="m-5 rounded"
          src="/images/owners.jpg"
          alt="Image of the Owners of Jenkins Electric LLC"
          height={400}
          width={400}
        />
        <p className="text-xl lg:text-2xl mb-5 lg:m-5 lg:w-[50%]">
          We are licensed electricians and plumbers located in the Adamsville,
          TN. area. We have an appliance technician on staff. From changing
          lightbulbs to full house rewires, we have the experience, knowledge,
          and skillsets to meet your electrical and plumbing needs. We sell and
          repair appliances and window AC units. We also sell, program, install,
          and service Champion, Duramax, and Generac generators. We are here to
          serve you. Thank you and God bless!
        </p>
      </div>
      <div className="flex flex-col justify-center items-center m-3">
        <ContactClusterCard />
      </div>
    </div>
  );
};

export default AboutUsCard;
