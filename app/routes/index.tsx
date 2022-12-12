import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ display: "flex", gap: "24px" }}>
      <Link to="/lookbehind" prefetch="intent">
        Lookbehind
      </Link>

      <Link to="/unaffected" prefetch="intent">
        Unaffected
      </Link>
    </div>
  );
}
