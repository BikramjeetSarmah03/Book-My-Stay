"use client";

import useCountries from "@/hooks/useCountries";
import { SafeUser } from "@/types";
import { IconType } from "react-icons";
import Avatar from "../common/Avatar";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";

type ListingInfoProps = {
  user: SafeUser;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  description: string;
  roomCount: number;
  guestCount: number;
  bathroomCount: number;
  locationValue: string;
};

const Map = dynamic(() => import("../Map"), { ssr: false });

export default function ListingInfo({
  user,
  description,
  category,
  roomCount,
  bathroomCount,
  guestCount,
  locationValue,
}: ListingInfoProps) {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <div className="flex flex-col col-span-4 gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2 text-xl font-semibold">
          <div>Hosted by {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
        <div className="flex flex-row gap-4 font-light text-neutral-500">
          <div>{guestCount} guests</div>
          <div>{roomCount} rooms</div>
          <div>{bathroomCount} bathrooms</div>
        </div>
      </div>

      <hr />

      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}

      <hr />

      <div className="text-lg font-light text-neutral-500">{description}</div>

      <hr />

      <Map center={coordinates} />
    </div>
  );
}
