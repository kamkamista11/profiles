import React, { Fragment, useEffect, useState } from "react";
import { Card } from "../../components/cards/Card";
import Spinner from "@atlaskit/spinner";

export const User = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    if (sessionStorage.people) {
      fetchData();
    }
    setLoading(false);
  }, []);

  const fetchData = () => {
    setPeople(JSON.parse(sessionStorage.people));
  };
  return (
    <Fragment>
      {!loading ? (
        people.map((person, index) => <Card key={index} person={person} />)
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};
