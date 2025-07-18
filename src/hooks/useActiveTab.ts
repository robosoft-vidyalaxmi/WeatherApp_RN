import { usePathname } from "expo-router";

export const useIsActiveTab = (href: string) => {
  const pathname = usePathname();
  return pathname === href;
};
