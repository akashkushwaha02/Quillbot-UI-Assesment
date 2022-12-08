import {
  SearchBarWrapper,
  SearchBarInput,
  SearchBarLogo,
  SearchBarCrossLogo,
} from "../../styles/App.styles";
import { useState, useRef } from "react";
import IconSearch from "../../assets/svg/IconSearch";
import IconCross from "../../assets/svg/IconCross";

const SearchComp = ({ onChange, onClear }) => {
  const [visibleInput, setVisibleInput] = useState(false);
  const inputRef = useRef(null);
  const handleSearch = (e) => {
    onChange(e);
    inputRef.current.value = e?.target?.value;
  };

  const onCrossClickValue = (e) => {
    e.preventDefault();
    inputRef.current.value = null;
    onClear(e);
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
