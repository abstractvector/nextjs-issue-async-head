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
          the <code>head.tsx</code> component has rendered. Until then, a user
          gets no feedback about the page transition.
        </p>
        <p>
          There are two routes defined: <code>/sleep/[seconds]/page.tsx</code>{" "}
          and <code>/sleep-no-head/[seconds]/page.tsx</code>
        </p>
        <p>
          In each route, <code>page.tsx</code> asynchronously calls a slow API
          (sleeps for <code>[seconds]</code>). In the{" "}
          <code>/sleep-no-head/</code> route, the <code>head.tsx</code> file
          returns immediately, whereas in <code>/sleep/</code> it also makes a
          slow API call.
        </p>
        <p>
          Both routes have a <code>loading.tsx</code> file but the loading layer
          is only shown for the <code>/sleep-no-head/</code> route.
        </p>
        <hr />
        <div>{children}</div>
      </body>
    </html>
  );
}
