import { FC } from 'react';

const TopbarProfileDropdown: FC = () => {
    return (
        <div className="topbar-dropdown is-profile">
            <div className="topbar-dropdown-body">
                <a href="/#" className="topbar-dropdown-link">
                    <span>My profile</span>
                </a>
                <a href='/#' className="topbar-dropdown-link">
                    <span>Settings</span>
                </a>
                <a href="/#" className="topbar-dropdown-link">
                    <span>Log out</span>
                </a>
            </div>
        </div>
    );
};

export default TopbarProfileDropdown;
