import React from "react";
import "./BoardMembers.css";
import { faAnglesRight, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
const BoardMembers = ({ member }) => {
  const { name, designation, email,img } = member;
  return (
    <div>
      <div className="card h-100">
       <Link to={`/members/${member.id}`}>
       <img src={img} className="w-100" alt="members" />
       </Link>
        <div className="card-body">
          <h5 className="card-title fw-bold">{name}</h5>
          <p className="card-text fs-6"><FontAwesomeIcon className="pe-2 fw-bold fs-6 text-gray " icon={faCircleChevronRight} />{designation}</p>
          <p className="fs-6"><FontAwesomeIcon className="pe-2  fw-bold fs-6 text-gray " icon={faEnvelope}  /><i><a href="mailto:sadekahmed@medisurepharmabd.com" className="text-black">{email}</a></i></p>
          


          <Link to={`/members/${member.id}`} className="text-danger fw-bold fs-6"><p>See more <FontAwesomeIcon icon={faAnglesRight} /></p></Link>
          
        </div>
      </div>
      
    </div>
  );
};

export default BoardMembers;
