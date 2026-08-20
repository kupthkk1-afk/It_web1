"use client";

import { FormEvent, useState } from "react";

export default function BlogForm() {
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [content, setContent] = useState("");
    const [message, setMessage] = useState("");
    const [submitting, setSubmitting] = useState(false);

    function createSlug(value: string) {
        return value
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9ก-๙-]/g, "");
    }

    function handleTitleChange(value: string) {
        setTitle(value);
        setSlug(createSlug(value));
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            setSubmitting(true);
            setMessage("");

            const response = await fetch("/api/blogs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    slug,
                    content,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message ?? "𝗔𝗱𝗱 𝗗𝗮𝘁𝗮 𝗨𝗻𝘀𝘂𝗰𝗰𝗲𝘀𝘀");
            }

            setMessage("𝗔𝗱𝗱 𝗗𝗮𝘁𝗮 𝗦𝘂𝗰𝗰𝗲𝘀𝘀");
            setTitle("");
            setSlug("");
            setContent("");
        } catch (error) {
            setMessage(
                error instanceof Error
                    ? error.message
                    : "𝗘𝗥𝗥𝗢𝗥"
            );
        } finally {
            setSubmitting(false);
        }
    }


    return (
        <div className="page">
            <div className="card">
                <h1> 𝗧𝗶𝘁𝗹𝗲 𝗗𝗮𝘁𝗮</h1>
                {message && (
                    <p>
                        {message}
                    </p>
                )}
                <form onSubmit={handleSubmit}>
                    <label>𝗧𝗶𝘁𝗹𝗲 𝗡𝗮𝗺𝗲</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(event) =>
                            handleTitleChange(event.target.value)
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

                    <label> 𝗖𝗼𝗻𝘁𝗲𝗻𝘁 </label>
                    <textarea
                        value={content}
                        onChange={(event) =>
                        setContent(event.target.value)
                        }
                        placeholder="ᴇɴᴛᴇʀ ᴄᴏɴᴛᴇɴᴛ"
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