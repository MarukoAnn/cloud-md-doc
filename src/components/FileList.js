import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'
import {faMarkdown} from '@fortawesome/free-brands-svg-icons'

import PropsTypes from 'prop-types'
// import {}

const FileList = ({ files, onFileClick, onSaveEdit, onFileDelete }) => {  
    
    
    return (
        <ul className="list-group list-group-flush file-list">
            {
                files.map(file => (
                    <li
                        className="list-group-item bg-light d-flex align-items-center file-item"
                        key={file.id}
                    >
                        <span >
                            <FontAwesomeIcon
                                size="lg"
                                icon={faMarkdown}
                            />
                            
                        </span>
                        <span>
                            {file.title}
                        </span>
                    </li>
                ))
            }
        </ul>
    )

}

FileList.propTypes = {
    file: PropsTypes.array
}

export default FileList