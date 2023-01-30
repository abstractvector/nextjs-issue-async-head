import Menu from "@/components/Menu";
import { sleep } from "@/components/Utils";

export interface SleepHeadProps {
  params: {
    seconds: string;
  };
}

export default async function SleepHead({
  params: { seconds },
}: SleepHeadProps) {
  await sleep(parseInt(seconds, 10) * 1e3);

  return (
    <>
      <title>Sleep (with async head)</title>
    </>
  );
}
