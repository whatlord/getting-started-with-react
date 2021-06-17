import { useState } from "react";

function SubscriberFormComplex() {
    const initialFormData = {
        name: '',
        email: '',
        referral: '',
        age: '',
        subscription: true
    }
    const [formData, setFormData] = useState(initialFormData)
    const handleChange = (event) => {
        const value =
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value;
        setFormData({
            ...formData,
            [event.target.name]: value
        })
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formData)
        console.log("form submitted!")

        setFormData(initialFormData)
        
    }
    
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Enter Your Name:
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </label>
        <label htmlFor="email">
          Your Email:
          <input 
            id="email" 
            type="email" 
            name="email" 
            onChange={handleChange}
            value={formData.email}
          />
        </label>
        <label>
            How did you hear about us?
            <select id="referral" name="referral" value={formData.referral} onChange={handleChange}>
                <option value="">-- Select option --</option>
                <option value="twitter">Twitter</option>
                <option value="youtube">YouTube</option>
                <option value="wom">Word of mouth</option>
            </select>
        </label>
        <fieldset>
            <legend>How old are you?</legend>
            <label htmlFor="low">
                Under 18
                <input
                    id="low"
                    type="radio"
                    name="age"
                    onChange={handleChange}
                    value="low"
                    checked={formData.age === "low"}
                />
            </label>
            <label htmlFor="middle">
                18-60
                <input
                    id="middle"
                    type="radio"
                    name="age"
                    onChange={handleChange}
                    value="middle"
                    checked={formData.age === "middle"}
                />
            </label>
        </fieldset>
        <label htmlFor="subscription">
            subscription?
            <input 
                id="subscription"
                type="checkbox"
                name="subscription"
                onChange={handleChange}
                checked={formData.subscription}
                value= "subscription"
            />
        </label>
        <button type="submit">
            submit
        </button>
      </form>
    );
  }

export default SubscriberFormComplex;