import type { HomeScreenOffer } from "@prisma/client";
import Link from "next/link";

interface CrazyDealsProps {
  offers: HomeScreenOffer[];
}

const CrazyDeals = ({ offers }: CrazyDealsProps) => {
  return (
    <div className="container mx-auto mb-[20px] px-4">
      <div className="flex justify-center">
        <div className="heading ownContainer uppercase sm:my-[40px]">
          CRAZY DEALS
        </div>
      </div>
      <div className="relative flex justify-center">
        <div className="flex overflow-x-auto gap-4 sm:gap-6 scroll-smooth no-scrollbar sm:justify-center">
          {offers.map((offer) => (
            <Link
              href={offer.link}
              key={offer.id}
              className="flex-shrink-0 w-[80vw] sm:w-[347px]"
            >
              <div className="flex flex-col items-center">
                <div className="w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={offer.images[0]?.url || ""}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center uppercase textGap font-[500] mt-2">
                  {offer.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrazyDeals;
