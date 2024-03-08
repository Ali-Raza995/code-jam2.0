import React from "react";

import CreatableSelect from "react-select/creatable";
import { colourOptions } from "@/data/data-select";

const SkillsSelect = () => {
  return (
    <div>
      <CreatableSelect isMulti options={colourOptions} />
    </div>
  );
};

export default SkillsSelect;
