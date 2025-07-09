"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function NewBlogPostForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image1) formData.append("image1", image1);
    if (image2) formData.append("image2", image2);

    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Something went wrong");
      }

      router.push("/blog");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create New Blog Post</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-medium">Content</label>
          <textarea
            className="w-full p-2 border rounded h-40"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>

        <div>
          <label className="block font-medium">Image 1</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage1(e.target.files[0])}
          />
        </div>

        <div>
          <label className="block font-medium">Image 2</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage2(e.target.files[0])}
          />
        </div>

        {error && <p className="text-red-600">{error}</p>}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Posting..." : "Post Blog"}
        </button>
      </form>
    </div>
  );
}

export default NewBlogPostForm;
