import React from 'react'

const Info = ({text, keyWord}) => (
    <div className="Info">
        <i className="material-icons">info_outline</i>
        <div>
            <p>
                Press <span className="keyword">{ keyWord }</span> or press the <span className="keyword">Button</span> to send a mail.
                <br/>
                { text }
            </p>
        </div>
    </div>
);

export default Info