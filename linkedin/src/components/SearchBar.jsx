import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

import { fetchdata } from "../functions/fetches";
import { ListGroup } from "react-bootstrap";
import Index from "./IndexLayout/Index";

function SearchBar() {
  const [profile, setProfile] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const [inputField, setInputField] = useState('');

  const fetcheddata = async () => {
    let data = await fetchdata();

    setProfile(data);
  };
  useEffect(() => {
    fetcheddata();
  }, []);
  console.log(profile);

  const handleFilter = (event) => {
    const searchProfile = event.target.value;
    const newFilter = profile.filter((value) => {
      return value.name.toLowerCase().includes(searchProfile.toLowerCase());
    });

    if (searchProfile === "") {
      setfilteredData([]);
    } else {
      setfilteredData(newFilter);

    }

  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="rounded-right"
          // value={inputField}
          onChange={handleFilter}
          style={{
            backgroundColor: "#DCE6F1",
            border: "0",
            height: "38px",
            width: "180px",
          }}
        />
      </div>
      {filteredData.length != 0 && (
        <div>
          {filteredData.slice(0, 10).map((profile) => {
            return (
              <ListGroup
              // style={{
              //   width: "500px",
              //   height: "200px",
              //   justifyContent: "center",
              // }}
              >
                <div>
                  <Link to={`/user/${profile._id}`} >
                    <ListGroup.Item>
                      <img
                        style={{ width: "25px", height: "25px" }}
                        src={profile.image}
                      />
                      {profile.name}
                    </ListGroup.Item>
                  </Link>
                </div>
              </ListGroup>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
