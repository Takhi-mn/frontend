import { useTranslations } from "next-intl";
import BlogModal from "./BlogModal";
import BlogCardSection from "./blogCardSection";

type Props = {};

const BlogSection = (props: Props) => {
  const b = useTranslations("Blog");
  return (
    <section>
      <BlogCardSection />
      <div className="text-center mt-7">
        <BlogModal
          write={b("write")}
          name={b("name")}
          email={b("email")}
          emailPlace={b("emailPlace")}
          title={b("title")}
          titlePlace={b("titlePlace")}
          review={b("review")}
          reviewPlace={b("reviewPlace")}
          namePlace={b("namePlace")}
          send={b("send")}
        />
      </div>
    </section>
  );
};

export default BlogSection;
