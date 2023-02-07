import { type Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: null,
  title: {
    default: "Default Head",
    template: "%s | Next.js #45418",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <p>
          <strong>TL;DR - </strong> the loading layer only seems to render once
          the <code>metadata</code> has returned. Until then, a user gets no
          feedback about the page transition.
        </p>
        <p>
          There are two routes defined:{" "}
          <code>/sync-metadata/[seconds]/page.tsx</code> and{" "}
          <code>/async-metadata/[seconds]/page.tsx</code>
        </p>
        <p>
          In each route, <code>page.tsx</code> asynchronously calls a slow API
          (sleeps for <code>[seconds]</code>). In the{" "}
          <code>/sync-metadata/</code> route, the <code>metdata</code> is
          synchronous and returns immediately, whereas in{" "}
          <code>/async-metadata/</code> it also makes a slow (fake) API call
          (the same duration as the main render).
        </p>
        <p>
          Both routes have a <code>loading.tsx</code> file but the loading layer
          is only shown for the <code>/sync-metadata/</code> route.
        </p>
        <hr />
        <div>{children}</div>
      </body>
    </html>
  );
}
