import { getUserDetails } from "../api"
import Timeline from "./timeline";
import styles from "../../styles/Home.module.css";
export default async function Page({
   searchParams,
 }) {
   const login= searchParams["name"];
   const user = await getUserDetails(login)
   return (
   <><h1  className={styles.center}>{user.name}'s Profile</h1>
   <Timeline user={user}></Timeline>
   </>)
}
