import Menu from "@/components/Menu";
import { sleep } from "@/components/Utils";

export interface NoSleepPageProps {
  params: {
    seconds: string;
  };
}

export const dynamic = "force-dynamic";

export default async function NoSleepPage({
  params: { seconds },
}: NoSleepPageProps) {
  await sleep(parseInt(seconds, 10) * 1e3);

  return (
    <main>
      <h1>Sleep (with async head)</h1>
      <p>I called a fake API and it took {seconds} seconds</p>
      <Menu />
    </main>
  );
}
