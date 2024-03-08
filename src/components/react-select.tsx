import React, { useState } from "react";

import CreatableSelect from "react-select/creatable";
import { colourOptions } from "@/data/data-select";

const SkillsSelect = ({ onChange, name, value, setVal }: any) => {
  return (
    <div>
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
