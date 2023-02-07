import Menu from "@/components/Menu";
import { sleep } from "@/components/Utils";

interface NoSleepPageProps {
  params: {
    seconds: string;
  };
}

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params: { seconds },
}: NoSleepPageProps) {
  await sleep(parseInt(seconds, 10) * 1e3);

  return {
    title: `Sleep (with async metadata = ${seconds} seconds)`,
  };
}

export default async function SleepPage({
  params: { seconds },
}: NoSleepPageProps) {
  await sleep(parseInt(seconds, 10) * 1e3);

  return (
    <main>
      <h1>Sleep (with async metadata)</h1>
      <p>I called a fake API and it took {seconds} seconds</p>
      <Menu />
    </main>
  );
}
