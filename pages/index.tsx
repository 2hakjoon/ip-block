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
      <div>
        <div>{"접속 중인 ip목록"}</div>
        {Object.keys(ipObj).map((ip) => (
          <div key={ip}>{`ip : ${ip} : ${ipObj[ip]}회`}</div>
        ))}
      </div>
      <br />
      <br />
      <br />

      <span>
        {`현재 접속 ip : ${detectedIp}`}
        <br />
        {`접속 가능 횟수 : ${ipObj[detectedIp]}/3`}
        <br />
        {`현재 접속 가능 여부  : ${result ? "가능" : "불가능"}`}
      </span>
    </div>
  );
}
