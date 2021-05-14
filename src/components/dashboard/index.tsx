import { FC } from 'react';
import { Row, Col, Progress, Table } from 'antd';
import { IoMailUnread } from 'react-icons/io5';
import './dashboard.less';

const columns = [
    {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName',
    },
    {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
    },
    {
        title: 'City',
        dataIndex: 'city',
        key: 'city',
    },
    {
        title: 'Street',
        dataIndex: 'street',
        key: 'street',
    },
];

const data = [
    {
        key: '1',
        firstName: 'JEmelia',
        lastName: 'Gislason',
        city: 'Lake Zelda',
        street: 'Kulas Shoals',
    },
    {
        key: '2',
        firstName: 'Cloyd',
        lastName: 'Armstrong',
        city: 'East Pierce',
        street: 'Lyla Heights',
    },
    {
        key: '3',
        firstName: 'Rahul',
        lastName: 'Funk',
        city: 'Sibylside',
        street: 'Jolie Shoals',
    },
    {
        key: '4',
        firstName: 'Hilbert',
        lastName: 'Langosh',
        city: 'Anaisshire',
        street: 'Sim Station',
    },
    {
        key: '5',
        firstName: 'Cloyd',
        lastName: 'Wilderman',
        city: 'North Brad',
        street: 'Ruecker Turnpike Shoals',
    },
];

const Dashboard: FC = () => (
    <>
        <Row className="dashboard-row">
            <Col xs={ 24 } sm={ 24 } md={ 12 } lg={ 8 }>
                <div className="dashboard-widget-wrapper">
                    <div className="dashboard-widget-box dashboard-report">
                        <h3 className="dashboard-widget-label">Income</h3>
                        <div className="dashboard-report-bar">
                            <div className="dashboard-report-single-progress">
                                <p>Marketing</p>
                                <Progress percent={ 50 } status="active" />
                            </div>
                            <div className="dashboard-report-single-progress">
                                <p>Advertisement</p>
                                <Progress percent={ 30 } status="active" />
                            </div>
                            <div className="dashboard-report-single-progress">
                                <p>Consulting</p>
                                <Progress percent={ 70 } status="active" />
                            </div>
                            <div className="dashboard-report-single-progress">
                                <p>Development</p>
                                <Progress percent={ 90 } status="active" />
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
            <Col xs={ 24 } sm={ 24 } md={ 12 } lg={ 16 }>
                <div className="dashboard-widget-wrapper">
                    <div className="dashboard-widget-box dashboard-table">
                        <Table
                            columns={ columns }
                            dataSource={ data }
                            pagination={ false }
                        />
                    </div>
                </div>
            </Col>
        </Row>
        <Row className="dashboard-row">
            <Col xs={ 24 } sm={ 12 } md={ 12 } lg={ 6 }>
                <div className="dashboard-widget-wrapper">
                    <div className="dashboard-stat is-first">
                        <div className="dashboard-stat-icon">
                            <IoMailUnread size={ 28 } color="#FFFFFF" />
                        </div>
                        <div className="dashboard-stat-content">
                            <h3 className="dashboard-stat-number">210</h3>
                            <span className="dashboard-stat-label">Unread Email</span>
                        </div>
                    </div>
                </div>
            </Col>
            <Col xs={ 24 } sm={ 12 } md={ 12 } lg={ 6 }>
                <div className="dashboard-widget-wrapper">
                    <div className="dashboard-stat is-second">
                        <div className="dashboard-stat-icon">
                            <IoMailUnread size={ 28 } color="#FFFFFF" />
                        </div>
                        <div className="dashboard-stat-content">
                            <h3 className="dashboard-stat-number">210</h3>
                            <span className="dashboard-stat-label">Image Upload</span>
                        </div>
                    </div>
                </div>
            </Col>
            <Col xs={ 24 } sm={ 12 } md={ 12 } lg={ 6 }>
                <div className="dashboard-widget-wrapper">
                    <div className="dashboard-stat is-third">
                        <div className="dashboard-stat-icon">
                            <IoMailUnread size={ 28 } color="#FFFFFF" />
                        </div>
                        <div className="dashboard-stat-content">
                            <h3 className="dashboard-stat-number">210</h3>
                            <span className="dashboard-stat-label">Total Message</span>
                        </div>
                    </div>
                </div>
            </Col>
            <Col xs={ 24 } sm={ 12 } md={ 12 } lg={ 6 }>
                <div className="dashboard-widget-wrapper">
                    <div className="dashboard-stat is-fourth">
                        <div className="dashboard-stat-icon">
                            <IoMailUnread size={ 28 } color="#FFFFFF" />
                        </div>
                        <div className="dashboard-stat-content">
                            <h3 className="dashboard-stat-number">210</h3>
                            <span className="dashboard-stat-label">Orders Post</span>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </>
);

export default Dashboard;
