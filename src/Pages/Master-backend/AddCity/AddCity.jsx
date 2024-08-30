import React, { useEffect, useState } from "react";
import Master from "../Master";
import { DeleteRequest } from "../../../API/DeleteRequest";
import { PostRequest } from "../../../API/PostRequest";
import { GetRequest } from "../../../API/Getrequest";
import { PutRequest } from "../../../API/PutRequest";

const AddCity = () => {
  const [city, setCity] = useState([]);
  const [state, setState] = useState([]);

  const EditFunc = (value, id) => {
    let specilization = {
      stateValue: value.dropdownValue,
      cityValue: value.multiselectValue,
    };

    const cityVal = Object.fromEntries(
      Object.entries(specilization).filter(([key, value]) => value !== "")
    );

    PutRequest("attribute/updatecity", { id, cityVal })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  const DeleteFunc = (id) => {
    DeleteRequest("attribute/deletecity", id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  const PostFunc = (value) => {
    let filteredObj = Object.fromEntries(
      Object.entries(value).filter(([key, value]) => value !== "")
    );

    const cityValue = {
      statevalue: filteredObj.dropdownValue,
      cityvalue: filteredObj.multiselectValue,
    };

    PostRequest("attribute/addcity", cityValue)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  useEffect(() => {
    GetRequest("attribute/getcity")
      .then((res) => setCity(res.data.allCity))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    GetRequest("attribute/getstate")
      .then((res) => setState(res.data.allstate.map((obj) => obj.stateValue)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Master
        heading={"Add City"}
        dropdown={state}
        dummytable={city}
        dropdownLabel={"Choose State"}
        twoinputtag={true}
        multiselectlabel={"Choose City"}
        tablelabelone={"City"}
        tablelabeltwo={"State"}
        //CRUD FUNCTION
        EditFunc={EditFunc}
        DeleteFunc={DeleteFunc}
        PostFunc={PostFunc}
      />
    </>
  );
};

export default AddCity;
