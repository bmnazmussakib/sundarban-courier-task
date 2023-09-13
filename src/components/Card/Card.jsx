import React from "react";
import styles from "./card.module.scss";
import { FaClone } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";

export default function Card({ title, text, icon }) {
  return (
    <div className={styles.card}>
      <TbEdit className={styles.icon} />
      <h4 className={styles.cardTitle}>100% Vector</h4>
      <p className={styles.cardText}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        harum?
      </p>
    </div>
  );
}
