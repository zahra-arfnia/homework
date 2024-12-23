import React from "react";
import { notFound } from "next/navigation";

export default function page({ params }) {
  if (isNaN(params.id)) {
    notFound();
  }
  return <div className="text-center mt-5 text-lg font-semibold">product with id : {params.id}</div>;
}
