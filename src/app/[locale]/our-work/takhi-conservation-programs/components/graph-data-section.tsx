import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const GraphDataSection = () => {
  return (
    <div className="w-full h-[435px] flex">
      <div className="flex-1 flex flex-col h-full">
        <div className="flex-1">
          <Card>
            <CardContent className="p-0">
              <div className="w-full h-[146px]">Content</div>
            </CardContent>
          </Card>
        </div>
        <div className="flex-1">
          <Card>
            <CardContent className="p-0">
              <div className="w-full h-[146px]">Content</div>
            </CardContent>
          </Card>
        </div>
        <div className="flex-1">
          <Card>
            <CardContent className="p-0">
              <div className="w-full h-[146px]">Content</div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex-1 w-full h-[435px]">
        <Card>
          <CardContent className="p-0">
            <div className="w-full h-[435px]">Content</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GraphDataSection;
