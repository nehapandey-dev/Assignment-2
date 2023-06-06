import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


const Body=()=> {
    // const [users, setUsers] = useState([])
    const [record,setRecord] = useState([])

    const deleteItem = (id) => {
        const newItems = record.filter((item) => item.id !== id);
        setRecord(newItems)
    }
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
            .then(response => {
                // setUsers(Object.keys(response.data[0]))
                setRecord(response.data)
            })

    }, [])
    return (
        <>
            <div className="lg:border-2 sm:border-1 lg:m-8 md:m-6 sm:m-2 lg:p-2 md:p-4 sm:p-2 bg-slate-50 sm:my-10 lg:mt-20">
                <div className='border p-2 w-24 bg-green-200 m-2 mt-8 hover:bg-slate-300 text-center float-right rounded-md'><Link to="/create" >Add</Link></div>
                <Table>
                    <Thead>
                        <Tr className="lg:text-lg sm:text-xs">
                            <Th>Id</Th>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Comment</Th>
                        </Tr>
                    </Thead>
                    <Tbody className="lg:text-sm sm:text-xs lg:border-2 sm:border-1 p-6">
                        {record.map((user,index) => (
                            <Tr key={index} >
                                <Td className='lg:p-2 sm:p-4'>{user.id}</Td>
                                <Td className='lg:w-40 border p-2'>{user.name}</Td>
                                <Td className='border p-2'>{user.email}</Td>
                                <Td className='border p-2'>{user.body}</Td>
                                <Td><button className='border p-2 w-24 bg-red-300 m-2 hover:bg-slate-300 rounded-lg' onClick={(e) => deleteItem(user.id)}>Delete</button></Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </div>
        </>
    );
}

export default Body