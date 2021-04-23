import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash, faEdit, faTimes} from '@fortawesome/free-solid-svg-icons'
import {faMarkdown} from '@fortawesome/free-brands-svg-icons'
// 添加数据效验
import PropsTypes from 'prop-types'
import useKeyPress from '../hooks/useKeyPress';
const FileList = ({ files, onFileClick, onSaveEdit, onFileDelete }) => {  
    
    const [editStatus, setEditStatus] = useState(false);
    const [value, setValue] = useState('');

    const enterPressed = useKeyPress(13);
    const escPressed = useKeyPress(27)

    const closeSearch = () => {
        // e.preventDefault()
        setEditStatus(false)
        setValue('')
    }

    useEffect(() => {
        if(enterPressed && editStatus){
	        const editItem = files.find(file => file.id === editStatus);
	        onSaveEdit(editItem.id, value)
	        setEditStatus(false)
	        setValue('')
        }else if (escPressed && editStatus) {
	        closeSearch()
        }
      /*  const handelInputEvent = (event) => {
            const {keyCode} = event;
            if(keyCode === 13 && editStatus) {
	            const editItem = files.find(file => file.id === editStatus);
	            onSaveEdit(editItem.id, value)
	            setEditStatus(false)
	            setValue('')
            }else if(keyCode === 27 && editStatus){
                closeSearch(event)
            }
        }
        document.addEventListener('keyup', handelInputEvent);
        return () => {
            document.removeEventListener('keyup', handelInputEvent)
        }*/
    })
    
    return (
        <ul className="list-group list-group-flush file-list">
            {
                files.map(file => (
                   <li
                        className="list-group-item row bg-light d-flex align-items-center file-item mx-0"
                        key={file.id}
                    >
                        {
                            (file.id !== editStatus) && 
                            <>
                                <span className="col-2">
                                    <FontAwesomeIcon
                                        size="lg"
                                        icon={faMarkdown}
                                    />
                                    
                                </span>
                                <span 
                                    className="col-6"
                                    onClick={() => {onFileClick(file.id)}}
                                >
                                    {file.title}
                                </span>
                                <button
                                    type="button"
                                    className="icon-button col-2"
                                    onClick={() => {setEditStatus(file.id);setValue(file.title);}}
                                >
                                    <FontAwesomeIcon 
                                        title="编辑"
                                        icon={faEdit}
                                        size="lg"
                                />
                                </button>
                                <button
                                    type="button"
                                    className="icon-button col-2 c-link"
                                    onClick={() => {onFileDelete(file.id)}}
                                >
                                    <FontAwesomeIcon 
                                        title="删除"
                                        icon={faTrash}
                                        size="lg"
                                />
                                </button>
                    
                        </>
                        }
                        {
                            (file.id === editStatus) && 
                            <>
                            <input 
                                className="form-control col-10"
                                style={{height: '30px'}}
                                value={value}
                                onChange={(e)=>{setValue(e.target.value)}}
                            />
                            <button
                                type="button"
                                className="icon-button col-2"
                                onClick={() => {}}
                            >
                                <FontAwesomeIcon 
                                    title="关闭"
                                    icon={faTimes}
                                    size="lg"
                            />
                            </button>
                            </>
                        }
                    </li>
                ))
            }
        </ul>
    )

}

FileList.propTypes = {
    file: PropsTypes.array,
    onFileClick: PropsTypes.func,
    onFileDelete: PropsTypes.func,
    onSaveEdit: PropsTypes.func,
}

export default FileList
