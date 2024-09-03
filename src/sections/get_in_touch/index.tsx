import React, { useState } from "react";
import styles from "@/styles/sections/get_in_touch/styles.module.scss";

import { Trans, useTranslation } from "react-i18next";
import TitleBox from "@/components/titleBox";
import data from "@/data/data.json";
import { sendEmail } from "@/utils/sendEmail";
import ToastService from "@/services/ToastService";

const GetInTouch = () => {
  const { t } = useTranslation("getInTouch");

  const [emailTooltipText, setEmailTooltipText] = useState("clicktoCopy");
  const [phoneTooltipText, setPhoneTooltipText] = useState("clicktoCopy");
  const [emailTooltipActive, setEmailTooltipActive] = useState(false);
  const [phoneTooltipActive, setPhoneTooltipActive] = useState(false);

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

  const handleCopy = (type: "email" | "phone") => {
    const text =
      type === "email" ? data.contactData.email : data.contactData.phoneNumber;
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setEmailTooltipText("copied");
      setEmailTooltipActive(true);
      setTimeout(() => {
        setEmailTooltipText("clicktoCopy");
        setEmailTooltipActive(false);
      }, 1000);
    } else {
      setPhoneTooltipText("copied");
      setPhoneTooltipActive(true);
      setTimeout(() => {
        setPhoneTooltipText("clicktoCopy");
        setPhoneTooltipActive(false);
      }, 1000);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

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
      errors.firstName = t("errors.required");
      valid = false;
    }

    if (!formValues.lastName.trim()) {
      errors.lastName = t("errors.required");
      valid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formValues.email.trim()) {
      errors.email = t("errors.required");
      valid = false;
    } else if (!emailPattern.test(formValues.email)) {
      errors.email = t("errors.invalidEmail");
      valid = false;
    }

    if (!formValues.message.trim()) {
      errors.message = t("errors.required");
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
    <section className={`${styles.container}`} id="getinTouch">
      <form
        method="POST"
        className={`${styles.itemsHolder}`}
        onSubmit={(e) => {
          ToastService.promiseToast(handleSubmit(e), {
            loadingText: t("sendingMessage"),
            successText: t("successMessage"),
            errorText: t("errorMessage"),
          });
        }}
      >
        <div className={styles.formHolder}>
          <div className={styles.inputGroup}>
            <label htmlFor="firstName">{t("firstName")}</label>
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
            <label htmlFor="lastName">{t("lastName")}</label>
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
            <label htmlFor="email">{t("email")}</label>
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
            <label htmlFor="phoneNumber">{t("phoneNumber")}</label>
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
            <label htmlFor="message">{t("messageTitle")}</label>
            <textarea
              id="message"
              className={`${styles.input} ${
                formErrors.message && styles.error
              }`}
              placeholder={t("messagePlaceHolder")}
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
            <TitleBox title={t("title")} />
          </div>

          <div className={styles.description}>{t("description")}</div>

          <div className={styles.contactData}>
            <div
              className={`${styles.email} ${
                emailTooltipActive ? styles.tooltipActive : ""
              }`}
              onClick={() => handleCopy("email")}
            >
              <div className={styles.title}>{t("email")}</div>
              <div className={styles.value}>
                <div className={`${styles.tooltip}`}>
                  <Trans i18nKey={emailTooltipText} />
                </div>
                <span>{data.contactData.email}</span>
              </div>
            </div>

            <div
              className={`${styles.phoneNumber} ${
                phoneTooltipActive ? styles.tooltipActive : ""
              }`}
              onClick={() => handleCopy("phone")}
            >
              <div className={styles.title}>{t("phoneNumber")}</div>
              <div className={styles.value}>
                <div className={`${styles.tooltip}`}>
                  <Trans i18nKey={phoneTooltipText} />
                </div>
                {data.contactData.phoneNumber}
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default GetInTouch;
