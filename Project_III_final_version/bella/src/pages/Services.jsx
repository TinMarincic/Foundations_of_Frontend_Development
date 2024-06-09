import './services.css';

function Services() {
    return (
        <div className="services-table-container">
            <table className="services-table">
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ladies cut</td>
                        <td>30 KM</td>
                    </tr>
                    <tr>
                        <td>Mens cut</td>
                        <td>15 KM</td>
                    </tr>
                    <tr>
                        <td>Hair dyeing</td>
                        <td>30 KM</td>
                    </tr>
                    <tr>
                        <td>Beard</td>
                        <td>5 KM</td>
                    </tr>
                    <tr>
                        <td>Blow-drying</td>
                        <td>20 KM</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Services;
