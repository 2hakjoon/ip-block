import { useRouter } from "next/router";

export default function MiddleAble() {
  const router = useRouter();
  return (
    <div>
      <div>{"차단페이지"}</div>
      <div>{`${router?.query?.ip} : ${router?.query?.cnt}`}</div>
    </div>
  );
}
