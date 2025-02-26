import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex justify-center items-center min-h-screen">
      {children}
    </div>
  );
};

export default AuthLayout;
