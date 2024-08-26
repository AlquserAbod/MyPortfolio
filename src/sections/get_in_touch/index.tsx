import React, { useState } from "react";
import styles from "@/styles/sections/get_in_touch/styles.module.scss";

import { Trans, useTranslation } from "react-i18next";
import TitleBox from "@/components/titleBox";
import data from "@/data.json";
import { sendEmail } from "@/utils/sendEmail";
import ToastService from "@/services/ToastService";

const GetInTouch = () => {
  const { t } = useTranslation();

  const [emailTooltipText, setEmailTooltipText] = useState("clicktoCopy");
  const [phoneTooltipText, setPhoneTooltipText] = useState("clicktoCopy");

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  // Function to handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  // Function to handle focus change on Enter key press
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    nextElementId: string
  ) => {
    if (e.key === "Enter" && nextElementId) {
      e.preventDefault();
      const nextElement = document.getElementById(nextElementId);
      if (nextElement) {
        nextElement.focus();
      }
    }
  };

  const validateForm = () => {
    const errors = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    };
    let valid = true;

    if (!formValues.firstName.trim()) {
      errors.firstName = t("getInTouch.errors.required");
      valid = false;
    }

    if (!formValues.lastName.trim()) {
      errors.lastName = t("getInTouch.errors.required");
      valid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formValues.email.trim()) {
      errors.email = t("getInTouch.errors.required");
      valid = false;
    } else if (!emailPattern.test(formValues.email)) {
      errors.email = t("getInTouch.errors.invalidEmail");
      valid = false;
    }

    if (!formValues.message.trim()) {
      errors.message = t("getInTouch.errors.required");
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) throw Error("form is not valid");

    try {
      await sendEmail({
        templateParams: {
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          email: formValues.email,
          phoneNumber: formValues.phoneNumber,
          message: formValues.message,
        },
      });

      setFormValues({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } catch (error) {
      throw Error("error");
    }
  };

  return (
    <div className={`${styles.container}`} id="getinTouch">
      <form
        action="https://formspree.io/f/mqaznzja"
        method="POST"
        className={styles.itemsHolder}
        onSubmit={(e) => {
          ToastService.promiseToast(handleSubmit(e), {
            loadingText: t("getInTouch.sendingMessage"),
            successText: t("getInTouch.successMessage"),
            errorText: t("getInTouch.errorMessage"),
          });
        }}
      >
        <div className={styles.formHolder}>
          <div className={styles.inputGroup}>
            <label htmlFor="firstName">
              <Trans i18nKey={"getInTouch.firstName"} /> *
            </label>
            <input
              type="text"
              className={`${styles.input} ${
                formErrors.firstName && styles.error
              }`}
              id="firstName"
              placeholder="John"
              value={formValues.firstName}
              onChange={handleInputChange}
              onKeyDown={(e) => handleKeyDown(e, "lastName")}
            />
            {formErrors.firstName && (
              <label htmlFor="firstName" className={styles.errorText}>
                {formErrors.firstName}
              </label>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="lastName">
              <Trans i18nKey={"getInTouch.lastName"} /> *
            </label>
            <input
              type="text"
              className={`${styles.input} ${
                formErrors.lastName && styles.error
              }`}
              id="lastName"
              placeholder="Doe"
              value={formValues.lastName}
              onChange={handleInputChange}
              onKeyDown={(e) => handleKeyDown(e, "email")}
            />
            {formErrors.lastName && (
              <label htmlFor="lastName" className={styles.errorText}>
                {formErrors.lastName}
              </label>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">
              <Trans i18nKey={"getInTouch.email"} /> *
            </label>
            <input
              type="email"
              className={`${styles.input} ${formErrors.email && styles.error}`}
              id="email"
              placeholder="exampleEmail@gmail.com"
              value={formValues.email}
              onChange={handleInputChange}
              onKeyDown={(e) => handleKeyDown(e, "phoneNumber")}
            />
            {formErrors.email && (
              <label htmlFor="email" className={styles.errorText}>
                {formErrors.email}
              </label>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="phoneNumber">
              <Trans i18nKey={"getInTouch.phoneNumber"} />
            </label>
            <input
              type="text"
              className={`${styles.input} ${
                formErrors.phoneNumber && styles.error
              }`}
              id="phoneNumber"
              placeholder="+905389765711"
              value={formValues.phoneNumber}
              onChange={handleInputChange}
              onKeyDown={(e) => handleKeyDown(e, "message")}
            />
            {formErrors.phoneNumber && (
              <label htmlFor="phoneNumber" className={styles.errorText}>
                {formErrors.phoneNumber}
              </label>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message">
              <Trans i18nKey={"getInTouch.messageTitle"} /> *
            </label>
            <textarea
              id="message"
              className={`${styles.input} ${
                formErrors.message && styles.error
              }`}
              placeholder={t("getInTouch.messagePlaceHolder")}
              value={formValues.message}
              onChange={handleInputChange}
            ></textarea>
            {formErrors.message && (
              <label htmlFor="message" className={styles.errorText}>
                {formErrors.message}
              </label>
            )}
          </div>

          <div className={styles.submitButton}>
            <button type="submit">
              <Trans i18nKey={"submit"} />
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
            <div
              className={styles.email}
              onClick={() => {
                navigator.clipboard.writeText(data.contactData.email);
                setEmailTooltipText("copied");
                setTimeout(() => {
                  setEmailTooltipText("clicktoCopy");
                }, 1000);
              }}
            >
              <div className={styles.title}>
                <Trans i18nKey={"getInTouch.email"} />
              </div>
              <div className={styles.value}>
                <div className={`${styles.tooltip}`}>{t(emailTooltipText)}</div>
                <span>{data.contactData.email}</span>
              </div>
            </div>

            <div
              className={styles.phoneNumber}
              onClick={() => {
                navigator.clipboard.writeText(data.contactData.phoneNumber);
                setPhoneTooltipText("copied");
                setTimeout(() => {
                  setPhoneTooltipText("clicktoCopy");
                }, 1000);
              }}
            >
              <div className={styles.title}>
                <Trans i18nKey={t("getInTouch.phoneNumber")} />
              </div>
              <div className={styles.value}>
                <div className={`${styles.tooltip}`}>{t(phoneTooltipText)}</div>
                {data.contactData.phoneNumber}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GetInTouch;
