import React, { useEffect, useState } from "react";
import { UseItem } from "../hooks"
import * as XLSX from 'xlsx';

export default function ItemComponent() {
    const {
        listItem,
        getItem, addItem, deleteItem, updateItem, importExcel
    } = UseItem();

    useEffect(() => {
        getItem()
    }, []);

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [file, setFile] = useState([])
    const [nameUpdate, setNameUpdate] = useState('')
    const [ageUpdate, setAgeUpdate] = useState('')
    const [idUpdate, setIdUpdate] = useState('')

    return (
        <div>
            <div>
                <div>
                    <input multiple type='file' onChange={(e) => setFile({file : e.target.files}) } ></input>
                    <button onClick={() => importExcel({file : file})}>Import Excel</button>
                </div>
                <br></br>
                <div>
                    <input 
                        value={name}
                        onChange={(e) => setName({name : e.target.value}) }
                    ></input>
                    <input>
                        value={age}
                        onChange={(e) => setAge({age : e.target.value}) }
                    </input>
                    <button
                        onClick={() => addItem({name : name, age : age})}
                    >ADD</button>
                </div>
                <div>
                    <input 
                        value={nameUpdate}
                        onChange={(e) => setNameUpdate({nameUpdate : e.target.value}) }
                    ></input>
                    <input>
                        value={ageUpdate}
                        onChange={(e) => setAgeUpdate({ageUpdate : e.target.value}) }
                    </input>
                    <button
                        onClick={() => updateItem({name : nameUpdate, age : ageUpdate, id : idUpdate})}
                    >Update</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listItem.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th>{index._id}</th>
                                    <th>{item.name}</th>
                                    <th>{item.age}</th>
                                    <th>
                                        <button
                                            onClick={() => deleteItem({id : item._id})}
                                        >Delete</button>    
                                    </th>
                                    <th>
                                        <button
                                            onClick={() => {setIdUpdate(item._id) 
                                                            setNameUpdate(item.name) 
                                                            setAgeUpdate(item.age)}}
                                        >Edit</button>
                                    </th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div>
          
        </div>
        </div>
    )
}
