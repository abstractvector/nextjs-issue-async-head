import Link from "next/link";

export default function Menu() {
  const seconds = Array.from(Array(5).keys());
  return (
    <>
      <p>
        <Link href="/">Home</Link>
      </p>
      <ul>
        {Array.from(Array(5).keys()).map((i) => {
          const seconds = i + 1;
          return (
            <li key={seconds}>
              Sleep for {seconds} second{seconds > 1 ? "s" : ""} with:{" "}
              <Link href={`/sync-metadata/${seconds}`}>
                sync metadata
              </Link>{" "}
              |{" "}
              <Link href={`/async-metadata/${seconds}`}>
                async metadata
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
