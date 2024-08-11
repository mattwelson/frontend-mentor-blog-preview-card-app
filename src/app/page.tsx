import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

import Illustration from "@/images/illustration-article.svg";
import AvatarGreg from "@/images/image-avatar.webp";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Card className="max-w-sm w-full group cursor-pointer">
        <div className="p-6 pb-0">
          <Image
            src={Illustration}
            className="rounded-xl overflow-hidden"
            alt=""
          />
        </div>
        <CardHeader>
          <CardDescription className="flex flex-col items-start gap-3 mb-3">
            <div className="rounded bg-primary text-foreground font-bold px-4 py-1">
              Learning
            </div>
            <div className="text-sm">Published 21 Dec 2023</div>
          </CardDescription>
          <CardTitle className="group-hover:text-primary">
            HTML & CSS foundations
          </CardTitle>
        </CardHeader>
        <CardContent>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </CardContent>
        <CardFooter className="flex gap-2">
          <Avatar>
            <AvatarImage src={AvatarGreg.src} />
          </Avatar>
          <div className="font-bold">Greg Hooper</div>
        </CardFooter>
      </Card>
      <div className="mt-4">
        <a
          href="https://github.com/mattwelson/frontend-mentor-blog-preview-card-app"
          target="_blank"
          rel="nofollower noreferrer"
          className="flex gap-2 items-center"
        >
          <FaGithub className="size-8" />
          Github
        </a>
      </div>
    </main>
  );
}
