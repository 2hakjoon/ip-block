import { useRouter } from "next/router";

export default function MiddleAble() {
  const router = useRouter();
  return (
    <div>
      <div>{"접속차단 페이지"}</div>
      <div>{`${router?.query?.ip} : ${router?.query?.cnt}`}</div>
    </div>
  );
}
