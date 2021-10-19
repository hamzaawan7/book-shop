import React, { useEffect, useState } from "react";
import Page from "./Page";
import Loading from "./Loading";
import axios from "axios";

export default function Books(props) {
  const [name, setName] = useState(null);
  const [author, setAuthor] = useState(null);
  const [price, setPrice] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let bookId = props.match.params.id;
    setLoading(true);
    axios
      .get("get-book/" + bookId)
      .then(resp => {
        setName(resp.data.title);
        setAuthor(resp.data.vendor);
        setPrice(resp.data['variants'][0].price);
        setImage(resp.data['images'][0].src);
      })
      .finally(() => setLoading(false));
  }, []);

  function buyNow (e){
    alert("Thank you for your purchase");
  };

  return loading ? (
    <Loading />
  ) : (
    <Page breadCrumbs="Book" title= {name}>
      <img src = {image} height={200} width={200} />
      <br/>
      Author : {author}
      <br/>
      Price : {price}
      <br/>
      <button
        type="button"
        style ={{ marginRight: '0.5%' }}
        className="btn btn-rounded btn-sm btn-primary float-right mt-2"
        onClick={buyNow}
        >
        <i className="fas fa-share"></i>
        &nbsp;
        Buy Now
      </button>
    </Page>
  );
}
