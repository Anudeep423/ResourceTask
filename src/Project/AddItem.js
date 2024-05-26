import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function AddItem({ isLoggedIn, setIsLoggedIn }) {

    let [details, setDetails] = useState({
        title: "",
        link: "",
        iconUrl: "",
        tagName: "",
        category: "",
        description: ""
    })

    const handleChange = (title, value) => {
        setDetails({ ...details, [title]: value })
        console.log(title, value)
    }

    function handleSubmit() {
        if (details.description == "" || details.category == "" || details.iconUrl == "" ||
            details.link == "" || details.tagName == "" || details.title == "") {
            toast("Fill all details", {
                style: {
                    border: '1px solid black',
                    color: "white",
                    backgroundColor: "red"
                }
            });
        } else {
            if (isLoggedIn == false) {
                toast("Login required", {
                    style: {
                        border: '1px solid black',
                        color: "white",
                        backgroundColor: "red"
                    }
                });
            } else {
                axios.get("https://media-content.ccbp.in/website/react-assignment/add_resource.json")
                    .then((res) => {
                        if (res.status == 200) {
                            toast("Success", {
                                style: {
                                    border: '1px solid black',
                                    color: "white",
                                    backgroundColor: "green"
                                }
                            });
                        }
                    })
            }

        }


    }



    return (
        <div id="item-details-section"  >
            <div id="field-section"  >
                <h2> Item Details : </h2>
                <p> Item Title : </p>
                <input
                    value={details.title}
                    onChange={(e) => {
                        handleChange("title", e.target.value)
                    }}
                    placeholder='Give Title here'
                />
                <br />
                <p> Link : </p>
                <input
                    value={details.link}
                    placeholder='Give Link here'
                    onChange={(e) => {
                        handleChange("link", e.target.value)
                    }}
                />
                <br />
                <p> Icon Url : </p>
                <input
                    value={details.iconUrl}
                    onChange={(e) => {
                        handleChange("iconUrl", e.target.value)
                    }}
                    placeholder='Give Icon Url'
                />
                <br />
                <p> Tag Name : </p>
                <select
                    onChange={(e) => {
                        handleChange("tagName", e.target.value)
                    }}
                >
                    <option value="">Choose tag</option>
                    <option value="user" >user</option>
                    <option value="request"  >request</option>
                </select>
                <br />
                <p> CATEGORY : </p>
                <input
                    value={details.category}
                    onChange={(e) => {
                        handleChange("category", e.target.value)
                    }}
                    placeholder='Give CATEGORY here'
                />
                <br />
                <p> Descrition : </p>
                <input
                    value={details.description}
                    onChange={(e) => {
                        handleChange("description", e.target.value)
                    }}
                    placeholder='Give description here'
                />
                <br />
                <br />
                <button 
                className='btn btn-primary'
                onClick={() => {
                    handleSubmit()
                }}>Submit !</button>
                <ToastContainer
                    position="bottom-center"
                    style={{
                        color: "red"
                    }}
                />
            </div>
            <div id="pic-section" >
                <img
                    style={{ width: "100%" }}
                    src='https://office-insider-media.azurefd.net/media/2023/07/A-female-works-on-her-Acer-desktop-computer-in-her-bright-office_539x440.jpg'
                />
            </div>
        </div>
    )
}

export default AddItem