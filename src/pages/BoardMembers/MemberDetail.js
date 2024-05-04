// import React from 'react';
// import { useParams } from 'react-router-dom';

// const MemberDetail = ({ members }) => {
//   const { id } = useParams();

//   console.log('All members:', members); // Check if the members data is received correctly

//   if (!members || members.length === 0) {
//     return <div>Loading...</div>;
//   }

//   const selectedMember = members.find(member => member.id === parseInt(id, 10));

//   console.log('Selected member:', selectedMember); // Check if the selected member is found

//   if (!selectedMember) {
//     return <div>Member not found</div>;
//   }

//   const { name, designation, email, img } = selectedMember;
// console.log('image', img)
//   return (
//     <div>
//       <img src={`${process.env.PUBLIC_URL}/${img}`} className='w-25 ps-2 pt-2'  alt={name} />

//       <h2>{name}</h2>
//       <p>{designation}</p>
//       <p>{email}</p>

//     </div>
//   );
// };

// export default MemberDetail;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const MemberDetail = () => {
  const { id } = useParams();
  const [members, setMembers] = useState(() => {
    const storedMembers = localStorage.getItem("members");
    return storedMembers ? JSON.parse(storedMembers) : [];
  });

  useEffect(() => {
    fetch("./members.json")
      .then((res) => res.json())
      .then((data) => {
        setMembers(data);
        localStorage.setItem("members", JSON.stringify(data));
      });
  }, []);

  console.log("All members:", members); // Check if the members data is received correctly

  if (!members || members.length === 0) {
    return <div>Loading...</div>;
  }

  const selectedMember = members.find(
    (member) => member.id === parseInt(id, 10)
  );

  console.log("Selected member:", selectedMember); // Check if the selected member is found

  if (!selectedMember) {
    return <div>Member not found</div>;
  }

  const { name, designation, email, img, speech,education } = selectedMember;

  return (
    <>
      <Header />
      {/* <div className="container d-flex flex-lg-row flex-md-row flex-sm-column flex-column">
  <div className=" w-75 w-lg-25 w-xl-25 w-xxl-25 ps-2 pt-2">
    <img
      src={`${process.env.PUBLIC_URL}/${img}`}
      className="w-50 w-lg-75 ps-2 pt-2 "
      alt={name}
    />
    <h2>{name}</h2>
    <p><FontAwesomeIcon className="pe-2 fw-bold fs-6 text-gray " icon={faCircleChevronRight} />{designation}</p>
    <p><FontAwesomeIcon className="pe-2  fw-bold fs-6 text-gray " icon={faEnvelope}  />{email}</p>
  </div>
  <div className=" w-xl-75 w-xxl-75  w-lg-75 w-md-75 w-sm-100 w-xs-100 mt-2 mt-md-3 mt-lg-3 mt-sm-2 me-5 ps-sm-2 ps-2">
    <p><b>Speech:</b> {speech}</p>
    <p>{education}</p>
  </div>
</div> */}

<div className="container">
  <div className="row">
    <div className="col-lg-3 col-md-3 col-sm-12">
      <img
        src={`${process.env.PUBLIC_URL}/${img}`}
        className="img-fluid"
        alt={name}
      />
      <h2>{name}</h2>
      <p>
        <FontAwesomeIcon
          className="pe-2 fw-bold fs-6 text-gray"
          icon={faCircleChevronRight}
        />
        {designation}
      </p>
      <p>
        <FontAwesomeIcon
          className=" fw-bold  text-gray"
          icon={faEnvelope}
        />
        {email}
      </p>
    </div>
    <div className="col-lg-9 col-md-9 col-sm-12 mt-3">
      <p>
        {/* <b>Speech:</b> {speech} */}
      </p>
      {/* <p>{education}</p> */}
    </div>
  </div>
</div>


    </>
  );
};

export default MemberDetail;
