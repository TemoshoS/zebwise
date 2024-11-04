import React, { useState } from 'react';
import SidebarComponent from './global-components/navbar'; // Ensure this is the correct path for your sidebar

export default function Notifications() {
    const [notifications, setNotifications] = useState([
        { id: 1, message: "New comment on your post." },
        { id: 2, message: "Your profile was updated." },
        { id: 3, message: "You have a new follower." },
        // Add more notifications as needed
    ]);

    return (
        <>
            <SidebarComponent/> {/* Sidebar on the left */}
            <div className="container">
                <div className="notifications-container flex-grow-1 p-4"> {/* Make the notifications section grow */}
                    <h2>Notifications</h2>
                    <div className="notification-count">
                        <span>You have {notifications.length} notifications</span>
                    </div>
                    <ul className="notification-list">
                        {notifications.length > 0 ? (
                            notifications.map(notification => (
                                <li key={notification.id}>{notification.message}</li>
                            ))
                        ) : (
                            <li>No notifications available.</li>
                        )}
                    </ul>
                </div>
            </div>
        </>

    );
}
