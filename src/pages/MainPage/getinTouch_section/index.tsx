import React from "react";
import styles from "./styles.module.scss";
import { Trans, useTranslation } from "react-i18next";
import TitleBox from "@/components/titleBox";
import data from "@/data.json";

const GetInTouch = () => {
  const { t } = useTranslation();

  // Function to handle focus change on Enter key press
  const handleKeyDown = (e, nextElementId) => {
    if (e.key === "Enter" && nextElementId) {
      e.preventDefault();
      const nextElement = document.getElementById(nextElementId);
      if (nextElement) {
        nextElement.focus();
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.itemsHolder}>
        <div className={styles.formHolder}>
          <div className={styles.inputGroup}>
            <label htmlFor="firstName">
              <Trans i18nKey={"getInTouch.firstName"}></Trans>
            </label>
            <input
              type="text"
              className={styles.input}
              id="firstName"
              placeholder="John"
              onKeyDown={(e) => handleKeyDown(e, "lastName")}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="lastName">
              <Trans i18nKey={"getInTouch.lastName"}></Trans>
            </label>
            <input
              type="text"
              className={styles.input}
              id="lastName"
              placeholder="doe"
              onKeyDown={(e) => handleKeyDown(e, "email")}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">
              <Trans i18nKey={"getInTouch.email"}></Trans>
            </label>
            <input
              type="email"
              className={styles.input}
              id="email"
              placeholder="exampleEmail@gmail.com"
              onKeyDown={(e) => handleKeyDown(e, "phoneNumber")}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="phoneNumber">
              <Trans i18nKey={"getInTouch.phoneNumber"}></Trans>
            </label>
            <input
              type="text"
              className={styles.input}
              id="phoneNumber"
              placeholder="+905389765711"
              onKeyDown={(e) => handleKeyDown(e, "message")}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message">
              <Trans i18nKey={"getInTouch.messageTitle"}></Trans>
            </label>
            <textarea
              id="message"
              className={styles.input}
              placeholder={t("getInTouch.messagePlaceHolder")}
            ></textarea>
          </div>

          <div className={styles.submitButton}>
            <button>
              <Trans i18nKey={"submit"}></Trans>
            </button>
          </div>
        </div>

        <div className={styles.contentHolder}>
          <div className={styles.titleHolder}>
            <TitleBox title={t("getInTouch.title")} />
          </div>

          <div className={styles.description}>
            <Trans i18nKey={"getInTouch.description"} />
          </div>

          <div className={styles.contactData}>
            <div className={styles.email} onClick={() => navigator.clipboard.writeText(data.contactData.email)}>
              <div className={styles.title}>
                <Trans i18nKey={"getInTouch.email"} />
              </div>
              <div className={styles.value}>
                <div className={styles.tooltip}>{t("clicktoCopy")}</div>
                <span>
                  {data.contactData.email}

                </span>
              </div>
            </div>

            <div className={styles.phoneNumber} onClick={() => navigator.clipboard.writeText(data.contactData.phoneNumber)}>
              <div className={styles.title}>
                <Trans i18nKey={"getInTouch.phoneNumber"} />
              </div>
              <div className={styles.value}>
                <div className={styles.tooltip}>{t("clicktoCopy")}</div>
                {data.contactData.phoneNumber}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
