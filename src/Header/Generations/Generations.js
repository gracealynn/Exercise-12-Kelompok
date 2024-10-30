import Gen1 from "./Gen 1/Gen1.js";
import Gen2 from "./Gen 2/Gen2.js";
import Gen3 from "./Gen 3/Gen3.js";
import Gen4 from "./Gen 4/Gen4.js";
const Generations = () => {
    return (
      <div>
        <h1>Generations</h1>
        <Gen1/>
        <Gen2/>
        <Gen3/>
        <Gen4/>
      </div>
    );
  };

export default Generations;