import { useParams } from "react-router";

const StudentId = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Student ID: {id}</h2>
        </div>
    );
};

export default StudentId;