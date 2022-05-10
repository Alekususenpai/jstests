import { useState, useEffect } from "react";
import { FaRunning } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";

export default function User() {
  const [userDetails, setuserDetails] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((response) => response.json())
      .then((result) => setuserDetails(result));
    return () => {
      return;
    };
  });

  const data = Object.values(userDetails);

  return (
    <div style={{ padding: "1.5em", marginLeft: "15%" }}>
      {Object.keys(data).length === 0 ? (
        <p style={{ fontWeight: "bolder" }}>
          User was in a hurry and forgot to leave personal info!{" "}
          <FaRunning style={{ fontSize: "2em" }} />
        </p>
      ) : (
        <div>
          <h2>User details:</h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "solid 2px black",
              margin: "1em 0",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
            }}
          >
            <p style={{ fontSize: "1.7em" }}>
              {userDetails.name.replace(/[^A-Z]/g, "")}
            </p>
          </div>
          <p>Username: {userDetails.username}</p>
          <span>Address: </span>
          {data.map((info) => {
            return (
              <p style={{ display: "inline" }}>
                {info.street} {info.city}
              </p>
            );
          })}
          <p>
            Email: <a href={"https://www.google.com"}>{userDetails.email}</a>
          </p>
        </div>
      )}
      <button
        onClick={() => {
          navigate(-1);
        }}
        style={{
          padding: "0.3em 1.7em",
          margin: "2em 0",
          borderRadius: "0.5em",
          backgroundColor: "black",
          color: "wheat",
          cursor: "pointer",
        }}
      >
        Back
      </button>
    </div>
  );
}
