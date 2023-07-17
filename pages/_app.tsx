import { IPHandler } from "../utils/ip-handler";

export const ipHandler = new IPHandler();

export const ipHandler2 = new IPHandler();

interface MyAppProps {
  Component: any;
  pageProps: { [k: string]: number };
}

export default function MyApp({ Component, pageProps }: MyAppProps) {
  return <Component {...pageProps} />;
}
