import EmptyState from "@/components/EmptyState";
import ClientOnly from "@/components/common/ClientOnly";

import getReservations from "@/actions/getReservations";
import getCurrentUser from "@/actions/getCurrentUser";
import ReservationsClient from "@/components/reservations/ReservationsClient";

export default async function MyReservations() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({ authorId: currentUser.id });

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No Reservations found"
          subtitle="Looks like you have no reservations on your properties"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ReservationsClient
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
