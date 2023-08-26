import getCurrentUser from "@/actions/getCurrentUser";
import getListingById from "@/actions/getListingById";
import EmptyState from "@/components/EmptyState";
import ClientOnly from "@/components/common/ClientOnly";
import ListingClient from "@/components/listing/ListingClient";

interface IParams {
  listingId?: string;
}

export default async function Listing({ params }: { params: IParams }) {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient listing={listing} currentUser={currentUser} />
    </ClientOnly>
  );
}
