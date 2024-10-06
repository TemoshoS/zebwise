import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Toast, ToastContainer } from 'react-bootstrap';
import SidebarComponent from "./global-components/navbar";
import './Dashboards.css';

// Medal images (you can replace these URLs with local images or icon imports)
const goldMedal = 'https://img.icons8.com/emoji/48/000000/1st-place-medal-emoji.png';
const silverMedal = 'https://img.icons8.com/emoji/48/000000/2nd-place-medal-emoji.png';
const bronzeMedal = 'https://img.icons8.com/emoji/48/000000/3rd-place-medal-emoji.png';

export default function Dashboards() {
    // Sample leaderboard data for users with ranks
    const [users, setUsers] = useState([
        { name: 'Alice Shaku', score: 95 },
        { name: 'Bob Mathebula', score: 80 },
        { name: 'Charlie Matlala', score: 70 },
        { name: 'Diana Masemola', score: 85 },
        { name: 'Eve Mokwena', score: 90 },
    ]);
    
    const [showToast, setShowToast] = useState(false);

    // Sort users by score in descending order (highest score first)
    useEffect(() => {
        const sortedUsers = [...users].sort((b, a) => a.score - b.score);
        setUsers(sortedUsers);
    }, [users]);

    // Function to get the medal based on rank
    const getMedal = (rank) => {
        switch (rank) {
            case 1:
                return <img src={goldMedal} alt="Gold Medal" width={30} />;
            case 2:
                return <img src={silverMedal} alt="Silver Medal" width={30} />;
            case 3:
                return <img src={bronzeMedal} alt="Bronze Medal" width={30} />;
            default:
                return null;
        }
    };

    return (
        <>
            <SidebarComponent style={{ marginRight: 500 }}> </SidebarComponent>
            <div className="container d-flex">
                <div className="container pt-5 overflow-auto">
                    <div className="bg-light p-0 m-0 mb-5">
                        <div className="card-header d-lg-flex justify-content-lg-between p-0 m-0">
                            <ul className="nav cursor-pointer p-0 m-0">
                                <li className="nav-item">
                                    <a className="nav-link btn-primary px-5 p-3 text-uppercase fw-semibold text-primary">Users Leaderboard</a>
                                </li>
                            </ul>
                        </div>
                        <div className="table-responsive rounded-2 ps-3">
                            <Table striped bordered hover className="align-middle leaderboard-table">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Full Name</th>
                                        <th>Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user, index) => (
                                        <tr key={index} className="table-light cursor-pointer">
                                            <td>
                                                {index + 1} {/* Rank */}
                                                
                                            </td>
                                            <td>{user.name} {getMedal(index + 1)} {/* Medal for top 3 */}</td>
                                            
                                            <td>{user.score}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toast Notification */}
            <ToastContainer position="top-end" className="p-3">
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Notification</strong>
                        <small>Just now</small>
                    </Toast.Header>
                    <Toast.Body>New leaderboard update!</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
}
