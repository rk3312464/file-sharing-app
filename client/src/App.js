import './App.css';
import { useRef, useState, useEffect} from 'react';
import { uploadFile } from './services/api';

function App() {

  const fileInputRef = useRef();

  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  useEffect(()=>{
    const getImage =async () => {
      if(file){
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);
        // call api
        let response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  },[file])

  const onUploadClick = ()=>{
    fileInputRef.current.click();
  }

  const logo = "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";

  return (
    <div className='container' >
      <img src={logo} alt='banner'/>

      <div className='wrapper'>
        <h1>Simple file sharing</h1>
        <p>Upload and share the download link.</p>
        <button onClick={()=> onUploadClick()}>Upload</button>
        <input type="file" 
        ref={fileInputRef}
        style={{display:'none'}}
        onChange={(e) => setFile(e.target.files[0])}
        />
        <a href={result} >{result}</a>

      </div>
      
    </div>
  );
}

export default App;
