import React from 'react'

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
                <div className="container-fluid">
                <a className="navbar-brand" href="/">Text Utils</a>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    </ul>
                </div>
                {/* <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                </div> */}
                <div className="d-flex">
                    <div className="bg-primary rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.toggleTheme('primary')}}></div>
                    <div className="bg-warning rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.toggleTheme('warning')}}></div>
                    <div className="bg-success rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.toggleTheme('success')}}></div>
                    <div className="bg-danger rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.toggleTheme('danger')}}></div>
                    <div className="bg-dark rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.toggleTheme('dark')}}></div>
                    <div className="bg-light rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.toggleTheme('light')}}></div>
                </div>
                </div>
                
            </nav>
            
        </div>
    )
}
