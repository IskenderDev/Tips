import { useState } from "react";
import styles from "./Raiting.module.scss";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

const Rating = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    if (isDisliked) setIsDisliked(false);
  };

  const handleDislikeClick = () => {
    setIsDisliked(!isDisliked);
    if (isLiked) setIsLiked(false);
  };

  return (
    <>
      <h2 className={styles.name}>Оцените место</h2>

      <div className={styles.buttons}>
        <button
          className={`${styles.dislikeButton} ${
            isDisliked ? styles.active : ""
          }`}
          onClick={handleDislikeClick}
        >
          <DislikeOutlined />
          <br />
          <span>Плохо</span>
        </button>
        <button
          className={`${styles.likeButton} ${isLiked ? styles.active : ""}`}
          onClick={handleLikeClick}
        >
          <LikeOutlined />
          <br />
          <span>Хорошо</span>
        </button>
      </div>
    </>
  );
};

export default Rating;
