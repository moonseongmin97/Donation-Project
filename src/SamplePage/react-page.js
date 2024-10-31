import { Table } from 'react-bootstrap';

const MyList = () => (
    
<div className="container d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#f8f9fa' }}>
    <div className="col-md-6">
        <h2 className="text-center mb-4">Centered List Group</h2>
        
        <ul className="list-group shadow-sm">
            <li className="list-group-item mb-3" style={{ padding: '1.5rem' }}>Item 1</li>
            <li className="list-group-item mb-3" style={{ padding: '1.5rem' }}>Item 2</li>
            <li className="list-group-item mb-3" style={{ padding: '1.5rem' }}>Item 3</li>
            <li className="list-group-item mb-3" style={{ padding: '1.5rem' }}>Item 4</li>
            <li className="list-group-item mb-3" style={{ padding: '1.5rem' }}>Item 5</li>
        </ul>
    </div>
</div>
   
);
export default MyList;
