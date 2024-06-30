import { Typography } from "antd";
import styles from "./RegistrationView.module.scss";
import { RegistrationForm } from "@/features/registrationForm";
const { Title } = Typography;

function RegistrationView() {
  return (
    <div className={styles.regDiv}>
      <Title className={styles.title} level={1}>
        Хочу подключить заведение к Gadget
      </Title>
      <hr/>
      <RegistrationForm />
    </div>
  );
}

export default RegistrationView;
