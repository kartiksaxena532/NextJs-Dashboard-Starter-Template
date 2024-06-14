import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dashboard } from "@/components/ui/dashboard";
import { redirect } from 'next/navigation';
export default function Home() {
  return (
    redirect('/auth/sign-in');
    
  );
}


