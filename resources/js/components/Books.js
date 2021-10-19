import React, { useEffect, useState } from "react";
import Page from "./Page";
import Loading from "./Loading";
import axios from "axios";
import BsCard from "./BsCard";

export default function Books(props) {
    let bookId = props.match.params.id;
    alert(bookId)
  const [Books, setBooks] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(process.env.REACT_APP_API_URL + "api/get-profile/" + profileId)
      .then(resp => {
        setBooks(resp.data);
      })
      .finally(() => setLoading(false));
  }, []);

  return ready === false || loading ? (
    <Loading />
  ) : (
    <Page breadCrumbs="Profile" title="Profile">
      { publishedProfiles > 0 ?  profile ? (
        <BsCard
          cardClasses="card"
          cardHeader={profile.name}
          cardBody={
            <ProfileDetail profile={profile} showShareableLinkButton={false} showMessageButton showSaveButton showRequestPrivateInfoButton/>
          }
        />
      ) : (
        <p className="text-danger">Profile not found</p>
      ):
      <h1 className="text-center">You cannot view this profile because your profile is not published yet.</h1>
      }
    </Page>
  );
}
