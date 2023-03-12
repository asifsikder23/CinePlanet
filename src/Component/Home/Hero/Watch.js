import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Watch = () => {
  const params = useParams();
  const id = params.id;
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(id);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetails(data);
        setLoading(false);
      });
  }, [id]);
  console.log(details);
  return (
    <div>
         
    </div>
  );
};

export default Watch;
