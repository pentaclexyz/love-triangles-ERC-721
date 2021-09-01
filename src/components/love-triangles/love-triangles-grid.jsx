import React, { useEffect, useMemo, useState } from "react";
import { MuuriComponent, getResponsiveStyle } from "muuri-react";
import { useMediaQuery } from "react-responsive";

export const ThemeContext = React.createContext(null);
const ThemeProvider = ({ children, size }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)"
  });

  const isReallyBigScreen = useMediaQuery({
    query: "(min-width: 1320px)"
  });

  const style = useMemo(() => {
    const columns = () => {
      if (isMobile) {
        if (size === 'small') {
          return 1 / 3;
        }
        return 1;
      }
      if (size === 'small') {
        return 1 / 9;
      }
      return 1 / 3;;
    }
    return getResponsiveStyle({
      columns: columns(),
      margin: "1%",
      ratio: 1
    });
  }, [isReallyBigScreen, size, isMobile]);

  return (
    <ThemeContext.Provider value={style}>{children}</ThemeContext.Provider>
  );
};

export default function LoveTrianglesGrid({ children }) {

  const [size, setSize] = useState('small');

  useEffect(() => {
    // HACK: Without this the tiles render in one column initially
    window.dispatchEvent(new Event('resize'))
  })
  return (
    <ThemeProvider size={size}>
      <ul className="tg-list">
        <li className="tg-list-item flex-center">
          <span style={{marginRight: '1rem'}}>large</span>
          <input id="size-btn" className="tgl tgl-light" type="checkbox" onChange={() => setSize(size === 'small' ? 'large' : 'small')}/>
          <label htmlFor="size-btn" className="tgl-btn"></label>
          <span style={{marginLeft: '1rem'}}>smol</span>
        </li>
      </ul>
      <MuuriComponent>
        {children}
      </MuuriComponent>
    </ThemeProvider>
  )
}