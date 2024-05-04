import React, { useEffect, useState } from "react";
import BoardMembers from "./BoardMembers";
import { Link, Route, Routes } from "react-router-dom";
import MemberDetail from "./MemberDetail";
import Header from "../../components/Header/Header";
import HomeFooter from "../../components/Footer/HomeFooter";

const Members = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("./members.json")
      .then((res) => res.json())
      .then((data) => {
        setMembers(data)
        localStorage.setItem('members', JSON.stringify(data));

      });
  }, []);
  return (
    <div>
      <Header />
      <h2 className="text-center my-5"><span className="border rounded px-3 text-white bg-danger py-2">Board Members</span></h2>
      <div className="mx-lg-5 mx-1 mb-3 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
        {members.map((member) => {
          return (
            <div key={member.id}>
              

              <BoardMembers member={member} />
              {/* <Link to={`/members/${member.id}`} className="text-danger">
                See more
              </Link> */}
            </div>
          );
        })}
      </div>
      <Routes>
        <Route path="/members/:id" element={<MemberDetail members={members} />} />
      </Routes>
      <HomeFooter />
    </div>
  );
};

export default Members;
