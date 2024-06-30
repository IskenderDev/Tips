import { Flex, Image } from "antd";
import TextArea from "antd/es/input/TextArea";
import style from "./TextAreaCard.module.scss";
import pencil from "@/shared/assets/270f-fe0f 1 (1).png";

const TextAreaCard = () => {
  return (
    <Flex gap={20}  align="center" justify="center" className={style.container}>
      <Image width={70} src={pencil} className={style.image} />
      <div className={style.line}></div>
      <TextArea
        className={style.textarea}
        placeholder="Расскажите о своих впечатлениях"
        autoSize={{ minRows: 3, maxRows: 5 }}
      />
    </Flex>
  );
};

export default TextAreaCard;
