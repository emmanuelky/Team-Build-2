import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchdata } from "../functions/fetches";
import { ListGroup } from "react-bootstrap";

function SearchBar() {
  const [profile, setProfile] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

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

    if (searchProfile.length > 0) {
      setfilteredData(newFilter);
    } else {
      setfilteredData([]);
    }
  };

  const onInputClick = (hasItBeenClicked) => {
    console.log(hasBeenClicked);
    setHasBeenClicked(hasItBeenClicked);
  };

  return (
    <div>
      <div>
        <input
          onClick={() => onInputClick(false)}
          type="text"
          placeholder="Search"
          className="rounded-right"
          onChange={handleFilter}
          style={{
            backgroundColor: "#EEF3F8",
            border: "0",
            height: "38px",
            width: "180px",
            outline: "none"
          }}
        />
      </div>
      {filteredData.length != 0 && !hasBeenClicked && (
        <div>
          {filteredData.slice(0, 10).map((profile) => {
            return (
              <ListGroup
              >
                <div>
                  <Link to={`/user/${profile._id}`}>
                    <ListGroup.Item 
                    style={{
                    textAlign: "left",
                    }}
                    onClick={() => onInputClick(true)}>
                      <img
                        style={{ width: "25px", height: "25px", borderRadius: "50%" }}
                        src={profile.image}
                      /> <span className="ml-2" style={{ color: "black", fontSize: "14px" }}><strong>{profile.name}</strong></span>
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
