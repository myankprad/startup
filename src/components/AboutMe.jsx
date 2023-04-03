import React from 'react'
import {GoLocation} from "react-icons/go"

const AboutMe = () => {
  return (
    <div className="wrapper">
      <h1>How About Them Apples</h1>
      {submitting &&
       <div>
         You are submitting the following:
         {/* <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}
         </ul> */}
       </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" onChange={handleChange}/>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AboutMe