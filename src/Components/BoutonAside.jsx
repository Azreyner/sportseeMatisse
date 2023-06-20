import React from "react";
import "../Style/Components/BoutonAside.scss";

const BoutonAside = (props) => {
  return (
    <div className="boutonAside">
      <img src={props.logo} alt={props.nom} />
    </div>
  );
};

export default BoutonAside;
