// Login.jsx
import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#fffaf0] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        {/* Logo & Title */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-4xl">
              ☕
            </div>
            <h1 className="font-bold text-4xl text-amber-950">Get Me Chai</h1>
          </div>
          <p className="text-amber-700 text-center text-lg">
            Sign in to continue
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-xl p-10 border border-amber-100">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
            Welcome Back
          </h2>

          {/* Social Login Buttons */}
          <div className="space-y-4">
            {/* Google */}
            <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 hover:border-gray-400 py-4 rounded-2xl transition-all hover:shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.51h5.92c-.25 1.37-1 2.53-2.13 3.31v2.68h3.44c2.01-1.85 3.17-4.58 3.17-7.75z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.44-2.68c-.95.64-2.17 1-3.84 1-2.95 0-5.47-1.99-6.37-4.68H2.34v2.9C4.14 20.7 7.75 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.63 14.65c-.23-.69-.36-1.42-.36-2.18s.13-1.49.36-2.18v-2.9H2.34C1.48 9.44 1 10.7 1 12c0 1.3.48 2.56 1.34 3.51l2.29-1.86z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.68 0 3.18.58 4.36 1.72l3.27-3.27C17.45 2.09 14.97 1 12 1 7.75 1 4.14 3.3 2.34 7.1l3.29 2.9c.9-2.69 3.42-4.62 6.37-4.62z"
                />
              </svg>
              <span className="font-medium text-gray-700">
                Continue with Google
              </span>
            </button>

            {/* Facebook */}
            <button className="w-full flex items-center justify-center gap-3 bg-[#1877F2] text-white py-4 rounded-2xl hover:bg-[#166fe5] transition-all">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="font-medium">Continue with Facebook</span>
            </button>

            {/* Apple */}
            <button className="w-full flex items-center justify-center gap-3 bg-black text-white py-4 rounded-2xl hover:bg-gray-900 transition-all">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-1.96.8-3.31.82-1.37.03-2.27-1.24-3.09-2.5-1.67-2.6-2.8-7.32-1.17-10.48 1.63-3.15 4.3-3.84 5.4-3.84 1.1 0 2.52.67 3.3.67.78 0 2.1-.83 3.57-.7 1.52.13 2.9.79 3.78 2.1-3.3 2.02-2.76 7.3.3 9.8zM15.5 3.5c-.64-1.2-1.7-1.96-2.8-1.96-.1 1.3.9 2.6 2 3.5.8.7 1.9 1.1 2.8 1z" />
              </svg>
              <span className="font-medium">Continue with Apple</span>
            </button>

            {/* Twitter / X */}
            <button className="w-full flex items-center justify-center gap-3 bg-black text-white py-4 rounded-2xl hover:bg-gray-900 transition-all">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25l-7.584 8.6L3 2.25H0l7.4 10.5L0 21.75h3.244l6.3-7.35 6.3 7.35H24l-7.5-10.5L24 2.25h-3.756z" />
              </svg>
              <span className="font-medium">Continue with X</span>
            </button>

            {/* GitHub */}
            <button className="w-full flex items-center justify-center gap-3 bg-black text-white py-4 rounded-2xl hover:bg-gray-900 transition-all">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.295 2.75-1.026 2.75-1.026.544 1.376.202 2.393.1 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.338 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              <span className="font-medium">Continue with GitHub</span>
            </button>

            {/* LinkedIn */}
            <button className="w-full flex items-center justify-center gap-3 bg-[#0A66C2] text-white py-4 rounded-2xl hover:bg-[#0956a3] transition-all">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452H16.89v-5.569c0-1.327-.027-3.037-1.85-3.037-1.85 0-2.133 1.446-2.133 2.94v5.666H9.343V9.75h3.347v1.438h.046c.466-.886 1.6-1.822 3.293-1.822 3.52 0 4.17 2.316 4.17 5.33v6.656zM5.337 8.25c-1.197 0-2.163-.97-2.163-2.163 0-1.194.966-2.163 2.163-2.163 1.194 0 2.163.97 2.163 2.163 0 1.193-.97 2.163-2.163 2.163zM7.11 20.452H3.564V9.75H7.11v10.702z" />
              </svg>
              <span className="font-medium">Continue with LinkedIn</span>
            </button>
          </div>

          <div className="text-center text-xs text-gray-400 mt-8">
            By signing in, you agree to our Terms and Privacy Policy
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <a
            href="/"
            className="text-amber-600 hover:text-amber-700 text-sm font-medium"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
