import React, { useState, useEffect, useMemo } from "react";
import { Container, MainContentArea } from "./App.styles";
import SideMenuComp from "../SidePanel/SideMenuComp";
import HeaderComp from "../Header/HeaderComp";
import ParentComp from "../MainSection/ParentComp";
import { mockJSONData } from "../../Mock/MockData";

const App = () => {
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setData(mockJSONData);
  }, []);

  const handleChange = (e) => {
    if (e?.target && e?.target?.value) {
      setInputValue(e?.target?.value);
    }
  };

  const filterItem = useMemo(
    () =>
      inputValue.length > 0
        ? data.filter((item) =>
            item.Title.toLowerCase().includes(inputValue.toLowerCase())
          )
        : data,
    [data, inputValue]
  );

  const [extendNav, setExtendNav] = useState(false);

  const handleOnClickMenu = (result) => {
    setExtendNav(result);
  };

  const onClear = (e) => {
    setInputValue("");
  };
  return (
    <Container>
      <SideMenuComp onChangeMenu={handleOnClickMenu} />
      <MainContentArea>
        <HeaderComp
          onChange={handleChange}
          onClear={onClear}
          onClickMenu={handleOnClickMenu}
        />
        <ParentComp filterData={filterItem} />
      </MainContentArea>
    </Container>
  );
};

export default App;
