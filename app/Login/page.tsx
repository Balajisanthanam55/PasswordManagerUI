'use client'

import { useRouter } from "next/navigation";




const LoginPage = () => {
   
  const router = useRouter();
  const handleLogin = async () => {
    router.push('/HomePage');
  };

  return (
    <div>
      
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage