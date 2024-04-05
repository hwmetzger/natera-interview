"use client";

import { LoginComponent } from "@/components/index";
import { useState } from "react";
import { DataService } from "@/services/index";
import { useRouter } from "next/navigation";

/**
 * This is the NextJS CSR Page for route '/'.
 * @returns Promise<React.ReactElement>
 */
export default function Page() {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const handleSignInClick = (username: string) => {
    switch (username.toLowerCase()) {
      case "1":
        DataService.Account.login(1).then((res: any) => {
          if (+res.group === 1) {
            router.push("/form1");
          }
        });
        break;
      case "2":
        DataService.Account.login(2).then((res: any) => {
          if (+res.group === 2) {
            router.push("/form2");
          }
        });
        break;
      default:
        setMessage("Invalid username!");
        break;
    }
  };
  return (
    <>
      <div>
        <LoginComponent onSignInClick={handleSignInClick} />
      </div>
      <div className="text-red-600">{message}</div>
    </>
  );
}
