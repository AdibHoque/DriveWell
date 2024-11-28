"use client";

interface Service {
  id: string;
  name: string;
  price: number;
  image: string;
}

import React, {useEffect, useState} from "react";
import SectionTitle from "./SectionTitle";
import {Card} from "./Card";

const Services = () => {
  const [data, setData] = useState<Service[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <SectionTitle
        heading="Services"
        title="Our Service Area"
        description="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-md:px-4">
        {data.map((d) => (
          <Card
            name={d.name}
            price={d.price}
            image={d.image}
            id={d.id}
            key={d.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
