import React from 'react';
import { Table } from 'react-bootstrap';

const leaderboardData = [
    { rank: 1, name: 'Thabo Mahlangu', engagementScore: 950, posts: 30, comments: 120, likes: 200, shares: 50, totalInteractions: 400 },
    { rank: 2, name: 'Bob Smith', engagementScore: 850, posts: 25, comments: 100, likes: 180, shares: 45, totalInteractions: 350 },
    { rank: 3, name: 'Tebogo Mukwena', engagementScore: 800, posts: 20, comments: 95, likes: 170, shares: 35, totalInteractions: 320 },
    { rank: 4, name: 'David Brown', engagementScore: 750, posts: 15, comments: 80, likes: 160, shares: 30, totalInteractions: 285 },
    { rank: 5, name: 'Sibusiso Khumalo', engagementScore: 700, posts: 10, comments: 75, likes: 150, shares: 25, totalInteractions: 260 }
];

function LeaderboardTable() {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Engagement Score</th>
                <th>Posts</th>
                <th>Comments</th>
                <th>Likes</th>
                <th>Shares</th>
                <th>Total Interactions</th>
            </tr>
            </thead>
            <tbody>
            {leaderboardData.map((item) => (
                <tr key={item.rank}>
                    <td>{item.rank}</td>
                    <td>{item.name}</td>
                    <td>{item.engagementScore}</td>
                    <td>{item.posts}</td>
                    <td>{item.comments}</td>
                    <td>{item.likes}</td>
                    <td>{item.shares}</td>
                    <td>{item.totalInteractions}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default LeaderboardTable;
