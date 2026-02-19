import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
export default getRequestConfig(async () => {
  // Static for now, we'll change this later
  const cookieStore = cookies();
  const locale = (await cookieStore).get("NEXT_LOCALE")?.value || "en";
  console.log(locale);
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
