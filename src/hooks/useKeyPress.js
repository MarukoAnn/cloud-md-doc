import  {useState, useEffect} from 'react'


const useKeyPress = (targetKeyCode) => {

    const [keyPressd, setKeyPressd] = useState(false);

    const keyDownHandler = ({ keyCode }) => {
        if(keyCode === targetKeyCode) {
            setKeyPressd(true);
        }
    }

    const keyUpHandler = ({ keyCode }) => {
        if(keyCode === targetKeyCode){
            setKeyPressd(false);
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', keyDownHandler);
        document.addEventListener('keyup', keyUpHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
            document.removeEventListener('keyup', keyUpHandler)
        }
    }, [])

    return keyPressd
}

export default useKeyPress;
