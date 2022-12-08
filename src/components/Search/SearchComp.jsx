import {
  SearchBarWrapper,
  SearchBarInput,
  SearchBarInputMobile,
  SearchBarLogo,
  SearchBarCrossLogo,
} from "../Container/App.styles";
import { useState, useRef } from "react";
import IconSearch from "../../assets/svg/IconSearch";
import IconCross from "../../assets/svg/IconCross";
import { useWindowSize } from "../../Hooks/useWindowSize";

const SearchComp = ({ onChange, onClear }) => {
  const [visibleInput, setVisibleInput] = useState(false);
  const [clearInputField, setClearInputField] = useState(null);
  const inputRef = useRef(null);
  const handleSearch = (e) => {
    onChange(e);
    inputRef.current.value = e?.target?.value;
    //console.log(e, "inside search");
  };

  const onCrossClickValue = (e) => {
    console.log(onClear, "inside cross click");
    e.preventDefault();
    inputRef.current.value = null;
    onClear(e);
    //setClearInputField(input.current.value);
  };

  return (
    <>
      <SearchBarWrapper>
        <SearchBarLogo onClick={() => setVisibleInput(!visibleInput)}>
          {" "}
          <IconSearch />
        </SearchBarLogo>
        {visibleInput && (
          <SearchBarInput
            type="text"
            onChange={(e) => handleSearch(e)}
            //value={clearInputField}
            ref={inputRef}
          />
        )}
        {visibleInput && (
          <SearchBarCrossLogo onClick={(e) => onCrossClickValue(e)}>
            {" "}
            <IconCross />
          </SearchBarCrossLogo>
        )}
      </SearchBarWrapper>
    </>
  );
};

export default SearchComp;
