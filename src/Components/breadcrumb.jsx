import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ breadcrumbs }) => {
return (
    <div className="breadcrumbs">
        {breadcrumbs.map((breadcrumb, index) => (
        <span key={index}>
            {index > 0 && <span className="separator">/</span>}
            {breadcrumb.link ? (
                <Link to={breadcrumb.link}>{breadcrumb.label}</Link>
                ) : (
                <span>{breadcrumb.label}</span>
            )}
        </span>
        ))}
    </div>
    );
};

export default Breadcrumbs;