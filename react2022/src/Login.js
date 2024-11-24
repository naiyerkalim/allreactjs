import React,{useState} from 'react'

export default function Login() {
    
    const [details, setdetails] = useState({
        name: '',
        email: '',
        password: '',
        address: ''
    });

    const handleChange=(e)=>{

        const {name, value}= e.target;

setdetails((prev)=>{
    return {...prev, [name]: value}
})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
console.log(details);
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <h3>Name: </h3><input  type='text' name='name' onChange={handleChange}/>
        <h3>Email: </h3><input type='text' name='email' onChange={handleChange}/>
        <h3>Password: </h3><input type='text' name='password' onChange={handleChange}/>
        <h3>Address: </h3><textarea name='address' onChange={handleChange}></textarea>
        <button type='submit'>Submit Form</button>
    </form>
    </>
  )
}
