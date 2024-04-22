"use client";
import Rating from "./Rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageProvider";
import { dateFormatter } from "@/lib/dateFormatter";
import { IBlog } from "@/types/backend";

interface IProps {
  blogData: IBlog | undefined;
}

const BlogCard = ({ blogData }: IProps) => {
  const router = useRouter();
  const { selectedLanguage } = useLanguage();
  return (
    <div className=" min-w-[390px] max-w-[390px] min-h-[350px] flex flex-col rounded-[8px] justify-between bg-muted p-5 gap-3">
      <div
        onClick={() =>
          router.push(
            `http://localhost:3000/${selectedLanguage}/blog/${blogData?.id}`
          )
        }
        className="hover:cursor-pointer flex flex-col gap-3 "
      >
        <h1 className="text-xl font-bold line-clamp-2 ">{blogData?.name_mn}</h1>
        <p
          className="line-clamp-6"
          dangerouslySetInnerHTML={{
            __html: blogData ? blogData.content_mn : "",
          }}
        ></p>
      </div>
      <div>
        <div className="flex justify-between mt-5 w-full">
          <Rating checked={blogData?.stars} isClickable={false} />
          <p className="font-extrabold ">
            {dateFormatter(blogData?.createdAt)}
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <Avatar className="mt-3">
            <AvatarImage
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h3 className="font-extrabold">{blogData?.fullname}</h3>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
