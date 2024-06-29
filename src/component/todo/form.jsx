

import React, { useState } from "react";




export const Form = ({creattodo})=>{

    const [value,setvalue] = useState('');
    const handlsubmit =  e=>{
        e.preventDefault();
        creattodo(value);
        setvalue('');
    }
    return (          
                <form action="#" onSubmit={handlsubmit}>
                    <div class="mb-4"> 
                        <label for="t" class="block text-sm font-medium text-gray-700 text-copy-secondary mb-2" >Task</label>
                        <input type="text" id="t" value={value} class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                         placeholder="What is the Task !" required
                         onChange={(e)=> setvalue(e.target.value)}
                        />
                    </div>
                   
                    <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add Task</button>
                </form>
           
    )
  };