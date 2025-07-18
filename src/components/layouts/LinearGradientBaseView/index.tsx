import { useIsWeb } from "@/src/hooks/useIsWeb";
import { useTheme } from "@emotion/react";
import { ReactNode } from "react";
import HeaderOffsetView from "../HeaderOffsetView";
import { LinearGradientView } from "./styles";

const LinearGradientBaseView = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  const backgroundGradientStartColor =
    theme.colors.backgroundGradientStartColor;
  const backgroundGradientEndColor = theme.colors.backgroundGradientEndColor;
  const isWeb = useIsWeb();

  return (
    <LinearGradientView
      isWeb={isWeb}
      colors={[backgroundGradientStartColor, backgroundGradientEndColor]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      {isWeb ? <HeaderOffsetView>{children}</HeaderOffsetView> : children}
    </LinearGradientView>
  );
};

export default LinearGradientBaseView;
