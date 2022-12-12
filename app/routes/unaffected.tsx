import { Link } from "@remix-run/react";

export default function NestedPage() {
  return (
    <>
      <Link to="/lookbehind" prefetch="intent">
        /lookbehind
      </Link>
    </>
  );
}
