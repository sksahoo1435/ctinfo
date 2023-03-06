import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './library.module.css';
import Popup from './Popup';
import axios from 'axios';
import { format } from 'date-fns'


const Library = (props) => {

    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [data, setData] = useState([])
    const [desc, setDesc] = useState('');

    const str = 'sunilkumarsahoo.official@gmail.com';
    let email = str.replace(/[^a-zA-Z0-9 ]/g, '');


    const fetchdata = () => {
        axios.get('http://demo.api.admin.circlesnow.com/ProductRESTService.svc/getschedmsg',
            {
                headers: {
                    token: email
                }
            }).then(res => setData(JSON.parse(res.data.dt)))
    }


    const AddNewBlog = () => {
        navigate('/newblog')
    }

    useEffect(() => {
        fetchdata();
    }, [])

    console.log("data", data)

    return (
        <>
            <div className={classes.container}>

                <div className={classes.headContainer}>

                    <div className={classes.header}>
                        Library
                    </div>

                    <button onClick={AddNewBlog}>New blog</button>

                </div>

                <div >
                    <table>
                        <tr>
                            <th>Cover image</th>
                            <th>Lunch date</th>
                            <th>Title</th>
                            <th>Author</th>
                        </tr>

                        {open && <Popup closeDesc={(data) => { setOpen(data) }} description={desc} />}

                        {data.map((val, key) => {

                            if (val.title !== ''  && val.author !== '') {
                                return (
                                    <tr key={key} className={classes.seperator}>
                                        <td>
                                            <img src={val.image_lnk} height={35} width={35} alt="" />
                                            
                                        </td>

                                        <td>{format(new Date(val.launchdate), 'MMMM dd, yyyy')}</td>

                                        <td onClick={() => { setOpen(true); setDesc(val.description) }} className={classes.a}>
                                            {val.title}
                                        </td>

                                        <td>{val.author}</td>

                                    </tr>
                                )
                            }

                        })}
                    </table>

                </div>
            </div>
        </>
    )
}

export default Library