import React, {useState, useEffect, useRef} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch, faTimes} from '@fortawesome/free-solid-svg-icons'
// 引入类型依赖
import PropsTypes from 'prop-types'

const FileSearch = ({title, onFileSearch}) => {
    const [inputActive, setInputActive] = useState(false)
    const [ value, setValue] = useState("")

    let node = useRef(null)

    // 关闭事件
    const closeSearch = (e) => {
        // 阻止冒泡
        e.preventDefault();
        setInputActive(false);
        setValue('')
    }
    
    useEffect(() => {
        // 设置高亮
        if(inputActive){
            node.current.focus()
        }
    }, [inputActive])

    useEffect(() => {
        const handleInputEvent = (event) => {
            const {keyCode} = event;
            if(keyCode === 13 && inputActive){
                onFileSearch(value)
            }else if(keyCode === 27 && inputActive){
                closeSearch(event)
            }
        }
        document.addEventListener('keyup', handleInputEvent)
        return () => {
            // 也秒销货时，调用
            document.removeEventListener('keyup', handleInputEvent)
        }
    })

    return (
        <div className="alert alert-primary d-flex justify-content-between align-items-center">
            {
                !inputActive && 
                <>
                    <span>{title}</span>
                    <button
                        type="button"
                        className="icon-button"
                        onClick={() => {setInputActive(true)}}
                    >
                        <FontAwesomeIcon 
                            title="搜索"
                            icon={faSearch}
                            size="lg"
                        />
                    </button>
                </> 
            }
            {
                inputActive &&
                <>
                    <input 
                        className="form-control"
                        style={{height: '30px'}}
                        value={value}
                        ref={node}
                        onChange={(e)=>{setValue(e.target.value)}}
                    />
                    <button
                        type="button"
                        className="icon-button"
                        onClick={() => {setInputActive(false)}}
                    >
                        <FontAwesomeIcon 
                            title="关闭"
                            icon={faTimes}
                            size="lg"
                    />
                    </button>
                    
                </> 
            }
        </div>  
    )
}

FileSearch.propTypes = {
    title: PropsTypes.string,
    onFileSearch: PropsTypes.func.isRequired,
}

FileSearch.defaultProps = {
    title: '我的云文档'
}

export default FileSearch;