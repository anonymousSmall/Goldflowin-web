import React, { useState, useEffect } from "react";
import useEcomStore from "../../store/ecom-store";

const HistoryCard = () => {
  const token = useEcomStore((state) => state.token);
  console.log(token)
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">ประวัติการสั่งซื้อ</h1>
      {/* คลุม */}
      <div className="space-y-4">
        {/* Cart Loop Order */}
      </div>
    </div>
  );
};

export default HistoryCard;
