import React from "react";
import './Newmap.css';
const NewMap=()=>{
return(
    <div className="newmap">
        <h1 className="newmaphead">See Your Neighbour Places</h1>
    
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15243983.007440727!2d81.914063!3d21.125498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1687965591666!5m2!1sen!2sin" width="100%" height="600" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="India Map"></iframe>
        
    </div>
);

};
export default NewMap;