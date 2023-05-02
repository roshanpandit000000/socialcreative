import { useContext, useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { getError } from "../utils/error";
import { toast } from "react-toastify";


const Login = () => {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || "/");
    }
  }, [router, session, redirect]);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  // cart page

  // offcanvas
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" ">
      <button
        type="button"
        className="focus:outline-none bg-gray-100 border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded text-gray-600  py-2 px-3 text-xs"
        onClick={toggleMenu}
      >
        Login
        {isOpen ? (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.95 5.95l-14 14-1.414-1.414 14-14 1.414 1.414zM4.05 5.95l14 14 1.414-1.414-14-14-1.414 1.414z"
          />
        ) : (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm16 6H4v2h16v-2z"
          />
        )}
      </button>
      <div
        className={classNames(
          "fixed z-40 top-0 right-0 bottom-0 left-0 bg-gray-800 bg-opacity-75 transition-opacity",
          { "opacity-100 pointer-events-auto": isOpen },
          { "opacity-0 pointer-events-none": !isOpen }
        )}
        onClick={toggleMenu}
      ></div>
      <div
        className={classNames(
          "fixed z-50 top-0 right-0 bottom-0 w-4/12 bg-white shadow-lg transform transition-transform",
          { "translate-x-0": isOpen },
          { "translate-x-full": !isOpen }
        )}
      >
        <div>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="mt-8 flex flex-col justify-start items-start ml-16 w-full space-y-8 ">
              <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                Login
              </p>
              <input
                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-5/6"
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: "Please enter email",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                    message: "Please enter valid email",
                  },
                })}
                id="email"
                autoFocus
              />
              {errors.email && (
                <div className="text-red-500">{errors.email.message}</div>
              )}
              <input
                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4  w-5/6"
                type="text"
                placeholder="Password"
                {...register("password", {
                  required: "Please enter password",
                  minLength: {
                    value: 6,
                    message: "password is more than 5 chars",
                  },
                })}
                id="password"
                autoFocus
              />
              {errors.password && (
                <div className="text-red-500 ">{errors.password.message}</div>
              )}
              <button className="text-lg ">Login</button>
              <div className="mb-4 ">
                Don&apos;t have an account? &nbsp;
                <Link href={`/signup?redirect=${redirect || '/'}`}>Signup</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Login), { ssr: false });
