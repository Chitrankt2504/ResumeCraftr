import React, { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [data, setData] = useState([]);
  // Loading initial data from the server
  useEffect(function () {
    axios.get(`http://localhost:3030/resume/`).then((res) => {
      //console.log("res", res);
      //console.log("res.data", res.data);
      setData(res.data);
      //console.log("afterres.data", res.data);
    });
  }, []);

  //Adding new data to the server using a POST request
  function addName(evt) {
    evt.preventDefault();
    if (evt.key === "Enter" && evt.target.value !== "") {
      const name = evt.target.value;
      fetch("/resume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: data.length + 1, name }),
      })
        .then((res) => res.json())
        .then((newData) => setData([...data, newData]))
        .finally(() => {
          evt.target.value = "";
        });
    }
  }

  // // Deleting data from the server using a DELETE request
  function deleteName(evt) {
    const id = evt.target.getAttribute("data-id");
    fetch(`/resume/${id}`, {
      method: "DELETE",
    }).then(() => {
      const newData = data.filter((item) => item.id !== parseInt(id));
      setData(newData);
    });
  }
  return (
    <>
      <h1>Home Screen</h1>
      <div className="container mx-auto">
        <h2 className="text-center text-4xl text-indigo-400 py-12">
          ResumeCraftr
        </h2>
      </div>
      <button>Create a resume</button>
      <table className="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking g-wider">
              User
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking g-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking g-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              src="https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f"
              className="h-10 w-10 rounded-full"
              alt=""
            />
          </div>

          {/* {data.profile &&
           t Object.keys(data.profile).map((d, i) => {
              return (
                <tr key={i}> */}
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              {/* <div className="flex-shrink-0 h-10 w-10">
                        <img
                          src="https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f"
                          className="h-10 w-10 rounded-full"
                          alt=""
                        />
                      </div> */}
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                  {data.profile.first_name}
                </div>
                <div className="text-sm text-gray-500">
                  {data.profile.email}
                </div>
                <div className="text-sm text-gray-500">
                  {data.profile.PhoneNo}
                </div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Active
            </span>
          </td>

          <td className="px-6 py-4 whitespace-nowrap">
            <button className="ml-4 text-sm text-gray-500">view</button>
            <button className="ml-4 text-sm text-gray-500">Edit</button>
            <button className="ml-4 text-sm text-gray-500">delete</button>
          </td>
          {/* </tr>
              );
             })} */}
        </tbody>
      </table>
    </>
  );
};

export default Home;
