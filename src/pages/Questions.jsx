import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Questions = () => {
  const [questions, setQuestions] = useState(
    JSON.parse(localStorage.getItem("questions")) || [],
  );

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("questions")) || [];
    setQuestions(result);
  }, []);

  const handleComplete = (id) => {
    const updatedQuestions = questions.map((item) =>
      item.id === id ? { ...item, status: "completed" } : item,
    );

    setQuestions(updatedQuestions);

    localStorage.setItem("questions", JSON.stringify(updatedQuestions));

    toast.success("Question completed");
  };

  const handleDelete = (id) => {
    const updatedQuestions = questions.filter((item) => item.id !== id);

    setQuestions(updatedQuestions);

    localStorage.setItem("questions", JSON.stringify(updatedQuestions));

    toast.success("Question deleted");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                Questions
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Practice, track and complete your questions
              </p>
            </div>

            <div className="bg-gray-100 px-4 py-2 rounded-xl">
              <span className="text-sm text-gray-500">Total</span>

              <span className="ml-2 font-bold text-gray-900">
                {questions.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Questions */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        {questions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center text-2xl mb-4">
              📝
            </div>

            <h2 className="text-lg font-semibold text-gray-900">
              No questions yet
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Add some questions to start practicing.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {questions.map((item) => (
              <div
                key={item.id}
                className="group bg-white border border-gray-200 rounded-2xl p-5
                shadow-sm hover:shadow-lg hover:-translate-y-1
                transition-all duration-200"
              >
                {/* Top section */}
                <div className="flex items-center justify-between mb-5">
                  {/* Type */}
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold
                    bg-blue-50 text-blue-600 uppercase"
                  >
                    {item.type}
                  </span>

                  {/* Status */}
                  <span
                    className={`px - 3 py - 1 rounded - full text - xs font - semibold ${item.status === "completed"
                        ? "bg-green-50 text-green-600"
                        : "bg-yellow-50 text-yellow-600"
                      } `}
                  >
                    {item.status === "completed" ? "✓ Completed" : "● Pending"}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-gray-900 leading-snug mb-2">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-6 line-clamp-3 mb-5">
                  {item.description}
                </p>

                {/* Difficulty */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-gray-400">
                      Difficulty
                    </p>

                    <p
                      className={`text - sm font - semibold mt - 1 ${item.difficulty === "easy"
                          ? "text-green-600"
                          : item.difficulty === "medium"
                            ? "text-orange-500"
                            : "text-red-500"
                        } `}
                    >
                      {item.difficulty.toUpperCase()}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    {/* Complete */}
                    <button
                      disabled={item.status === "completed"}
                      onClick={() => handleComplete(item.id)}
                      className={`px - 4 py - 2 px-1 rounded - lg text - sm font - medium
transition - all ${item.status === "completed"
                          ? "bg-green-50 text-green-500 cursor-not-allowed"
                          : "bg-black text-white hover:bg-gray-800 cursor-pointer"
                        } `}
                    >
                      {item.status === "completed" ? "Completed" : "Complete"}
                    </button>

                    {/* Delete */}
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="px-4 py-2 rounded-lg text-sm font-medium
                      border border-red-200 text-red-500
                      hover:bg-red-50 transition cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Questions;
