import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router';


export default function CommentBox() {

    const [inputdata, setInputData] = useState({
        name: '',
        email: '',
        body: '',
    })

    const navigat = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/posts/1/comments", inputdata)
            .then((response) => {
                console.log(inputdata);
                navigat('/')

            }).catch((error) => {
                console.log(error);
            })
    }
    const onClear = () => {
        setInputData({
            name: '',
            email: '',
            body: '',
        });
    };


    const handleChange = (e) => {
        setInputData({ ...inputdata, [e.target.id]: e.target.value });
    };
    return (
        <div className="">
            <div className="">
                <div className="my-10 mx-2 m-2">
                    <form name="addComment" id="userId" onSubmit={handlesubmit}>

                        <input type={'text'} placeholder="Enter Name.." id='name' value={inputdata.name} onChange={handleChange} className='border-2 p-2 mx-8 m-4 mt-16' ></input>

                        <input type={'text'} placeholder="Enter email.." id='email' value={inputdata.email} onChange={handleChange} className='border-2 p-2 mx-8 m-4' ></input>
                        <input type={'text'}
                            placeholder='Post Comment..'
                            id='body'
                            value={inputdata.body}
                            onChange={handleChange}
                            className='border-2 lg:w-96 md:w-96 sm:w-72 h-12 mx-8 pl-2 m-4'
                        />
                        <button className='border p-2 bg-lime-200 w-16 hover:bg-slate-300 '>Add</button>
                        <button className="border p-2 ml-10" onClick={onClear}>Delete</button>

                    </form>

                </div>

            </div>
        </div>
    )
}