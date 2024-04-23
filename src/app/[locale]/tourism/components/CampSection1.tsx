import { contentConverter, nameConverter } from "@/lib/nameConverter";
import { INews } from "@/types/backend";

type Props = {
  data: INews | undefined;
  selectedLanguage: any;
};

const CampSection1 = ({ data, selectedLanguage }: Props) => {
  return (
    <div className="my-16">
      <h1 className="text-2xl font-bold mb-14 text-center">
        {nameConverter(data, selectedLanguage)}
      </h1>
      <p
        className="text-pretty ProseMirror"
        dangerouslySetInnerHTML={{
          __html: contentConverter(data, selectedLanguage),
        }}
      ></p>
    </div>
  );
};

export default CampSection1;
