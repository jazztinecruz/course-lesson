"use client";

import { useEffect, useState } from "react";
import { BASE_URL } from "@/constants/url";
import Card from "@/components/cards";

const Promotions = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const response = await fetch(`${BASE_URL}promotions`);
        const promotions = await response.json();
        setPromotions(promotions);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPromotions();
  }, []);

  if (!promotions) return null;

  return (
    <section className="flex flex-col items-center gap-4">
      <h2 className="text-center text-2xl font-bold">
        Our Community Promotions
      </h2>

      <ul className="grid lg:grid-cols-2 gap-4">
        {promotions.map((promotion) => (
          <Card data={promotion} key={promotion.id} />
        ))}
      </ul>
    </section>
  );
};

export default Promotions;
