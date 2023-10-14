import React, { useState } from 'react';
import './age.css'

const AgeCalculator = () => {
    const [birthDate, setBirthDate] = useState('');
    const [calculatedAge, setCalculatedAge] = useState(null);

    const calculateAge = () => {
        const birthYear = new Date(birthDate).getFullYear();
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;
        setCalculatedAge(age);
    };

    return (
        <div className='age'>
            <h2 className='AgeHead'>Age Calculator</h2>
           

                Enter your Date of Birth: 
                <input 
                    className='inputbox' 
                    type="date" 
                    value={birthDate} 
                    onChange={(e) => setBirthDate(e.target.value)} 
                />
            
            <button className='btn' onClick={calculateAge}>Calculate Age</button>
            {calculatedAge && <h3>Your age is: {calculatedAge} years</h3>}
        </div>
    );
}

export default AgeCalculator;
