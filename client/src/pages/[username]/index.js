import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import swal from 'sweetalert';

export default function Index() {

    const router = useRouter();
    const { username } = router.query;
    console.log(username);
    const [user, setUser] = useState({});

    useEffect(() => {

        console.log("useEffect");

        if (username !== undefined) {
            axios.get(`http://localhost:8000/api/show/${username}`)
            .then((res) => {
                
                setUser(res.data.data);
            })
            .catch((err) => {
                
                console.log(err);
                swal({
                    title: "Error",
                    text: "Card not found",
                    icon: "error",
                    button: "OK",
                });
            });
        }
    }, [username]);

    return (
        <div className="max-w-2xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
                <img
                className="w-32 h-32 rounded-full border-2 border-primary"
                src={"https://api.dicebear.com/5.x/initials/svg?seed=" + user.name }
                alt="Avatar"
                />
            </div>
            <div className="text-center mt-4">
                <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                <p className="mt-2 text-gray-600">{user.description}</p>
                <div className="mt-4 flex justify-center">
                <a
                    href={user.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary mr-4"
                >
                    LinkedIn
                </a>
                <a
                    href={user.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary"
                >
                    GitHub
                </a>
                </div>
            </div>
        </div>
    );
}