import { usePathname } from "expo-router";

export const useIsActiveTab = (href: string): boolean => {
  const pathname = usePathname();
  return pathname === href || pathname.startsWith(`${href}/`);
};

