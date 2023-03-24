import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Router from 'next/router';

export default function Form() {

    const [name, setName] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [github, setGithub] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
       
        const data = {
            name: name,
            linkedin_url: linkedin,
            github_url: github,
            description: description
        };

        axios.post('http://localhost:8000/api/store', data)
            .then((response) => {

                swal("Success!", "Your virtual card has been generated!", "success")
                    .then(() => {

                        Router.push('/card?name=' + name);
                    });
            })
            .catch((error) => {

                console.log(error.response);
                swal("Oops!", error.response.data.message, "error");
            });
    };


    return (
        <div className="flex items-center justify-center h-screen">
        <form className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
            <h2 className="text-2xl text-center font-bold mb-4">Welcome to Virtual Card Generator</h2>
            <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Your First Name
            </label>
            <input
                type="text"
                id="name"
                name="name"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="First name"
                required
                value={name} 
                onChange={(event) => setName(event.target.value)} 
            />
            </div>
            <div className="mb-4">
            <label htmlFor="linkedin" className="block text-gray-700 font-bold mb-2">
                LinkedIn URL
            </label>
            <input
                type="text"
                id="linkedin"
                name="linkedin"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://www.linkedin.com/in/yourname"
                required
                value={linkedin} 
                onChange={(event) => setLinkedin(event.target.value)} 
            />
            </div>
            <div className="mb-4">
            <label htmlFor="github" className="block text-gray-700 font-bold mb-2">
                GitHub URL
            </label>
            <input
                type="text"
                id="github"
                name="github"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://github.com/yourusername"
                required
                value={github} 
                onChange={(event) => setGithub(event.target.value)} 
            />
            </div>
            <div className="mb-6">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                Tell us about yourself
            </label>
            <textarea
                id="description"
                name="description"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none"
                placeholder="I'm a full-stack developer..."
                required
                value={description} 
                onChange={(event) => setDescription(event.target.value)} 
            ></textarea>
            </div>
            <div className="flex items-center justify-center">
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                Generate
            </button>
            </div>
        </form>
        </div>
    );
}
