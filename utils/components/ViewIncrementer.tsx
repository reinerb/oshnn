"use client";

import React, { useEffect } from "react";
import { incrementViews } from "../queries/incrementViews";

type ViewIncrementerProps = {
  id: number;
};

function ViewIncrementer({ id }: ViewIncrementerProps) {
  useEffect(() => {
    async function increment() {
      await incrementViews(id);
    }

    increment();
  }, [id]);

  return null;
}

export default ViewIncrementer;
