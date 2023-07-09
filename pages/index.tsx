import { GetServerSidePropsContext, InferGetStaticPropsType } from "next";
import requestIp from "request-ip";
import { ipHandler } from "./_app";

// This gets called on every request
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const detectedIp = requestIp.getClientIp(context.req) as string;
  const result = ipHandler.connect(detectedIp);

  return { props: { ipObj: ipHandler.getIpObj(), detectedIp, result } };
}

export default function Home({
  ipObj,
  detectedIp,
  result,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  console.log(ipObj);
  return (
    <div>
      <span>
        {`접속ip : ${detectedIp}`}
        {`접속 가능 횟수 : ${ipObj[detectedIp]}/3`}
        {`현재 접속 가능 ?  : ${result ? "가능" : "불가능"}`}
      </span>
    </div>
  );
}
