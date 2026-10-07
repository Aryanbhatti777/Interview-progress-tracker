import React, { useEffect, useMemo, useState } from "react";

const Dashboard = () => {
  const [questions, setQuestions] = useState(
    JSON.parse(localStorage.getItem("questions")) || [],
  );

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("questions")) || [];
    setQuestions(result);
  }, []);

  const totalQuestions = questions.length;

  const completedQuestions = questions.filter(
    (item) => item.status === "completed",
  ).length;

  const pendingQuestions = questions.filter(
    (item) => item.status !== "completed",
  ).length;


  const categories = useMemo(() => {
    const getSolved = (type) =>
      questions.filter(
        (item) => item.type === type && item.status === "completed",
      ).length;

    return [
      {
        name: "DSA",
        type: "dsa",
        solved: getSolved("dsa"),
        icon: "⌘",
      },
      {
        name: "Development",
        type: "development",
        solved: getSolved("development"),
        icon: "◈",
      },
      {
        name: "Git",
        type: "git",
        solved: getSolved("git"),
        icon: "⑂",
      },
      {
        name: "Technical",
        type: "technical",
        solved: getSolved("technical"),
        icon: "⚙",
      },
      {
        name: "Interview",
        type: "interview",
        solved: getSolved("interview"),
        icon: "◆",
      },
    ];
  }, [questions]);

  const completionPercentage =
    totalQuestions > 0
      ? Math.round((completedQuestions / totalQuestions) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#f7f7f8] text-gray-900">
      

      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-7">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
                Progress Overview
              </p>

              <h1 className="text-3xl font-bold tracking-tight mt-2">
                Dashboard
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Track your learning and interview preparation.
              </p>
            </div>

            <div className="bg-black text-white rounded-2xl px-6 py-4 min-w-[190px]">
              <p className="text-xs text-gray-400 uppercase tracking-wider">
                Overall Progress
              </p>

              <div className="flex items-end gap-2 mt-1">
                <span className="text-3xl font-bold">
                  {completionPercentage}%
                </span>

                <span className="text-xs text-gray-400 mb-1">completed</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
      

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          

          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Questions</p>

                <h2 className="text-4xl font-bold mt-3">{totalQuestions}</h2>
              </div>

              <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-lg">
                #
              </div>
            </div>

            <p className="text-xs text-gray-400 mt-5">
              Questions available for practice
            </p>
          </div>

        

          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">Completed</p>

                <h2 className="text-4xl font-bold mt-3">
                  {completedQuestions}
                </h2>
              </div>

              <div className="w-11 h-11 rounded-xl bg-green-50 text-green-600 flex items-center justify-center text-lg">
                ✓
              </div>
            </div>

            <div className="mt-5">
              <div className="flex justify-between text-xs mb-2">
                <span className="text-gray-400">Completion</span>

                <span className="font-semibold">{completionPercentage}%</span>
              </div>

              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full transition-all duration-500"
                  style={{
                    width: `${completionPercentage}% `,
                  }}
                />
              </div>
            </div>
          </div>

          

          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">Pending</p>

                <h2 className="text-4xl font-bold mt-3">{pendingQuestions}</h2>
              </div>

              <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center text-lg">
                ○
              </div>
            </div>

            <p className="text-xs text-gray-400 mt-5">
              Questions waiting to be solved
            </p>
          </div>
        </section>

        

        <section className="mt-10">
          <div className="flex items-end justify-between mb-5">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                Breakdown
              </p>

              <h2 className="text-xl font-bold mt-1">Category Progress</h2>
            </div>

            <p className="text-sm text-gray-400">
              {categories.length} categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {categories.map((category) => {
              const total = questions.filter(
                (item) => item.type === category.type,
              ).length;

              const percentage =
                total > 0 ? Math.round((category.solved / total) * 100) : 0;

              return (
                <div
                  key={category.type}
                  className="bg-white border border-gray-200 rounded-2xl p-6
                  hover:shadow-md transition-shadow duration-200"
                >
               

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center font-semibold">
                        {category.icon}
                      </div>

                      <div>
                        <h3 className="font-semibold">{category.name}</h3>

                        <p className="text-xs text-gray-400">
                          {total} total questions
                        </p>
                      </div>
                    </div>

                    <span className="text-lg font-bold">{percentage}%</span>
                  </div>

               

                  <div className="mt-6">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-gray-400">Solved</span>

                      <span className="font-medium">
                        {category.solved} / {total}
                      </span>
                    </div>

                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-black rounded-full transition-all duration-500"
                        style={{
                          width: `${percentage}% `,
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

       

        <section className="mt-10">
          <div className="bg-black text-white rounded-3xl p-7 md:p-9">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-7">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">
                  Keep going
                </p>

                <h2 className="text-2xl font-bold mt-2">
                  {completedQuestions} of {totalQuestions} questions completed
                </h2>

                <p className="text-sm text-gray-400 mt-2">
                  Stay consistent and keep improving your skills.
                </p>
              </div>

              <div className="w-full md:w-[300px]">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>Progress</span>

                  <span>{completionPercentage}%</span>
                </div>

                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-all duration-700"
                    style={{
                      width: `${completionPercentage}% `,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
