import { useState, useEffect } from "react";

export default function User({ userId, hide }) {
  const [userDetails, setuserDetails] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((result) => setuserDetails(result));
    return () => {};
  });

  console.log(Object.values(userDetails));
  return (
    <div>
      <div key={userDetails.id}>
        <p>{userDetails.name}</p>
        <p>{userDetails.username}</p>
        {Object.values(userDetails).map((address) => {
          return (
            <p>
              {address.street} {address.city}
            </p>
          );
        })}
        <a href={"https://www.google.com"}>{userDetails.email}</a>
      </div>
      <button onClick={hide}>Back</button>
    </div>
  );
}
