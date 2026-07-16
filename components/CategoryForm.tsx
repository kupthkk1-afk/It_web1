"use client";

import { FormEvent, useState } from "react";

export default function CategoryForm() {
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");
    const [submitting, setSubmitting] = useState(false);

    function createSlug(value: string) {
        return value
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9ก-๙-]/g, "");
    }

    function handleNameChange(value: string) {
        setName(value);
        setSlug(createSlug(value));
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            setSubmitting(true);
            setMessage("");

            const response = await fetch("/api/categories", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    slug,
                    description,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message ?? "𝗔𝗱𝗱 𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆 𝗨𝗻𝘀𝘂𝗰𝗰𝗲𝘀𝘀");
            }

            setMessage("𝗔𝗱𝗱 𝗖𝗮𝘁𝗲𝗴𝗼𝘆 𝗦𝘂𝗰𝗰𝗲𝘀𝘀");
            setName("");
            setSlug("");
            setDescription("");
        } catch (error) {
            setMessage(
                error instanceof Error
                    ? error.message
                    : "Error"
            );
        } finally {
            setSubmitting(false);
        }
    }


    return (
        <div className="page">
            <div className="card">
                <h1> 𝗔𝗱𝗱 𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆</h1>
                {message && (
                    <p>
                          {message}
                    </p>
                )}
                <form onSubmit={handleSubmit}>
                    <label>𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆 𝗡𝗮𝗺𝗲</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(event) =>
                            handleNameChange(event.target.value)
                        }
                        required
                    />

                    <label>𝗦𝗹𝘂𝗴</label>
                    <input
                        type="text"
                        value={slug}
                        onChange={(event) => setSlug(event.target.value)}
                        className="w-full rounded-lg border px-3 py-2"
                        required
                    />

                    <label> 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻 </label>
                    <textarea
                        value={description}
                        onChange={(event) =>
                            setDescription(event.target.value)
                        }
                        placeholder="𝗘𝗻𝘁𝗲𝗿 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻"
                    />

                    <button
                        type="submit"
                        disabled={submitting}
                    >
                        {submitting ? "𝗦𝗮𝘃𝗶𝗻𝗴..." : "𝗦𝘂𝗯𝗺𝗶𝘁"}
                    </button>
                </form>
            </div>
        </div>
    );
}