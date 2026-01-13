"use client";

import { useEffect, useState } from "react";

export default function ClientSafetyWrapper({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const safelyMockStorage = (storageType) => {
      try {
        const testKey = "__scope_test";
        window[storageType].setItem(testKey, "1");
        window[storageType].removeItem(testKey);
      } catch (e) {
        try {
          // If direct assignment fails (read-only), try defineProperty
          Object.defineProperty(window, storageType, {
            value: {
              getItem: () => null,
              setItem: () => {},
              removeItem: () => {},
              clear: () => {},
            },
            writable: true,
            configurable: true,
          });
        } catch (innerError) {
          console.warn(`Failed to mock ${storageType}:`, innerError);
        }
      }
    };

    safelyMockStorage("localStorage");
    safelyMockStorage("sessionStorage");

    setMounted(true);
  }, []);

  // 🚫 Prevent hydration crash
  if (!mounted) return null;

  return children;
}
