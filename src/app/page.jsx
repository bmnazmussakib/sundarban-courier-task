import Image from "next/image";
import styles from "./page.module.scss";

import Card from "@/components/Card/Card";

export default function Home() {
  return (
    <main className={styles.bodyBackground}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.contentTitle}>Maeman</h1>
          <h4 className={styles.contentSubTitle}>what's include</h4>
          <div className="row">
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
