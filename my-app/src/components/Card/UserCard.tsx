import type { User } from "../interfaces/User";

interface UserCardProps {
    user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
    return (
        <div style={{ borderRadius: "3px" }}>
            <h3>{user.name}</h3>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </div>
    );
};
