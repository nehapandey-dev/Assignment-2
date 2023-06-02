import React from 'react';
import { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function Body(props) {

    const [users, setUsers] = useState([])
    const [getvalue, setGetValue] = useState()

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
            .then(response => response.json())
            .then(json => setUsers(json))

    }, [])

    const deleteItem = (i) => {
        const newItems = [...users]
        newItems.splice(i, 1)
        setUsers(newItems)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setGetValue(getvalue);

    };
    return (
        <div className="lg:m-8 md:m-6 sm:m-2 border lg:p-6 md:p-4 sm:p-20 bg-slate-50 ">
            <Table>
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>Comment</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {users.map(user => (
                        <Tr key={user.id}>
                            <Td className='border p-2'>{user.id}</Td>
                            <Td className='lg:w-40 border p-2'>{user.name}</Td>
                            <Td className='border p-2'>{user.email}</Td>
                            <Td className='border p-2'>{user.body}</Td>
                            <Td><button className='border p-2 w-24 bg-red-100 m-2' onClick={() => deleteItem(user.id)}>Delete</button></Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>

            <form onSubmit={handleSubmit}>
                <input
                    value={getvalue}
                    onChange={(e) => setGetValue(e.target.value)}
                    className='mx-24 p-2 rounded-md w-96 my-2 bg-slate-50' />
                <input type={'text'}
                    placeholder='Post Comment..'
                    value={getvalue}
                    onChange={(e) => setGetValue(e.target.value)}
                    className='bg-white border text-center my-4 text-slate-900 w-64 h-16'
                />
                <button className='w-16 border p-2 m-4 hover:bg-slate-200' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}