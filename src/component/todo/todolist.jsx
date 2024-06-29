

import React, { useState } from "react";
import { Form } from "./form";
import {v4 as uuidv4} from 'uuid';
import { Todo } from "./todo";
uuidv4()


export const TodoList = ()=>{
    const [todovalue,settodo] = useState([]);
    const creattodo = todo =>{
        settodo([...todovalue,{id:uuidv4,task:todo,isEditing:false}])
    }
    return (
          
                   <div class="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
        <div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
            <h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">New Task</h1>
        <Form creattodo={creattodo}/>
        {
            todovalue.map((todo,idx)=>(
               <Todo task={todo} key={idx}/>
              )     
            )
        }
        
        </div>
        </div>
    
     
    )
  };