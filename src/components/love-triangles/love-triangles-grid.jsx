import React, { useEffect, useMemo } from "react";
import { MuuriComponent, getResponsiveStyle } from "muuri-react";
import { useMediaQuery } from "react-responsive";

export const ThemeContext = React.createContext(null);
const ThemeProvider = ({ children }) => {
    const IsMobileScreen = useMediaQuery({
      query: "(max-width: 767px)"
    });
    const isBigScreen = useMediaQuery({
      query: "(min-width: 824px)"
    });
    
    // Memoize the style.
    const style = useMemo(() => {
      const columns = () => {
          if (IsMobileScreen) {
            return 1 / 2;
          }
          if (isBigScreen) {
              return 1/4;
          }
          return 1/3;;
      }
      return getResponsiveStyle({
        columns:columns(),
        margin: "1%",
        ratio: 1
      });
    }, [isBigScreen, IsMobileScreen]);
  
    return (
      <ThemeContext.Provider value={style}>{children}</ThemeContext.Provider>
    );
  };

export default function LoveTrianglesGrid({ children }) {

  useEffect(() => {
    // HACK: Without this the tiles render in one column initially
    window.dispatchEvent(new Event('resize'))
  })
    return (
      <ThemeProvider>
        <MuuriComponent>
            {children}
        </MuuriComponent>
    </ThemeProvider>
    )
}