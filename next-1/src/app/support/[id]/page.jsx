import React from "react";

export default function page({ params }) {
  return <div className="text-center mt-5 text-lg font-semibold">support page with id : {params.id}</div>;
}
