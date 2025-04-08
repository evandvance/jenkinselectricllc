import Link from "next/link";
import FadeIn from "@/components/Utilities/FadeIn";

const ContactClusterCard = () => {
  return (
    <FadeIn>
      <div className="text-2xl space-y-2 w-[90%] lg:w-auto">
        <p>
          Phone Number:{" "}
          <Link
            className="text-jellcblue hover:underline underline-offset-2"
            href="tel:7317276578"
          >
            (731) 727-6578
          </Link>
        </p>
        <p>
          Email:{" "}
          <Link
            className="text-jellcblue hover:underline underline-offset-2"
            href="mailto:jenkinselectric96@gmail.com"
          >
            jenkinselectric96@gmail.com
          </Link>
        </p>
        <p>
          Address:{" "}
          <Link
            className="text-jellcblue hover:underline underline-offset-2"
            href={"https://maps.app.goo.gl/dUynoe9JCxRqiF5i6"}
          >
            357 W Main St, Adamsville, TN 38310
          </Link>
        </p>
      </div>
    </FadeIn>
  );
};

export default ContactClusterCard;
