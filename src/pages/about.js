import React from "react";
import Layout from "./components/Layout";

const about = () => {
  return (
    <div
      className="bg-white dark:bg-[#121212] p-4 sm:p-5"
      style={{ minHeight: "100vh" }}
    >
      <div className="border border-gray-200 dark:border-[#F5F5F5] max-w-screen-lg mx-auto text-gray-900 dark:text-white rounded-3xl px-4 sm:px-8 md:px-16 py-10">
        <Layout>
          <div className="flex flex-col gap-4 mt-10">
            <h1 className="text-2xl font-bold text-center">About Me</h1>
            <p className="text-gray-600 dark:text-gray-300">
              I am a Frontend Developer with 3 years 8 months of
              experience specializing in React.js, Next.js, and React Native. I
              have a strong background in building modern, scalable, and
              responsive web and mobile applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Currently, I work as a Software Engineer at WebAble Digital, where
              I contribute to developing high-performance applications
              with React, Next.js, and React Native. My expertise
              includes JavaScript, TypeScript, Redux, Tailwind CSS, and API
              integrations.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I transitioned into software development from an Accounting
              background by enrolling in a full-stack coding bootcamp, where I
              mastered React, Next.js, Node.js, and MongoDB. Over the years, I
              have worked on various projects, including e-commerce platforms,
              PWAs, and mobile applications, leveraging technologies
              like TanStack Query, Prisma, and Expo.
            </p>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default about;
