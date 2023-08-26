"use client";

import useCountries from "@/hooks/useCountries";
import { SafeUser } from "@/types";
import Heading from "../common/Heading";
import Image from "next/image";
import HeartButton from "../common/HeartButton";

type ListingHeadProps = {
  title: string;
  imageSrc: string;
  locationValue: string;
  id: string;
  currentUser?: SafeUser | null;
};

export default function ListingHead({
  id,
  imageSrc,
  locationValue,
  title,
  currentUser,
}: ListingHeadProps) {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />

      <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
        <Image
          fill
          alt="ListingImage"
          src={imageSrc}
          className="object-cover w-full"
        />

        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
}
