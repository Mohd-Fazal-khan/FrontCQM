import React, { useEffect, useState } from 'react'
import AddSidenav from '../component/AddSidenav'
import Usernav from '../component/Usernav';
import Sidenav from '../component/Sidenav';
import Addnav from '../component/Addnav';
import { baseUrl } from '../Urls';

const Adddash = () => {
    var [ur, SetUR] = useState(0);
    var [pr, SetPR] = useState(0);
    var [prr, SetPrR] = useState(0);
    var [cr, SetCR] = useState(0);

    const totaluser = async () => {
        
        // const uresponse = await fetch('http://localhost:8000/');
        const uresponse = await fetch(`${baseUrl}/`);
        const udata = await uresponse.json();
        SetUR(udata.length);
    }


    const totalpquery = async () => {
        const presponse = await fetch(`${baseUrl}/ad/viewallpendingquery`);
        const pdata = await presponse.json();

        SetPR(pdata.q.length)
    }

    const totalproquery = async () => {
        const proresponse = await fetch(`${baseUrl}/ad/viewallproquery`);
        const prod = await proresponse.json();
        SetPrR(prod.q.length)

    }

    const totalcmpquery = async () => {
        const cmpresponse = await fetch(`${baseUrl}/ad/viewallcmpquery`);
        const cmpdata = await cmpresponse.json();
        SetCR(cmpdata.q.length)
    }

    useEffect(() => {
        totaluser();
        totalpquery();
        totalproquery();
        totalcmpquery();

    }, []);

    return (

        // <>
        //     <div className='row vh-7'>
        //         <div className='col-sm-12 py-5 bg-dark'></div>
        //     </div>
        //     <div className='row vh-93'>
        //         <div className='col-2 py-5 scroll bg-danger'>
        //             <AddSidenav></AddSidenav>
        //         </div>
        //         <div className='col-10 py-5 scroll bg-success'>
        //             <div className='row h-100'>
        //                 <div class="row row-cols-1 row-cols-md-2 g-4">
        //                     <div class="col">
        //                         <div class="card">
        //                                 <div class="card-body">
        //                                     <h5 class="card-title">Total User</h5>
        //                                     <p class="card-text">{ur || 0}</p>
        //                                 </div>
        //                         </div>
        //                     </div>
        //                     <div class="col">
        //                         <div class="card">

        //                                 <div class="card-body">
        //                                     <h5 class="card-title">Total Pending Query</h5>
        //                                     <p class="card-text">{pr || 0}</p>
        //                                 </div>
        //                         </div>
        //                     </div>
        //                     <div class="col">
        //                         <div class="card">

        //                                 <div class="card-body">
        //                                     <h5 class="card-title">Total Processing Query</h5>
        //                                     <p class="card-text">{prr || 0}</p>
        //                                 </div>
        //                         </div>
        //                     </div>
        //                     <div class="col">
        //                         <div class="card">
        //                                 <div class="card-body">
        //                                     <h5 class="card-title">Total Completed Query</h5>
        //                                     <p class="card-text">{cr || 0}</p>
        //                                 </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </>

        <>
            <Addnav></Addnav>
            <div className='row vh-93'>
                <div className='col-2 py-5 scroll l'>
                    <AddSidenav></AddSidenav>
                </div>
                <div className='col-10 py-5 scroll bg-dark jk'>
                    <div className='row '>
                        <div className='col-md-6 mt-5 mx-auto transparent-bg p-4 '>
                            <div class="row row-cols-1 row-cols-md-2 g-4">
                                <div class="col">
                                    <div class="card">
                                        <div class="card-body">
                                             <h5 class="card-title text-danger" >Total User</h5>
                                             <p class="card-text">{ur || 0}</p>
                                         </div>
                                    </div>
                                </div>
                                <div class="col">
                                 <div class="card">

                                         <div class="card-body">
                                             <h5 class="card-title text-danger">Total Pending Query</h5>
                                             <p class="card-text">{pr || 0}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">

                                        <div class="card-body">
                                            <h5 class="card-title text-danger">Total Processing Query</h5>
                                            <p class="card-text">{prr || 0}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title text-danger">Total Completed Query</h5>
                                            <p class="card-text">{cr || 0}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Adddash