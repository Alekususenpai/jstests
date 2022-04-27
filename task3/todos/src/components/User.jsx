import { useState, useEffect } from "react";

export default function User({ userId, hide }) {
  const [userDetails, setuserDetails] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((result) => setuserDetails(result));
    return () => {};
  });

  const data = Object.values(userDetails);

  return (
    <div>
      {Object.keys(data).length === 0 ? (
        <p>User was in a hurry and forgot to leave personal info</p>
      ) : (
        <div key={userDetails.id}>
          <p>{userDetails.name}</p>
          <p>{userDetails.username}</p>

          {data.map((info) => {
            return (
              <p key={info.zipcode}>
                {info.street} {info.city}
              </p>
            );
          })}
          <a href={"https://www.google.com"}>{userDetails.email}</a>
        </div>
      )}
      <button onClick={hide}>Back</button>
    </div>
  );
}
