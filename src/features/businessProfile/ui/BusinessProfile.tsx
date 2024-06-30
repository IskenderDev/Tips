import { formDataAtom } from "@/app/jotai/atoms";
import { CommentCard } from "@/entities/commentCard";
import { SumCard } from "@/entities/SumCard";
import { useAtomValue } from "jotai";
import React from "react";

const BusinessPage: React.FC = () => {
  const FormData = useAtomValue(formDataAtom);

  return (
    <>
      <SumCard
        secondaryText="Вы заработали"
        businessName={FormData.businessName}
        sum={123}
      />
      <CommentCard comment="qwe" tips={123} recall={true} />
    </>
  );
};

export default BusinessPage;
