import EmptyState from "@/components/EmptyState";
import ClientOnly from "@/components/common/ClientOnly";

import getCurrentUser from "@/actions/getCurrentUser";
import getListings from "@/actions/getListings";
import PropertiesClient from "@/components/properties/PropertiesClient";

export default async function MyProperties() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  const listings = await getListings({ userId: currentUser.id });

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No properties found"
          subtitle="Looks like you have no properties"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <PropertiesClient currentUser={currentUser} listings={listings} />
    </ClientOnly>
  );
}
