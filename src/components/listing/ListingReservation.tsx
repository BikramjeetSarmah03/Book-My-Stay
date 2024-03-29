"use client";

import { Range } from "react-date-range";
import Calender from "../common/inputs/Calender";
import Button from "../common/Button";

type Props = {
  price: number;
  totalPrice: number;
  dateRange: Range;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
};

export default function ListingReservation({
  price,
  totalPrice,
  onChangeDate,
  dateRange,
  onSubmit,
  disabled,
  disabledDates,
}: Props) {
  return (
    <div className="overflow-hidden bg-white border rounded-xl border-neutral-200">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">₹ {price}</div>
        <div className="font-light text-neutral-600"> / night</div>
      </div>

      <hr />

      <Calender
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value: any) => onChangeDate(value.selection)}
      />

      <hr />

      <div className="p-4">
        <Button disabled={disabled} label="Reserve" onClick={onSubmit} />
      </div>

      <div className="flex flex-row items-center justify-between p-4 text-lg font-semibold">
        <div>Total</div>
        <div>₹ {totalPrice}</div>
      </div>
    </div>
  );
}
