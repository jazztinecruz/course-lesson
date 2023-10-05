"use client";

import { useEffect, useState } from "react";
import { BASE_URL } from "@/constants/url";
import Card from "@/components/cards";

const Partnerships = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch(`${BASE_URL}partners`);
        const partners = await response.json();
        setPartners(partners);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPartners();
  }, []);

  if (!partners) return null;

  return (
    <section className="flex flex-col items-center gap-4">
      <h2 className="text-center text-2xl font-bold">Our Community Partners</h2>

      <ul className="grid lg:grid-cols-2 gap-4">
        {partners.map((partner) => (
          <Card data={partner} key={partner.id} />
        ))}
      </ul>
    </section>
  );
};

export default Partnerships;
