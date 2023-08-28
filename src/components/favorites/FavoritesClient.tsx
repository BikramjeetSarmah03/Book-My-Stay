"use client";

import { SafeListing, SafeUser } from "@/types";
import Container from "../common/Container";
import Heading from "../common/Heading";
import ListingCard from "../listing/ListingCard";

type Props = {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
};

export default function FavoritesClient({ listings, currentUser }: Props) {
  return (
    <Container>
      <Heading
        title="Favorites"
        subtitle="List of places you have favorites!"
      />

      <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            currentUser={currentUser}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
}
