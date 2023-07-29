import React from "react";
import { FakeData } from "../assets/FakeData";
import { useDispatch } from "react-redux";
import {
  addUser,
  removeAllUsers,
  removeUser,
} from "../slices/slicers/UserSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { AiOutlineDelete } from "react-icons/ai";

export default function MainLayout() {
  const userDatas = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const NewUser = (name) => {
    dispatch(addUser(name));
  };

  const deleteThisUser = (id) => {
    console.log(id);
    dispatch(removeUser(id));
  };

  const clearAll = () => {
    dispatch(removeAllUsers());
  };

  return (
    <div className="p-3">
      <div
        className="d-flex justify-content-between align-items-center"
        style={{
          backgroundColor: "#C0C0C0",
          padding: "0.8rem",
          borderRadius: "0.6rem",
        }}
      >
        <h2>User Profile</h2>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => NewUser(FakeData())}
        >
          Add New
        </button>
      </div>

      <ul
        style={{
          margin: "0.5rem",
          fontSize: "1.1rem",
          listStyle: "none",
          padding: "0",
        }}
      >
        {userDatas.map((Uname, id) => {
          return (
            <li
              key={id}
              style={{ backgroundColor: "#62B54F" }}
              className="d-flex justify-content-between align-items-center px-4 py-2 container my-1"
            >
              {Uname}
              <AiOutlineDelete
                onClick={() => deleteThisUser(id)}
                style={{
                  fontSize: "2.5rem",
                  backgroundColor: "red",
                  color: "white",
                  padding: "0.4rem",
                }}
              />
            </li>
          );
        })}
      </ul>
      <hr
        style={{ border: "none", height: "0.2rem", backgroundColor: "red" }}
      />
      <button onClick={() => clearAll()}>Delete All</button>
    </div>
  );
}
