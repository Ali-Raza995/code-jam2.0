import React from "react";

import CreatableSelect from "react-select/creatable";
import { colourOptions } from "@/data/data-select";

const SkillsSelect = ({ name, value, setVal }: any) => {
  return (
    <div className="relative">
      <CreatableSelect
        isMulti
        onChange={(e) => {
          setVal(e);
        }}
        name={name}
        options={colourOptions}
      />
    </div>
  );
};

export default SkillsSelect;
