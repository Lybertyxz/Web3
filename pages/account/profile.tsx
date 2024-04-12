import React, { FormEvent, useEffect, useState } from "react";
import { User } from "../../utils/types";
import { apiService } from "../../utils/api";

function ProfilePage() {
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState<User>({
    username: "",
    email: "",
    description: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedAsset = await apiService.account.getProfile();
        setProfile(fetchedAsset);
      } catch (error) {
        console.error("Error fetching assets:", error.message);
      }

      fetchData();
    };
  }, [profile]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updateProfile = async () => {
      try {
        await apiService.account.updateProfile(
          profile.username,
          profile.email,
          profile.description
        );
      } catch (error) {
        console.error("Error updating profile:", error.message);
      }
    };

    updateProfile();
  };

  return (
    <div>
      <div className="container mx-auto my-40 antialiased">
        <div>
          <div className="relative mx-auto w-5/6 rounded-lg bg-white pb-10  shadow md:w-5/6 lg:w-4/6  xl:w-3/6">
            <div className="flex justify-center">
              <img
                src="/pp.jpg"
                alt=""
                className="absolute -top-20 mx-auto h-32 w-32 transform rounded-full border-4 border-white shadow-md transition duration-200 hover:scale-110"
              />
            </div>

            <div className="mt-16">
              <h1 className="text-center text-3xl font-bold text-gray-900">
                John Doe
              </h1>
              <p className="text-center text-sm font-medium text-gray-400">
                john.doe@company.com
              </p>
              <div className="my-5 px-6">
                <a
                  href="#"
                  className="block rounded-lg bg-[#6A64F1] px-6 py-3 text-center font-medium leading-6 text-gray-200 hover:bg-indigo-800 hover:text-white"
                  onClick={() => setShow(!show)}
                >
                  Edit
                </a>
              </div>
              {show && (
                <form onSubmit={handleSubmit} className="px-10">
                  <div className="mb-6 grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="username"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder="John"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Description
                    </label>
                    <textarea
                      rows={2}
                      id="description"
                      name="description"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="john.doe@company.com"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#6A64F1] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:hover:bg-indigo-800 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
