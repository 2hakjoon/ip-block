import { useRouter } from "next/router";

export default function MiddleAble() {
  const router = useRouter();
  return (
    <div>
      접속 가능! 새로고침 ㄱㄱ
      <div>{`${router?.query?.ip} : ${router?.query?.cnt}`}</div>
    </div>
  );
}
