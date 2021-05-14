import { FC } from 'react';

const TopbarNotificationDropdown: FC = () => {
    return (
        <div className="topbar-dropdown is-notifications">
            <div className="topbar-dropdown-header">
                <h3>Notifications</h3>
            </div>
            <div className="topbar-dropdown-body">
                <div className="topbar-dropdown-item">
                    <h5>David Doe</h5>
                    <p>A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner</p>
                </div>
                <div className="topbar-dropdown-item">
                    <h5>David Doe</h5>
                    <p>A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner</p>
                </div>
                <div className="topbar-dropdown-item">
                    <h5>David Doe</h5>
                    <p>A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner</p>
                </div>
            </div>
            <div className="topbar-dropdown-viewall">
                View all
            </div>
        </div>
    );
};

export default TopbarNotificationDropdown;
