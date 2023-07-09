import { IPHandler } from "@/utils/ip-handler";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetStaticPropsType,
} from "next";
import requestIp from "request-ip";

const ipHandler = new IPHandler();

// This gets called on every request
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const detectedIp = requestIp.getClientIp(context.req) as string;
  ipHandler.connect(detectedIp);
  return { props: { ipObj: ipHandler.getIpObj() } };
}

export default function Home({
  ipObj,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  console.log(ipObj);
  return <>테스트</>;
}
