// src/components/UuidInitializer.tsx
"use client";

import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export function UuidInitializer() {
  useEffect(() => {
    try {
      const existing = localStorage.getItem("user_uuid");
      if (!existing) {
        const id = uuidv4();
        localStorage.setItem("user_uuid", id);
        console.log("Generated UUID:", id);
      }
    } catch (e) {
      console.error("Failed to access localStorage", e);
    }
  }, []);

  // Ничего не рисуем, компонент нужен только ради эффекта
  return null;
}
