import Image from 'next/image'
import styles from "../../styles/Home.module.css";
export default function Timeline({user}){
    return(
    <div className={styles.card}>
      <Image src={user.avatar_url} alt={user.name} width={100} height={100}/>
      <h4>{user.name}</h4>
      <p className={styles.title}>{user.company}</p>
      <p>{user.blog}</p>
      <div>
      <table className={styles.userstable}>
        <thead>
            <tr>
                <th className={styles.cellWidth}>Public Repos</th>
                <th className={styles.cellWidth}>Followers</th>
                <th className={styles.cellWidth}>Following</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className={styles.cellWidth}>{user.public_repos}</td>
                <td className={styles.cellWidth}>{user.followers}</td>
                <td className={styles.cellWidth}>{user.following}</td>
            </tr>
        </tbody>
      </table>
      </div>
    </div>
    )
}