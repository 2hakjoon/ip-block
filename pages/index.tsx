import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetStaticPropsType,
} from "next";
import requestIp from "request-ip";

const ips: { [k: string]: number } = {};

// This gets called on every request
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const detectedIp = requestIp.getClientIp(context.req) as string;
  ips[detectedIp] = ips[detectedIp] === undefined ? 0 : ips[detectedIp] + 1;
  return { props: { ips } };
}

export default function Home({
  ips,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  console.log(ips);
  return <>테스트</>;
}
