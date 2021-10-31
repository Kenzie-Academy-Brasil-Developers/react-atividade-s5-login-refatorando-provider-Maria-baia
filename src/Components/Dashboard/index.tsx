import { useAuth } from "../../Providers/Auth";

const Dashboard = () => {
    const {logout} = useAuth();    

    return (
        <>
            <button onClick={logout}>Logout</button>
        </>
    );
};

export default Dashboard;