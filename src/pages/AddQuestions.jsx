import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddQuestions = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [questions, setQuestions] = useState(JSON.parse(localStorage.getItem("questions")) || [])

    const onSubmit = (data) => {

        data.status = "pending"
        data.id = Date.now()
        const updatedQuestions = [...questions, data]
        setQuestions(updatedQuestions)
        localStorage.setItem("questions", JSON.stringify(updatedQuestions))
        toast.success("Question added")
        reset()
    }

    const getQuestions = () => {
        let result = JSON.parse(localStorage.getItem("questions")) || []
        setQuestions(result)
    }

    useEffect(() => {
        getQuestions()
},[])


    return (
        <>
            <div className=' h-screen flex justify-center align-center flex-col bg-black overflow-hidden'>
                <h1 className='bg-black text-white text-center text-xl'>ADD QUESTIONS</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mx-[auto] p-10  text-white'>
                    <label htmlFor="" className=''>TITLE</label>
                    <input {...register("title", { required: true })} name='title' className=' rounded p-2 mb-5 w-[30vw]' type="text" placeholder='Question title...' />
                    {errors.title && <p className='text-red-500'>This is required</p>}
                    <label htmlFor="" className=''>DESCRIPTION</label>
                    <textarea {...register("description", { required: true })} className=' rounded p-2 mb-5 w-[30vw]' placeholder='Question description...'></textarea>
                    {errors.description && <p className='text-red-500'>This is required</p>}
                    <label htmlFor="" className=''>TYPE</label>
                    <select {...register("type", { required: true })} className=' bg-black rounded p-2 mb-5 w-[30vw]'>
                        <option value="dsa">DSA</option>
                        <option value="development">Development</option>
                        <option value="git">Git</option>
                        <option value="technical">Technical</option>
                        <option value="interview">Interview</option>
                    </select>
                    {errors.type && <p className='text-red-500'>This is required</p>}
                    <label htmlFor="" className=''>DIFFICULTY</label>
                    <select {...register("difficulty", { required: true })} className=' bg-black rounded p-2 mb-5 w-[30vw]'>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    {errors.difficulty && <p className='text-red-500'>This is required</p>}
                    <input type="submit" value="Add" className='bg-gray-800 p-3 rounded hover:bg-gray-900 cursor-pointer' />
                </form>
            </div>
        </>
    )
}

export default AddQuestions