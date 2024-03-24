// "use client";

// import Link from "next/link";
// import React from "react";
// import { useSearchParams } from "next/navigation";

// export default function NavbarItem({ title, param }) {
//   const searchParams = useSearchParams();
//   const genre = searchParams.get("genre");
//   return (
//     <div>
//       <Link
//         className={`hover:text-amber-600 font-semibold ${
//           genre === param
//             ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
//             : ""
//         }`}
//         href={`/?genre=${param}`}
//       >
//         {title}
//       </Link>
//     </div>
//   );
// }

// "use client";
// "use client";
"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavItem title={title} param={param} />
    </Suspense>
  );
}

function NavItem({ title, param }) {
  const searchParams = useSearchParams();
  // Your NavbarItem component logic here
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
