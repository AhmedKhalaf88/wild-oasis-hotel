import PropTypes from "prop-types";
import Select from "./Select";
import { useSearchParams } from "react-router-dom";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentSortByValue = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      value={currentSortByValue}
      options={options}
      type="white"
      onChange={handleChange}
    />
  );
}

SortBy.propTypes = {
  options: PropTypes.array,
};

export default SortBy;
