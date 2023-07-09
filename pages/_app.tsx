import { IPHandler } from "@/utils/ip-handler";

export const ipHandler = new IPHandler();

interface MyAppProps {
  Component: any;
  pageProps: { [k: string]: number };
}
export default function MyApp({ Component, pageProps }: MyAppProps) {
  console.log("asdffdafadsfasd");
  return <Component {...pageProps} />;
}
