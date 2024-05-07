
'use client'
import React from "react";
import Image from "next/image";

function Card(props) {
  return (
    <div className="">
      <Image
        className="rounded-lg p-6"
        src={props.children}
        width={400}
        height={400}
        alt="img"
      />
      <p>{props.children}</p>
    </div>
  );
}

export default Card;
