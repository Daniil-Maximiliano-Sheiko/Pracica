import React from "react";
import Alert from 'react-s-alert';
import {pushs, handleWarning,handleError,handleSuccess} from "../push/pushs.js"


function Info() {

    return (
        <div>
        <div className="cf">
            <button className="button buttonSuccess" onClick={handleSuccess}>{pushs.push[0].title}</button>
            <button className="button buttonError" onClick={handleError}>{pushs.push[2].title}</button>
            <button className="button buttonWarning" onClick={handleWarning}>{pushs.push[1].title}</button>
        </div>
        <Alert stack={true} timeout={3000} />
        </div>
    );
}

export default Info;
